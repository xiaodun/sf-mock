/**
 * 解析swagger文档接口，自动渲染出数据
 */
const fs = require("fs");
const axios = require("axios");
const copyToClipboard = require("sf-copy-to-clipboard");
const moduleName = "电话咨询设置相关接口";
const reqUrl = "http://10.200.0.3:59080/v2/api-docs?group=doctor-H5";

// const programName = "";
const programName = "aiwen_doctor_app_h5";
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
      if (!programName) {
        configList.push({
          methods: method + "Json",
          name: url.split("/").pop(),
          url,
          desc: reqDescribe.summary,
        });
      } else if (programName === "aiwen_doctor_app_h5") {
        configList.push({
          methods: method,
          name: url.split("/").pop(),
          url,
          desc: reqDescribe.summary,
        });
      }
    }
  });
  console.log(configList);
  let result =
    "," +
    configList.reduce((pre, cur) => {
      return pre + JSON.stringify(cur) + ",";
    }, "");
  copyToClipboard(result);
})();
