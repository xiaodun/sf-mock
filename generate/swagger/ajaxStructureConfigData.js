/**
 * 解析swagger文档接口，自动渲染出数据
 */
const axios = require("axios");
const copyUtils = require("../../utils/copyUtils.js");
const docDataUrl = "http://10.200.0.3:59080/v2/api-docs";
const groupName = "background-admin";
const moduleName = "医生处方权配置管理接口";
const reqUrl = `${docDataUrl}?group=${groupName}`;
(async () => {
  const { data: structureRsp } = await axios.get(reqUrl);
  let configList = [];
  Object.keys(structureRsp.paths).forEach((url) => {
    const values = structureRsp.paths[url];
    const method = ["post", "get", "delete", "put"].find(
      (item) => values[item]
    );
    const reqDescribe = values[method];
    if (reqDescribe.tags.includes(moduleName)) {
      configList.push({
        methods: method + "Json",
        name: url.split("/").pop(),
        url,
        desc: reqDescribe.summary,
      });
    }
  });
  console.log(configList);
  let result =
    "," +
    configList.reduce((pre, cur) => {
      return pre + JSON.stringify(cur) + ",";
    }, "");
  copyUtils.exec(result);
})();
