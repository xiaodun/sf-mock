const http = require("http");
const fs = require("fs");
const commonUtils = require("./utils/commonUtils");
const darkUtils = require("./utils/darkUtils");
const ip = commonUtils.getIp();
const _ = require("lodash");
function start() {
  let config = eval(
    commonUtils.replaceInterpolation(
      fs.readFileSync("./config/mockConfig.js", "utf-8"),
      { remoteOrigin: ip }
    )
  );
  let headers = config.rspHeaders;

  var server = http.createServer(function (request, response) {
    console.log("wx", request);
    config = eval(
      commonUtils.replaceInterpolation(
        fs.readFileSync("./config/mockConfig.js", "utf-8"),
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
          if (value.supportRegexp) {
            if (new RegExp(key).test(url)) {
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
        if (typeof mockData === "number") {
          response.end(mockData + "");
        } else if (Array.isArray(mockData)) {
          response.end(JSON.stringify(mockData));
        } else {
          if (mockData.statusCode) {
            //测试指定的http状态
            response.writeHead(mockData.statusCode, headers);
            response.end(mockData.statusCode + "");
          } else {
            response.writeHead(200, headers);
            if (typeof mockData === "string") {
              if (mockData.endsWith(".json")) {
                if (!fs.existsSync(mockData)) {
                  fs.writeFileSync(mockData, "{}", "utf-8");
                }
                const json = fs.readFileSync(mockData, "utf-8");

                response.end(json);
              } else if (mockData.endsWith(".js")) {
                if (!fs.existsSync(mockData)) {
                  fs.writeFileSync(
                    mockData,
                    `(function () {
                      return ({ req }) => {
                        return {};
                      };
                    })();
                    `,
                    "utf-8"
                  );
                }
                const mockFunc = eval(fs.readFileSync(mockData, "utf-8"));
                response.end(JSON.stringify(mockFunc({ req: request })));
              } else {
                response.end(mockData);
              }
            } else if (typeof mockData === "function") {
              response.end(JSON.stringify(mockData({ req: request })));
            } else {
              let data = mockData[method];
              if (!data) {
                data = mockData;
              }
              response.end(JSON.stringify(data));
            }
          }
        }
      } else {
        response.setHeader("Content-Type", "application/json,charset=utf-8");
        const {
          jointServiceUrl,
          jointCopyConfig = {},
        } = darkUtils.getProgramConfig(request.url);
        if (jointCopyConfig.open) {
          // copy远程数据
          console.log(`从联调地址${jointServiceUrl}中克隆数据...`);
          const serviceUrl = new URL(jointServiceUrl);
          try {
            var sreq = http.request(
              {
                ..._.merge(request, jointCopyConfig.request),
                host: serviceUrl.hostname, // 目标主机
                path: url, // 目标路径
                port: serviceUrl.port,
              },
              function (sres) {
                sres.on("data", function (rspData) {
                  isTimeout = false;
                  if (jointCopyConfig.mode === "create") {
                    darkUtils.writeFile(request.url, rspData.toString());
                  }
                });
                sres.pipe(response);
              }
            );

            if (/POST|PUT/i.test(request.method)) {
              request.pipe(sreq);
            } else {
              sreq.end();
            }
          } catch (error) {
            console.log(error);
            console.log("克隆过程中发生了问题");
          }
        } else {
          response.writeHead(404, headers);
          response.end("404");
        }
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
