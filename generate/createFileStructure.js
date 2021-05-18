/**
 * 根据programConfig.js的配置生成目录结构
 */
const fs = require('fs');
const programConfig = eval(fs.readFileSync("./programConfig.js", "utf-8"));
const dataFolderPath = "../data";
//生成data文件夹
if (!fs.existsSync(dataFolderPath)) {
    fs.mkdir(dataFolderPath, () => { });
}
for (const programName in programConfig) {
    const programPath = `${dataFolderPath}/${programName}`;
    const values = programConfig[programName];
    if (values.withFileStructure) {
        // 根据项目名生成文件夹
        if (!fs.existsSync(programPath)) {
            fs.mkdir(programPath, () => { });

        }
        // 生成承载mock数据的js文件
        const mockApiPath = `${programPath}/${programName}-mock-api.js`;
        if (!fs.existsSync(mockApiPath)) {
            fs.writeFileSync(mockApiPath, `
            (function getApis() {
                return {
                
                };
              })();
              
            `)
        }
    }

}
