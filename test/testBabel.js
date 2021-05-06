const fs = require("fs");
const babelParser = require("@babel/parser");
const { default: babelTraverse } = require("@babel/traverse");

const exampleMockApi = fs
  .readFileSync("../data/example/example-mock-api.js")
  .toString();

const ast = babelParser.parse(exampleMockApi);
babelTraverse(ast, {
  FunctionExpression(path) {
    if (path.node.id.name === "getApis") {
      console.log(path.node.body.body[0].argument.start);
      path.skip();
    }
  },
});
