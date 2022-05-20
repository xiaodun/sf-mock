const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const { default: babelTraverse } = require("@babel/traverse");
const prettier = require("prettier");
const editJsUtils = {
  addApi(params = {}) {
    const dirUtils = global.getModuleUtils.dirUtils();
    const moclFilepath = `../data/${params.programName}/${params.programName}-mock-api.js`;
    const mockFileStr = fs
      .readFileSync(path.resolve(__dirname, moclFilepath), "utf-8")
      .toString();
    let pos = null;

    const ast = babelParser.parse(mockFileStr);
    babelTraverse(ast, {
      FunctionExpression(path) {
        if (path.node.id.name === "getApis") {
          //得到最外层函数的返回语句{后面的位置
          pos =
            path.node.body.body.find((item) => item.type === "ReturnStatement")
              .argument.start + 1;
          path.skip();
        }
      },
    });
    if (pos !== null) {
      //在头部自动写入
      let urlValues, dirValues;
      if (params.generateRspData) {
        //copySwagger文档
        urlValues = params.copySwaggerConfig.getMockStructure(params);
        dirValues = params.defaultConfig.autoCreateSettings.getDefaultValues(
          "js",
          params.generateRspData
        );
      } else {
        urlValues = params.defaultConfig.autoCreateSettings.getDefaultValues();

        dirValues = params.defaultConfig.autoCreateSettings.getDefaultValues(
          "js",
          //从sf-note携带的数据
          params.functionArgams?.params?.mockFileData
        );
      }

      if (params.defaultConfig.useDirMode) {
        urlValues = params.defaultConfig.dirModeData.getDefaultValues();
        dirUtils.generate(params, dirValues);
      }
      let content =
        mockFileStr.slice(0, pos) +
        `
        "${params.url}":${JSON.stringify(urlValues, null, 2)},
        ` +
        mockFileStr.slice(pos);
      fs.writeFileSync(
        path.resolve(__dirname, moclFilepath),
        prettier.format(content, {
          parser: "babel",
        })
      );
    }
  },
};

module.exports = editJsUtils;
