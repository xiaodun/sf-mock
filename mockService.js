const http = require('http');
const fs = require('fs');
const commonUtils = require('./utils/commonUtils');
const darkUtils = require('./utils/darkUtils');
const ip = commonUtils.getIp();

function start() {
  const config = eval(
    commonUtils.replaceInterpolation(
      fs.readFileSync('./config/mockConfig.js', 'utf-8'),
      { remoteIp: ip },
    ),
  );
  const headers = config.rspHeaders;
  var server = http.createServer(function (request, response) {
    if (request.url === config.debuggerPath) {
      response.writeHead(200, headers);
      return;
    }
    try {
      //获取mock文件
      const mockFile = darkUtils.getMockData(request.url);
      const apis = mockFile.apis;
      //url带有查询参数的将被忽略
      let url = mockFile.url.split('?')[0];
      let mockData = apis[url];

      if (!mockData) {
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
      if (mockData) {
        if (mockData.statusCode) {
          response.writeHead(mockData.statusCode, headers);
          response.end(mockData.statusCode + '');
        } else {
          response.writeHead(200, headers);
          if (typeof mockData === 'string') {
            if (mockData.endsWith('.json')) {
              const json = fs.readFileSync(mockData, 'utf-8');

              response.end(json);
            } else {
              response.end(mockData);
            }
          } else {
            let data = mockData[method];
            if (!data) {
              data = mockData;
            }
            response.end(JSON.stringify(data));
          }
        }
      } else {
        response.writeHead(500, headers);
        response.end('404');
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
  server.on('error', function (error) {
    console.log(error);
    if (error.toString().indexOf(`listen EADDRINUSE`) !== -1) {
      console.log(
        `${config.startPort}端口被占用,可能是当前应用,也可能是其他应用`,
      );
    }
  });
}

start();
