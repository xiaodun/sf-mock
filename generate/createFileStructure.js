/**
 * 根据programConfig.js的配置生成目录结构
 */
const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const programConfig = eval(
  fs.readFileSync(
    path.resolve(__dirname, "../config/programConfig.js"),
    "utf-8"
  )
);
const dataFolderPath = path.resolve(__dirname, "../data");
//生成data文件夹
if (!fs.existsSync(dataFolderPath)) {
  fs.mkdir(dataFolderPath, () => {});
}
for (const programName in programConfig) {
  const programPath = `${dataFolderPath}/${programName}`;
  // 根据项目名生成文件夹
  if (!fs.existsSync(programPath)) {
    fs.mkdir(programPath, () => {});
  }
  const programValues = programConfig[programName];
  if (programValues.withFileStructure === false) {
    continue;
  }
  createFile({
    path: `${programPath}/${programName}-mock-api.js`,
    content: `
      (function getApis() {
          return {
          
          };
        })();
        
      `,
  });

  //生成用于标记的name-map文件
  createFile({
    path: `${programPath}/${programName}-name-map.js`,
    content: `
      (function getNameMaps() {
        return {
         
        };
      })();
      `,
  });
}

function createFile(
  params = {
    path: "",
    content: "",
  }
) {
  if (!fs.existsSync(params.path)) {
    fs.writeFileSync(
      params.path,
      prettier.format(params.content, {
        parser: "babel",
      })
    );
  }
}
