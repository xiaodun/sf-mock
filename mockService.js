const http = require("http");
const fs = require("fs");
const commonUtils = require("./utils/commonUtils");
const darkUtils = require("./utils/darkUtils");
const ip = commonUtils.getIp();
const _ = require("lodash");
function start() {
  let config = eval(
    commonUtils.replaceInterpolation(
      fs.readFileSync("./config/serviceConfig.js", "utf-8"),
      { remoteOrigin: ip }
    )
  );
  let headers = config.rspHeaders;

  var server = http.createServer(function (request, response) {
    if (["/favicon.ico"].includes(request.url)) {
      response.end();
      return;
    }
    console.log(request.url);
    config = eval(
      commonUtils.replaceInterpolation(
        fs.readFileSync("./config/serviceConfig.js", "utf-8"),
        { remoteOrigin: request.headers.origin }
      )
    );
    headers = config.rspHeaders;
    if (request.url === config.debuggerPath) {
      //使用chrome调试
      response.writeHead(200, headers);
      return;
    }

    try {
      //获取mock文件
      const mockFile = darkUtils.getMockData(request.url);
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

      const method = request.method.toLowerCase();
      if (mockData != undefined) {
        mockData = _.merge({
          ...{ response: {}, options: { ingoreMethod: true } },
          ...mockData,
        });
        if (mockData.options.ingoreMethod === false) {
          mockData.body = mockData.body[method];
          console.log(method + "请求");
        }
        if (mockData.response.statusCode != null) {
          response.writeHead(mockData.statusCode, headers);
          response.end(mockData.statusCode + "");
        } else if (mockData.body == null) {
          response.end(JSON.stringify(mockData.body));
        } else if (typeof mockData.body === "number") {
          response.end(mockData.body + "");
        } else if (Array.isArray(mockData.body)) {
          response.end(JSON.stringify(mockData.body));
        } else {
          if (typeof mockData.body === "string") {
            if (mockData.body.endsWith(".json")) {
              if (!fs.existsSync(mockData.body)) {
                fs.writeFileSync(mockData.body, "{}", "utf-8");
              }
              const json = fs.readFileSync(mockData, body, "utf-8");
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
              const mockFunc = eval(fs.readFileSync(mockData.body, "utf-8"));
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
      } else {
        response.writeHead(404, headers);
        response.end(JSON.stringify(404));
      }
    } catch (error) {
      dealError(response, error);
    }
  });
  function dealError(response, error) {
    console.log(error);
    response.writeHead(500, headers);
    response.end(error.stack);
  }
  server.setTimeout(0);
  server.listen(config.startPort, function () {
    console.log(`service is running ${ip}:${config.startPort}`);
  });
  server.on("error", function (error) {
    console.log(error);
    if (error.toString().indexOf(`listen EADDRINUSE`) !== -1) {
      console.log(
        `${config.startPort}端口被占用,可能是当前应用,也可能是其他应用`
      );
    }
  });
}

start();
