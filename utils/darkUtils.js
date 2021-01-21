const fs = require("fs");
const path = require("path");
const darkUtils = {
    getMockData(url) {
        const pattern = /\/([\w\W]+?)(\/[\w\W]+)/;
        const result = pattern.exec(url) || {}
        const programName = result[1];
        const api = result[2];
        console.log('项目名:', programName);
        const apis = eval(fs.readFileSync(path.resolve(__dirname, `../data/${programName}/${programName}-mock-api.js`), "utf-8"));

        return {
            apis,
            url: api
        }

    }
}
module.exports = darkUtils;