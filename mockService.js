const config = {
  port: 9192,
};

function start() {
  var http_os = require('http');
  var file_os = require('fs');
  //动态的获取本机IP地址
  var os = require('os');
  let network = os.networkInterfaces();
  for (let key in network) {
    let env = network[key];
    for (var i = 0; i < env.length; i++) {
      if (env[i].family == 'IPv4' && env[i].address != '127.0.0.1') {
        IPv4 = env[i].address;
      }
    }
  }
  var server = http_os.createServer(function (request, response) {
    try {
      let heades = {
        'Content-Type': 'application/json',
      };
      if (request.headers.origin) {
        //发生跨域 使用nginx代理时没有 request.headers.origin
        heades = {
          ...heades,
          'Access-Control-Allow-Methods':
            'DELETE,PUT,POST,GET,OPTIONS',
          'Access-Control-Allow-Origin': request.headers.origin,
          'Access-Control-Allow-Headers':
            'content-type,authorization,token ',
          'Access-Control-Allow-Credentials': true,
        };
      }
      const apis = eval(
        file_os.readFileSync('./mockApi.js', 'utf-8'),
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
        response.writeHead(200, heades);
        if (typeof apis[url] === 'string') {
          const json = file_os.readFileSync(apis[url], 'utf-8');

          response.end(json);
        } else {
          let data = apis[url][method];
          if (!data) {
            data = apis[url];
          }
          response.end(JSON.stringify(data));
        }
      } else {
        response.writeHead(500, heades);
        response.end('404');
      }
    } catch (error) {
      dealError(response, error);
    }
  });
  function dealError(response, error) {
    console.log(error);
    response.writeHead(500, heades);
    response.end(error.stack);
  }
  server.setTimeout(0);
  server.listen(config.port, function () {
    console.log(`service is running ${IPv4}:${config.port}`);
  });
  server.on('error', function (error) {
    console.log(error);
    if (error.toString().indexOf(`listen EADDRINUSE`) !== -1) {
      console.log(
        `${config.port}端口被占用,可能是当前应用,也可能是其他应用`,
      );
    }
  });
}

start();
