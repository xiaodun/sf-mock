const fs = require('fs');
const programConfig = eval(fs.readFileSync("./programConfig.js", "utf-8"));
const dataFolderPath = "../data";

if (!fs.existsSync(dataFolderPath)) {
    fs.mkdir(dataFolderPath, () => { });
}
for (const programName in programConfig) {
    const programPath = `${dataFolderPath}/${programName}`;
    if (!fs.existsSync(programPath)) {
        fs.mkdir(programPath, () => { });

    }
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
