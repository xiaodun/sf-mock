/**
 * Dark-处理多个项目数据 模式新增的功能集中写在这里
 */
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
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
  getMockFile(reqUrl) {
    const defaultConfig = eval(
      fs.readFileSync(
        path.resolve(__dirname, "../config/defaultConfig.js"),
        "utf-8"
      )
    );
    const nameMaps = this.getNameMaps(reqUrl);
    const { programName, api } = this.parseUrl(reqUrl);

    console.log("项目名:", programName);

    //获取mock数据
    const apis = eval(
      fs.readFileSync(
        path.resolve(
          __dirname,
          `../data/${programName}/${programName}-mock-api.js`
        ),
        "utf-8"
      )
    );
    let newApis = {};
    for (let key in apis) {
      const mockData = _.merge({}, defaultConfig.mockData, apis[key]);
      //如果提供了name属性   则覆盖为具体的名字
      if (nameMaps !== false) {
        if (mockData.inject) {
          mockData.inject = mockData.inject(nameMaps);
        }
        if (mockData.name) {
          mockData.name = mockData.name(nameMaps);
          //默认注入自己
          mockData.inject = mockData.inject || [];
          mockData.inject.push(mockData.name);
        }
      }
      newApis[key] = mockData;
    }
    return {
      apis: newApis,
      url: api,
      programName,
    };
  },
  getNameMaps(reqUrl) {
    const { programName } = this.parseUrl(reqUrl);

    //获取mock数据
    const filePath = path.resolve(
      __dirname,
      `../data/${programName}/${programName}-name-map.js`
    );
    if (fs.existsSync(filePath)) {
      const nameMaps = eval(fs.readFileSync(filePath, "utf-8"));

      return nameMaps;
    } else {
      return false;
    }
  },
  completePath(reqUrl, value) {
    const { programName } = this.parseUrl(reqUrl);

    if (typeof value === "string" && value.search(/\.json|\.js/) !== -1) {
      return path.join(__dirname, "../data", programName, value);
    }
    return value;
  },
  getProgramConfig(reqUrl) {
    const { programName } = this.parseUrl(reqUrl);
    const programConfig = eval(
      fs.readFileSync(
        path.join(__dirname, "../program/programConfig.js"),
        "utf-8"
      )
    )[programName];
    return programConfig;
  },
  writeFile(reqUrl, data = "") {
    const { programName, api } = this.parseUrl(reqUrl);
    const mockFileData = fs
      .readFileSync(
        path.join(
          __dirname,
          `../data/${programName}/${programName}-mock-api.js`
        )
      )
      .toString();

    const regexp = /return\s+\{([\w\W]*?)\};/gm;
    let newFileData = mockFileData.replace(regexp, (all, group) => {
      let str = `"${api}":${data}`;
      return all.replace(
        group,
        group + (group.trim().endsWith(",") ? str + "," : "," + str)
      );
    });
    fs.writeFileSync(
      path.join(__dirname, `../data/${programName}/${programName}-mock-api.js`),
      newFileData
    );
  },
  wrapCookie(cookies = {}) {
    //写入cookie
    let cookieList = [];
    for (const key in cookies) {
      cookieList.push(
        `${key}=${cookies[key]};path=/;Expires=${new Date(
          Date.now() + 1000 * 10000
        ).toGMTString()} `
      );
    }
    return cookieList;
  },
};
module.exports = darkUtils;
