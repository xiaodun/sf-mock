(function () {
  const path = require("path");
  const fs = require("fs");
  const prettier = require("prettier");

  return {
    generate(params = {}, dirValues = {}) {
      //根据路径生成对应的文件夹 + 文件
      const programPath = global.getModuleUtils.getProgramPath(
        params.programName
      );
      const urlItemList = params.url.split("/").filter(Boolean);
      const fileName = urlItemList.pop();
      let dirPath = programPath;
      urlItemList.forEach((item) => {
        dirPath = path.resolve(dirPath, item);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath);
        }
      });
      const filePath = path.resolve(dirPath, fileName) + ".js";
      const fileContent = prettier.format(dirValues, {
        parser: "babel",
      });
      fs.writeFileSync(filePath, fileContent);
    },
  };
})();
