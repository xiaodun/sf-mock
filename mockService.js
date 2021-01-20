const http = require('http');
const fs = require('fs');
const commonUtils = require("./utils/commonUtils");
const ip = commonUtils.getIp();

function start() {

  const config = eval(
    commonUtils.replaceInterpolation(fs.readFileSync('./config/mockConfig.js', 'utf-8'), { remoteIp: ip })

  );
  const headers = config.rspHeaders;
  var server = http.createServer(function (request, response) {
    try {

      const apis = eval(
        fs.readFileSync('./mockApi.js', 'utf-8'),
      );
      let url = request.url.split('?')[0];
      if (!apis[url]) {
        //
        for (const [key, value] of Object.entries(apis)) {
          if (value.supportRegexp) {
            if (new RegExp(key).test(url)) {
              url = key;
              break;
            }
          }
        }
      }
      console.log({ [url]: apis[url] });
      const method = request.method.toLowerCase();
      if (apis[url]) {
        response.writeHead(200, headers);
        if (typeof apis[url] === 'string') {
          const json = fs.readFileSync(apis[url], 'utf-8');

          response.end(json);
        } else {
          let data = apis[url][method];
          if (!data) {
            data = apis[url];
          }
          response.end(JSON.stringify(data));
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
