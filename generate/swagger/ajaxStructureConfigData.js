/**
 * 解析swagger文档接口，自动渲染出数据
 */
const axios = require("axios");
const copyToClipboard = require("sf-copy-to-clipboard");
//用于分类接口的名字
const moduleName = "运营代操作接口";
//用于渲染swaggerUI界面的链接,通过开发者工具查看
const reqUrl =
  "http://wenwo-cloud-adapter-doctor-rebuild-dev.wenwo.cn/v2/api-docs?group=background-admin";
(async () => {
  const { data: structureRsp } = await axios.get(reqUrl);
  let configList = [];
  //遍历路径
  Object.keys(structureRsp.paths).forEach((url) => {
    const values = structureRsp.paths[url];
    //区分方法
    const method = ["post", "get", "delete", "put"].find(
      (item) => values[item]
    );
    //获取接口的的具体描述
    const reqDescribe = values[method];
    if (reqDescribe.tags.includes(moduleName)) {
      //存放生成的内容
      configList.push({
        method: method,
        name: url.split("/").pop(), //名字
        url, //路径
        desc: reqDescribe.summary, //描述
      });
    }
  });
  // 黏贴到剪贴板的内容
  console.log(configList);
  let result =
    "," +
    configList.reduce((pre, cur) => {
      return pre + JSON.stringify(cur) + ",";
    }, "");
  copyToClipboard(result);
})();
