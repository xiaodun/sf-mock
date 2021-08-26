/**
 * 根据programConfig.js里的配置,自动生成配置写入到nginx.conf文件
 * 只会覆盖#program-service-start 到  #program-service-end 之间的内容
 */
const fs = require("fs");
const nginxConfContent = fs.readFileSync(
  "../nginx-1.19.6/conf/nginx.conf",
  "utf-8"
);
const nginxConfRegexp = /#program-service-start([\s\S]*?)#program-service-end/g;
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
for (const programName in programConfigJs) {
  const programConfigs = programConfigJs[programName];
  const programValues = programConfigJs[programName];
  if (programValues.withNginxConfig === false) {
    continue;
  }
  programConfigs.serverList.forEach((serverConfig) => {
    let url = serverConfig.isMock ? mockServiceUrl : serverConfig.url;
    serverConfigList.push(
      generateServerConfig({
        programPrefix: programConfigs.programPrefix,
        programUrl: programConfigs.programUrl,
        apiPrefixList: programConfigs.apiPrefixList,
        programName,
        ...serverConfig,
        url,
        webpackHotUrl: programConfigs.webpackHotUrl,
      })
    );
  });
}
const generateNginxConfContent = nginxConfContent.replace(
  nginxConfRegexp,
  (all, group1) => all.replace(group1, "\n" + serverConfigList.join("\n"))
);
fs.writeFileSync("../nginx-1.19.6/conf/nginx.conf", generateNginxConfContent);
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
      proxy_pass ${config.url}${
        config.isMock ? "/" + config.programName : ""
      }${prefix};
      client_max_body_size 64m;
   }`;
    })
    .join("");
  const serverConfig = `
    server {
        listen ${config.port};
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
