const http = require("http");
const fs = require("fs");
const url = require("url");
const commonUtils = require("./utils/commonUtils");
const darkUtils = require("./utils/darkUtils");
const ip = commonUtils.getIp();
const _ = require("lodash");
function start() {
  let serviceConfig = eval(
    commonUtils.replaceInterpolation(
      fs.readFileSync("./config/serviceConfig.js", "utf-8"),
      { remoteOrigin: ip }
    )
  );
  let defaultConfig = eval(
    fs.readFileSync("./config/defaultConfig.js", "utf-8"),
    { remoteOrigin: ip }
  );
  let headers = serviceConfig.rspHeaders;

  var server = http.createServer(function (request, response) {
    if (["/favicon.ico"].includes(request.url)) {
      response.end();
      return;
    }
    console.log(request.url);
    serviceConfig = eval(
      commonUtils.replaceInterpolation(
        fs.readFileSync("./config/serviceConfig.js", "utf-8"),
        { remoteOrigin: request.headers.origin }
      )
    );
    headers = serviceConfig.rspHeaders;
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
      // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
      let data = "";

      request.on("data", function (chunk) {
        data += chunk;
      });

      // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
      request.on("end", function () {
        data = JSON.parse(data || null);
        functionArgams.params = data;
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
              if (new RegExp(key).test(url)) {
                console.log("匹配成功");
                url = key;
                mockData = apis[url];
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
            if (typeof mockData.body === "function") {
              //函数先执行  方便支持返回不同的数据格式
              mockData.body = mockData.body(functionArgams);
            }

            if (mockData.body == null) {
              response.end(JSON.stringify(mockData.body));
            } else if (typeof mockData.body === "number") {
              response.end(mockData.body + "");
            } else if (Array.isArray(mockData.body)) {
              response.end(JSON.stringify(mockData.body));
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
                  const json = fs.readFileSync(mockData.body, "utf-8");
                  response.writeHead(200, headers);
                  response.end(json);
                } else if (mockData.body.endsWith(".js")) {
                  if (!fs.existsSync(mockData.body)) {
                    fs.writeFileSync(
                      mockData.body,
                      `(function () {
                      return ({ req,rsp,headers  }) => {
                        return {};
                      };
                    })();
                    `,
                      "utf-8"
                    );
                  }
                  const mockFunc = eval(
                    fs.readFileSync(mockData.body, "utf-8")
                  );
                  mockFunc({ req: request, rsp: response, headers });
                } else {
                  //返回简单的字符串
                  response.writeHead(200, headers);
                  response.end(mockData.body);
                }
              } else if (typeof mockData.body === "function") {
                response.writeHead(200, headers);
                response.end(JSON.stringify(mockData({ req: request })));
              } else if (typeof mockData.body === "object") {
                response.writeHead(200, headers);
                response.end(JSON.stringify(mockData.body));
              }
            }
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
