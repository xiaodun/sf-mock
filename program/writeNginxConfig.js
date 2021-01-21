const fs = require('fs');
const nginxConfContent = fs.readFileSync("../nginx-1.19.6/conf/nginx.conf", "utf-8");
const nginxConfRegexp = /#program-service-start([\s\S]*?)#program-service-end/g;
const programConfig = eval(fs.readFileSync("./programConfig.js", "utf-8"));
const mockConfig = eval(fs.readFileSync("../config/mockConfig.js", "utf-8"))
const commonUtils = require("../utils/commonUtils");
const ip = commonUtils.getIp();
const mockServiceUrl = "http://" + ip + ":" + mockConfig.startPort;
const serverConfigList = [];
for (const programName in programConfig) {
    const { mockListenPort, jointListenPort, jointServiceUrl, ...values } = programConfig[programName];
    if (values.withNginxConf) {

        const mockConfig = generateServerConfig({
            programName,
            listenPort: mockListenPort,
            serviceUrl: mockServiceUrl,
            ...values,
        })
        const jointConfig = generateServerConfig({
            programName,
            listenPort: jointListenPort,
            serviceUrl: jointServiceUrl,
            ...values,
        })
        serverConfigList.push(mockConfig);
        serverConfigList.push(jointConfig);
    }
}
const generateNginxConfContent = nginxConfContent.replace(nginxConfRegexp, (all, group1) => all.replace(group1, "\n" + serverConfigList.join("\n")))
fs.writeFileSync("../nginx-1.19.6/conf/nginx.conf", generateNginxConfContent)
function generateServerConfig(config) {
    const serverConfig = ` 
    server {
        listen ${config.listenPort};
        #WebServer
        location ${config.apiPrefix} {
           proxy_pass ${config.serviceUrl}/${config.programName}/;
           client_max_body_size 64m;
        }
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
  `
    return serverConfig;
}