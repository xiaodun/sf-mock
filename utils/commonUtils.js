const os = require('os');

module.exports = {
    //替换插值
    replaceInterpolation(str = "", data = {}) {

        let result = str;
        for (const key in data) {
            const regexp = new RegExp(`\\$\\{${key}\\}`, 'g');
            result = result.replace(regexp, data[key])
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
                if (env[i].family == 'IPv4' && env[i].address != '127.0.0.1') {
                    ip = env[i].address;
                }
            }
        }
        return ip;
    }
}