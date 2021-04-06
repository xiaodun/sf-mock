const http = require("http");
const fs = require("fs");
const url = require("url");
const commonUtils = require("./utils/commonUtils");
const darkUtils = require("./utils/darkUtils");
const ip = commonUtils.getIp();
const _ = require("lodash");
function start() {
  let serviceConfig = eval(
    fs.readFileSync("./config/serviceConfig.js", "utf-8")
  );
  let defaultConfig = eval(
    fs.readFileSync("./config/defaultConfig.js", "utf-8")
  );

  var server = http.createServer(function (request, response) {
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
    let functionArgams = {
      req: request,
      rsp: response,
      headers,
    };
    const method = request.method.toLowerCase();
    if (["post", "put"].includes(method)) {
      let data = "";

      request.on("data", function (chunk) {
        data += chunk;
      });

      request.on("end", function () {
        try {
          data = JSON.parse(data || null);
          functionArgams.params = data;
        } catch (error) {
          console.log("参数解析出错");
        }
        startParse();
      });
    } else {
      let data = url.parse(request.url, true).query || {};
      functionArgams.params = data;
      startParse();
    }

    function startParse() {
      try {
        //获取mock文件
        const mockFile = darkUtils.getMockFile(request.url);
        const apis = mockFile.apis;
        //url带有查询参数的将被忽略
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
          response.writeHead(404, headers);
          response.end(JSON.stringify(404));
        }
      } catch (error) {
        dealError(response, error);
      }
    }
  });
  function dealError(response, error) {
    console.log(error);
    response.writeHead(500, headers);
    response.end(error.stack);
  }
  server.setTimeout(0);
  server.listen(serviceConfig.startPort, function () {
    console.log(`service is running ${ip}:${serviceConfig.startPort}`);
  });
  server.on("error", function (error) {
    console.log(error);
    if (error.toString().indexOf(`listen EADDRINUSE`) !== -1) {
      console.log(
        `${serviceConfig.startPort}端口被占用,可能是当前应用,也可能是其他应用`
      );
    }
  });
}

start();
