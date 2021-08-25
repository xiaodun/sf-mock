/**
 * 统一获取程序功能模块,config utils等
 */
const path = require("path");
const fs = require("fs");
function _getProgramPath(programName) {
  const programPath = path.resolve(__dirname, `../data/${programName}`);
  return programPath;
}
function _getInstance(fileName, type) {
  let readPath;
  if (type === "config") {
    readPath = path.resolve(__dirname, `../config/${fileName}.js`);
  } else if (type === "utils") {
    readPath = path.resolve(__dirname, `./${fileName}.js`);
  }

  return eval(fs.readFileSync(readPath, "utf-8"));
}
function _getMockApiPath(programName) {
  let mockApiPath = path.resolve(
    _getProgramPath(programName),
    `${programName}-mock-api.js`
  );
  return mockApiPath;
}
const getModuleUtils = {
  getProgramPath: _getProgramPath,
  getMockApiPath: _getMockApiPath,
  pogramMockApiStr(programName) {
    let mockApiPath = _getMockApiPath(programName);
    return fs.readFileSync(mockApiPath, "utf-8");
  },
  programConfig() {
    return _getInstance("programConfig", "config");
  },
  defaultConfig() {
    return _getInstance("defaultConfig", "config");
  },
  dirUtils() {
    return _getInstance("dirUtils", "utils");
  },
};

module.exports = getModuleUtils;
