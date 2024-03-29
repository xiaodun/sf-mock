/**
 * 根据programConfig.js里的配置,自动生成配置写入到nginx.conf文件
 * 只会覆盖#program-service-start 到  #program-service-end 之间的内容
 */
const fs = require("fs");
const hostsFilePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";
const nginxConfContent = fs.readFileSync(
  "../nginx-1.19.6/conf/nginx.conf",
  "utf-8"
);
const mockServicePrefixFlag = "#program-service-start";
const mockServiceSuffixFlag = "#program-service-end";
/#program-service-start([\s\S]*?)#program-service-end/g;

const mockServiceAreaRegexp = new RegExp(
  `${mockServicePrefixFlag}([\\s\\S]*?)${mockServiceSuffixFlag}`,
  "g"
);
const programConfigJs = eval(
  fs.readFileSync("../config/programConfig.js", "utf-8")
);
const serviceConfig = eval(
  fs.readFileSync("../config/serviceConfig.js", "utf-8")
);
const commonUtils = require("../utils/commonUtils");
const ip = commonUtils.getIp();
const mockServiceUrl = "http://" + ip + ":" + serviceConfig.startPort;
const serverConfigList = [];
const server_nameList = [];
for (const programName in programConfigJs) {
  const programConfigs = programConfigJs[programName];
  const programValues = programConfigJs[programName];
  if (programValues.withNginxConfig === false) {
    continue;
  }
  programConfigs.serverList.forEach((serverConfig) => {
    let url = serverConfig.isMock ? mockServiceUrl : serverConfig.url;
    const server_name = commonUtils.getProxyDomain(serverConfig, programName);
    server_nameList.push(server_name);
    serverConfigList.push(
      generateServerConfig({
        programPrefix: programConfigs.programPrefix,
        programUrl: programConfigs.programUrl,
        apiPrefixList: programConfigs.apiPrefixList,
        programName,
        url,
        ...serverConfig,
        autoAddPrefix: serverConfig.autoAddPrefix !== false ? true : false,
        webpackHotUrl: programConfigs.webpackHotUrl,
        server_name,
      })
    );
  });
}
const generateNginxConfContent = nginxConfContent.replace(
  mockServiceAreaRegexp,
  (all, group1) => all.replace(group1, "\n" + serverConfigList.join("\n"))
);

fs.writeFileSync("../nginx-1.19.6/conf/nginx.conf", generateNginxConfContent);

let generateHostsFileContent;
const hostsFileContent = fs.readFileSync(hostsFilePath, "utf-8");
let server_nameWriteHostsContent = server_nameList
  .map((item) => `${ip} ${item}`)
  .join("\n");
if (mockServiceAreaRegexp.test(hostsFileContent)) {
  //替换
  generateHostsFileContent = hostsFileContent.replace(
    mockServiceAreaRegexp,
    (all, group1) =>
      all.replace(group1, "\n" + server_nameWriteHostsContent + "\n")
  );
} else {
  //添加
  generateHostsFileContent = [
    hostsFileContent,
    mockServicePrefixFlag,
    server_nameWriteHostsContent,
    mockServiceSuffixFlag,
  ].join("\n");
}

fs.writeFileSync(hostsFilePath, generateHostsFileContent);

/**
 * 生成nginx.conf 的 server配置
 */
function generateServerConfig(config) {
  /**
   * /sockjs-node  用于webpack的热更新
   */

  const jointConfigs = config.apiPrefixList
    .map((prefix) => {
      return `location ${prefix} {
      proxy_pass ${config.url}${config.isMock ? "/" + config.programName : ""}${
        config.autoAddPrefix ? prefix : "/"
      };
      client_max_body_size 64m;
   }`;
    })
    .join("");
  const serverConfig = `
    server {
        listen ${config.port};
        server_name ${config.server_name};
        #WebServer
        ${jointConfigs}
        location ${config.programPrefix} {
           proxy_pass ${config.programUrl};
        }
        location /sockjs-node {
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header Host $host;
           proxy_pass ${config.webpackHotUrl};
           proxy_redirect off;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection "upgrade";
        }
    }
  `;
  return serverConfig;
}
