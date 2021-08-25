/**
 * 将mock数据直接写在mock-api文件里的转换为useDirMode 的形式
 */
const getModuleUtils = require("../utils/getModuleUtils");
global.getModuleUtils = getModuleUtils;
const fs = require("fs");
const programConfig = getModuleUtils.programConfig();
const dirUtils = getModuleUtils.dirUtils();
const babelParser = require("@babel/parser");
const { default: babelTraverse } = require("@babel/traverse");
const prettier = require("prettier");
for (const programName in programConfig) {
  const mockApiPath = getModuleUtils.getMockApiPath(programName);
  const mockApis = eval(getModuleUtils.pogramMockApiStr(programName));
  for (const apiPath in mockApis) {
    const apiValues = mockApis[apiPath];
    if (apiValues.useDirMode === true) {
      continue;
    }
    if (apiValues.options) {
      if (apiValues.options.supportRegexp === true) {
        continue;
      }

      if (apiValues.options.ingoreMethod === false) {
        const useFile = ["get", "post", "put", "delete"].some((method) => {
          if (typeof apiValues.body[method] === "string") {
            return (
              apiValues.body[method].endsWith(".js") ||
              apiValues.body[method].endsWith(".json")
            );
          }
          return false;
        });
        if (useFile) {
          continue;
        }
      }
    }
    if (typeof apiValues.body === "function") {
      continue;
    }
    if (typeof apiValues.body === "string") {
      if (apiValues.body.endsWith(".js") || apiValues.body.endsWith(".json")) {
        continue;
      }
    }
    let mockFileStr = getModuleUtils.pogramMockApiStr(programName);
    const ast = babelParser.parse(mockFileStr);
    babelTraverse(ast, {
      Property(path) {
        if (path.node.key.value === apiPath) {
          const { properties } = path.node.value;
          const bodyNode = properties.find((item) => item.key.name === "body");
          if (bodyNode) {
            const bodyNodeValueStr = mockFileStr.substring(
              bodyNode.start,
              bodyNode.end
            );
            const bodyValueNodeValueStr = mockFileStr.substring(
              bodyNode.value.start,
              bodyNode.value.end
            );

            //替换mock-api文件
            mockFileStr = mockFileStr.replace(
              bodyNodeValueStr,
              "useDirMode:true"
            );
            fs.writeFileSync(
              mockApiPath,
              prettier.format(mockFileStr, {
                parser: "babel",
              })
            );

            let funStr = `(function () {
              return (data) => {
                return ${bodyValueNodeValueStr};
              };
            })();
            `;
            //生成文件夹 + js文件
            dirUtils.generate(
              {
                programName,
                url: apiPath,
              },
              funStr
            );
          }
        }
      },
    });
  }
}
