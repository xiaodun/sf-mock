const http = require("http");
const fs = require("fs");
const commonUtils = require("./utils/commonUtils");
const getModuleUtils = require("./utils/getModuleUtils");
global.getModuleUtils = getModuleUtils;
const ip = commonUtils.getIp();
const serviceConfig = eval(
  fs.readFileSync("./config/serviceConfig.js", "utf-8")
);
function start() {
  function dealError(response, error) {
    console.log(error);
    response.writeHead(500, {});
    response.end(error.stack);
  }
  var server = http.createServer(function (request, response) {
    try {
      const rspUtils = eval(fs.readFileSync("./utils/rspUtils.js", "utf-8"));
      rspUtils({
        request,
        response,
        dealError,
      });
    } catch (error) {
      dealError(response, error);
    }
  });

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
