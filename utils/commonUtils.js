const os = require("os"),
  fs = require("fs");

//解析真实链接获取到环境信息

function getEnvKeyByUrl(url) {
  if (/rebuild-dev/g.test(url)) {
    return "rebuild-dev";
  } else if (/rebuild-test/g.test(url)) {
    return "rebuild-test";
  } else if (/dev/g.test(url)) {
    return "dev";
  } else if (/test/g.test(url)) {
    return "test";
  } else if (/uat/g.test(url)) {
    return "uat";
  }
  return "prd";
}

module.exports = {
  getBase64(filePath) {
    const fileContent = fs.readFileSync(filePath);
    const buffer = Buffer.from(fileContent);
    const base64Str = buffer.toString("base64");
    return base64Str;
  },
  getProxyDomain(serverConfig, programName) {
    let envKey = serverConfig.envKey;
    if (!envKey) {
      if (serverConfig.isMock) {
        envKey = "mock";
      } else {
        envKey = getEnvKeyByUrl(serverConfig.url);
      }
    }

    return `wx.${envKey}.${programName}`;
  },
  //替换插值
  replaceInterpolation(str = "", data = {}) {
    let result = str;
    for (const key in data) {
      const regexp = new RegExp(`\\$\\{${key}\\}`, "g");
      result = result.replace(regexp, data[key]);
    }
    return result;
  },
  //获取本机的IP地址
  getIp() {
    let ip = "";
    let network = os.networkInterfaces();
    for (let key in network) {
      let env = network[key];
      for (var i = 0; i < env.length; i++) {
        if (env[i].family == "IPv4" && env[i].address != "127.0.0.1") {
          ip = env[i].address;
        }
      }
    }
    return ip;
  },
};
