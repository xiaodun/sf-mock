const fs = require("fs");
const path = require("path");
const babelParser = require("@babel/parser");
const { default: babelTraverse } = require("@babel/traverse");
const prettier = require("prettier");
const editJsUtils = {
  addApi(params = {}) {
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
      let urlValues;
      if (params.generateRspData) {
        urlValues = params.copySwaggerConfig.getMockStructure(params);
      } else {
        urlValues = params.defaultConfig.autoCreateSettings.getDefaultValues();
      }
      let content =
        mockFileStr.slice(0, pos) +
        `
        "${params.url}":${JSON.stringify(urlValues, null, 2)},
        ` +
        mockFileStr.slice(pos);
      fs.writeFileSync(
        path.resolve(__dirname, moclFilepath),
        prettier.format(content)
      );
    }
  },
};

module.exports = editJsUtils;
