/**
 * Dark 模式新增的功能集中写在这里
 */
const fs = require('fs');
const path = require('path');
const darkUtils = {
  /**
   *
   * @param {string} reqUrl  待着项目名称前缀的接口请求路径字符串
   *
   */
  parseUrl(reqUrl) {
    const pattern = /\/([\w\W]+?)(\/[\w\W]+)/;
    const result = pattern.exec(reqUrl) || {};
    //获取项目名称
    const programName = result[1];
    //获取api路径
    const api = result[2];
    return {
      programName,
      api,
    };
  },
  getMockData(reqUrl) {
    const { programName, api } = this.parseUrl(reqUrl);
    console.log('项目名:', programName);

    //获取mock数据
    const apis = eval(
      fs.readFileSync(
        path.resolve(
          __dirname,
          `../data/${programName}/${programName}-mock-api.js`,
        ),
        'utf-8',
      ),
    );

    return {
      apis,
      url: api,
    };
  },
  getProgramConfig(reqUrl) {
    const { programName } = this.parseUrl(reqUrl);
    const programConfig = eval(
      fs.readFileSync(
        path.join(__dirname, '../program/programConfig.js'),
        'utf-8',
      ),
    )[programName];
    return programConfig;
  },
  writeFile(reqUrl, data = '') {
    const { programName, api } = this.parseUrl(reqUrl);
    const mockFileData = fs
      .readFileSync(
        path.join(
          __dirname,
          `../data/${programName}/${programName}-mock-api.js`,
        ),
      )
      .toString();

    const regexp = /return\s+\{([\w\W]*?)\};/gm;
    let newFileData = mockFileData.replace(regexp, (all, group) => {
      let str = `"${api}":${data}`;
      return all.replace(
        group,
        group + (group.trim().endsWith(',') ? str + ',' : ',' + str),
      );
    });
    fs.writeFileSync(
      path.join(
        __dirname,
        `../data/${programName}/${programName}-mock-api.js`,
      ),
      newFileData,
    );
  },
};
module.exports = darkUtils;
