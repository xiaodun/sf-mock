(function () {
  const url = require("url");
  const path = require("path");
  const darkUtils = require("./utils/darkUtils");
  const pageUtils = require("./utils/pageUtils");
  const editJsUtils = require("./utils/editJsUtils");
  const copySwaggerUtils = require("./utils/copySwaggerUtils");
  const _ = require("lodash");
  const querystring = require("querystring");
  const defaultConfig = eval(
    fs.readFileSync("./config/defaultConfig.js", "utf-8")
  );
  const serviceConfig = eval(
    fs.readFileSync("./config/serviceConfig.js", "utf-8")
  );
  const copySwaggerConfig = eval(
    fs.readFileSync("./config/copySwaggerConfig.js", "utf-8")
  );

  return function (params = {}) {
    const { request, response, dealError } = params;
    if (["/favicon.ico"].includes(request.url)) {
      response.end();
      return;
    }

    let headers = serviceConfig.getHeaders({
      remoteOrigin: request.headers.origin || "*",
      reqHeaders:
        Object.keys(request.headers).join(",") +
        "," +
        (request.headers["access-control-request-headers"] || ""),
    });

    console.log(request.url);

    if (request.url === serviceConfig.debuggerPath) {
      //使用chrome调试
      response.writeHead(200, headers);
      return;
    }
    //存储一些和项目相关的数据
    let programDatas = {};
    let functionArgams = {
      req: request,
      rsp: response,
      headers,
      pageInfos: {},
      inject: {},
    };
    const method = request.method.toLowerCase();
    if (["post", "put"].includes(method)) {
      let data = "";

      request.on("data", function (chunk) {
        data += chunk;
      });

      request.on("end", function () {
        try {
          if (
            request.headers["content-type"] ===
            "application/x-www-form-urlencoded"
          ) {
            data = querystring.parse(data);
            Object.keys(data).forEach((key) => {
              let value = data[key];
              //是否需要解析
              try {
                const parseData = JSON.parse(data[key]);
                if (typeof parseData == "object") {
                  value = parseData;
                }
              } catch (e) {}

              data[key] = value;
            });
          } else {
            data = JSON.parse(data || null);
          }
          functionArgams.params = data;
        } catch (error) {
          console.log("参数解析出错");
          console.log(error);
        }
        startParse();
      });
    } else {
      let data = url.parse(request.url, true).query || {};
      functionArgams.params = data;
      startParse();
    }

    async function startParse() {
      try {
        //获取mock文件
        const mockFile = darkUtils.getMockFile(request.url);
        if (programDatas[mockFile.programName] == null) {
          programDatas[mockFile.programName] = {
            createdAPi: {
              //已经创建的api，避免死循环
            },
          };
        }
        const apis = mockFile.apis;
        //url带有查询参数在匹配的时候将被忽略
        let url = mockFile.url.split("?")[0];
        let mockData = apis[url];

        if (mockData == undefined) {
          //是否存在动态路径
          for (const [key, value] of Object.entries(apis)) {
            if (value.options && value.options.supportRegexp) {
              console.log("动态路径:" + key);
              let results = new RegExp(key).exec(url);
              if (results) {
                console.log("匹配成功");
                url = key;
                mockData = apis[url];
                functionArgams.execResults = results;
                break;
              }
            }
          }
        }
        console.log({ [url]: mockData });

        if (mockData != undefined) {
          mockData = _.merge({}, defaultConfig.mockData, mockData);
          if (mockData.inject) {
            //注入数据
            mockData.inject.forEach((injectName) => {
              const data =
                apis[
                  Object.keys(apis).find((key) => apis[key].name === injectName)
                ];
              if (data) {
                functionArgams.inject[injectName] = data.getData();
              } else {
                console.log(`${injectName} 不存在`);
              }
            });
          }
          if (mockData.pageable) {
            //处理分页的逻辑
            const pageParams = pageUtils.getTransformParams(
              functionArgams.params,
              defaultConfig
            );
            const pageList = mockData.getData();
            functionArgams.pageInfos.params = pageParams;
            functionArgams.pageInfos.wrapData = pageUtils.getWrapOne(
              functionArgams.pageInfos.params,
              pageList,
              defaultConfig
            );
          }

          if (mockData.options.ingoreMethod === false) {
            //区分了请求方法
            mockData.body = mockData.body[method];

            console.log(method + "请求");
          }
          if (mockData.response.statusCode != null) {
            //设置指定的HTPP 状态码
            response.writeHead(mockData.response.statusCode, headers);
            response.end(mockData.response.statusCode + "");
          } else {
            let rspBody = "";
            if (typeof mockData.body === "function") {
              //函数先执行  方便支持返回不同的数据格式
              mockData.body = mockData.body(functionArgams);
            }

            if (
              typeof mockData.body === "string" &&
              mockData.body.endsWith(".js")
            ) {
              mockData.body = darkUtils.completePath(
                request.url,
                mockData.body
              );
              if (!fs.existsSync(mockData.body)) {
                fs.writeFileSync(
                  mockData.body,
                  `(function () {
                    return (data) => {
                      return {};
                    };
                  })();
                  `,
                  "utf-8"
                );
              }
              const mockFunc = eval(fs.readFileSync(mockData.body, "utf-8"));
              mockData.body = mockFunc(functionArgams);
            }

            if (mockData.body == null) {
              rspBody = mockData.body;
            } else if (typeof mockData.body === "number") {
              rspBody = mockData.body + "";
            } else if (Array.isArray(mockData.body)) {
              rspBody = mockData.body;
            } else {
              if (typeof mockData.body === "string") {
                if (mockData.body.endsWith(".json")) {
                  mockData.body = darkUtils.completePath(
                    request.url,
                    mockData.body
                  );
                  if (!fs.existsSync(mockData.body)) {
                    fs.writeFileSync(mockData.body, "{}", "utf-8");
                  }
                  rspBody = eval(fs.readFileSync(mockData.body, "utf-8"));
                } else {
                  //返回简单的字符串
                  rspBody = mockData.body;
                }
              } else if (typeof mockData.body === "function") {
                rspBody = mockData({ req: request });
              } else if (typeof mockData.body === "object") {
                rspBody = mockData.body;
              }
            }

            setTimeout(() => {
              if (mockData.response.getCookies) {
                let cookieList = darkUtils.wrapCookie(
                  mockData.response.getCookies({ method })
                );
                response.setHeader("Set-Cookie", cookieList);
              }
              response.writeHead(200, headers);
              response.end(JSON.stringify(rspBody));
            }, mockData.response.delaySeconds * 1000);
          }
        } else {
          if (copySwaggerConfig.isOpen) {
            //开启了自动copy swagger文档响应体的功能
            const copySwaggerParams = {
              programName: mockFile.programName,
              url: mockFile.url,
            };
            copySwaggerParams.generateRspData = await copySwaggerUtils.getRspData(
              copySwaggerParams
            );
            if (copySwaggerParams.generateRspData) {
              //成功找到了
              copySwaggerConfig.transformRspData(copySwaggerParams);

              editJsUtils.addApi({
                ...copySwaggerParams,
                copySwaggerConfig,
                defaultConfig,
              });
              programDatas[mockFile.programName].createdAPi[url] = true;
              startParse();
              return;
            }
          }
          //swagger 文档没有接着尝试自动生成

          //开启在404的时候自动创建
          if (defaultConfig.autoCreateSettings["404"]) {
            //还没被自动创建过,可能因为程序的原因自动创建失败，所以要标记一下
            if (!programDatas[mockFile.programName].createdAPi[url]) {
              editJsUtils.addApi({
                programName: mockFile.programName,
                url,
                defaultConfig,
              });
              programDatas[mockFile.programName].createdAPi[url] = true;
              startParse();
              return;
            } else {
              console.log(`${url}已经创建过了,请留意控制台的报错信息`);
            }
          }
          response.writeHead(404, headers);
          response.end(JSON.stringify(404));
        }
      } catch (error) {
        dealError(response, error);
      }
    }
  };
})();
