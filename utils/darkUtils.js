/**
 * Dark 模式新增的功能集中写在这里
 */
const fs = require("fs");
const path = require("path");
const darkUtils = {
    /**
     * 
     * @param {string} url  待着项目名称前缀的接口请求路径字符串
     * 
     */
    getMockData(url) {
        const pattern = /\/([\w\W]+?)(\/[\w\W]+)/;
        const result = pattern.exec(url) || {}
        //获取项目名称
        const programName = result[1];
        //获取api路径
        const api = result[2];
        console.log('项目名:', programName);
        //获取mock数据
        const apis = eval(fs.readFileSync(path.resolve(__dirname, `../data/${programName}/${programName}-mock-api.js`), "utf-8"));

        return {
            apis,
            url: api
        }

    }
}
module.exports = darkUtils;