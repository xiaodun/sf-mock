const axios = require("axios");
const fs = require("fs");
const path = require("path");
const copySwaggerConfig = eval(
  fs.readFileSync(
    path.resolve(__dirname, "../config/copySwaggerConfig.js"),
    "utf-8"
  )
);
const copySwaggerUtils = {
  getResourceList: async function () {
    const rsp = await axios.get(
      copySwaggerConfig.getDocLink() + "/swagger-resources"
    );
    return rsp.data;
  },
  getGroupRspCollection: async function (groupUrl) {
    const rsp = await axios.get(copySwaggerConfig.getDocLink() + groupUrl);
    return rsp.data;
  },
  getMethod(matchPathInfos) {
    const method = ["get", "post", "delete", "put"].find(
      (item) => matchPathInfos[item]
    );
    return method;
  },
  getStructureName(schemaStr) {
    const name = schemaStr.split("#/definitions/")[1];
    return name;
  },
  fillDefinitions(topStructureName, groupRsp) {
    //结构的定义都是独立出来的  存在嵌套使用的情况

    function able(structureName) {
      const rspData = {};
      const resultDescs = groupRsp.definitions[structureName];
      if (resultDescs.type === "object") {
        for (let key in resultDescs.properties) {
          const propertyDescs = resultDescs.properties[key];
          if (propertyDescs.$ref) {
            const propertyStructureName = copySwaggerUtils.getStructureName(
              propertyDescs.$ref
            );
            rspData[key] = able(propertyStructureName);
            rspData[key].definition$ref = {
              type: "object",
            };
          } else if (
            propertyDescs.type === "array" &&
            propertyDescs.items.$ref
          ) {
            const propertyStructureName = copySwaggerUtils.getStructureName(
              propertyDescs.items.$ref
            );
            rspData[key] = {};
            rspData[key].definition$ref = {
              type: "array",
            };
            rspData[key].items = able(propertyStructureName);
          } else {
            rspData[key] = propertyDescs;
          }
        }
      }
      return rspData;
    }

    const results = able(topStructureName);
    console.log("已获取到全部结构体");
    return results;
  },

  getRspDescribe: async function (copySwaggerParams) {
    const resourceList = await copySwaggerUtils.getResourceList();
    const matchUrl = copySwaggerConfig.getMatchUrl(copySwaggerParams);
    let rspDes;
    for (let i = 0; i < resourceList.length; i++) {
      const groupInfos = resourceList[i];
      console.log("groupName : " + groupInfos.name);
      const groupRsp = await this.getGroupRspCollection(groupInfos.url);
      const matchPathInfos = groupRsp.paths[matchUrl];
      if (matchPathInfos) {
        //默认一个url只对应一个方法
        const method = copySwaggerUtils.getMethod(matchPathInfos);
        const matchMethodInfos = matchPathInfos[method];
        const rsp200SchemaStr = matchMethodInfos.responses["200"].schema.$ref;
        console.log("topDefinition : " + rsp200SchemaStr);
        const structureName = copySwaggerUtils.getStructureName(
          rsp200SchemaStr
        );
        rspDes = copySwaggerUtils.fillDefinitions(structureName, groupRsp);
        break;
      } else {
        console.log("匹配失败");
      }
    }
    return rspDes;
  },
  getDefaultValue(propertyDescs) {
    if (propertyDescs.type === "integer") {
      return 0;
    } else if (propertyDescs.type === "string") {
      if (propertyDescs.format === "date-time") {
        return "2020-10-27 01:33";
      }
      return "";
    } else if (propertyDescs.type === "boolean") {
      return false;
    }
  },
  getRspData: async function (copySwaggerParams) {
    const rspDesc = await copySwaggerUtils.getRspDescribe(copySwaggerParams);
    let resultsObj;
    if (rspDesc) {
      resultsObj = able(rspDesc);
      console.log("已生成默认数据");
      console.log(JSON.stringify(resultsObj, null, 2));
    } else {
      console.log("没有获得响应的结构体");
    }
    function able(desc) {
      const resultsObj = {};
      for (let propertyKey in desc) {
        if (propertyKey === "definition$ref") {
          continue;
        }
        const propertyDescs = desc[propertyKey];
        const definition$ref = propertyDescs.definition$ref;
        if (definition$ref) {
          if (definition$ref.type === "object") {
            resultsObj[propertyKey] = {};
            resultsObj[propertyKey] = able(propertyDescs);
          } else if (definition$ref.type === "array") {
            resultsObj[propertyKey] = [];
            resultsObj[propertyKey].push(able(propertyDescs.items));
          }
        } else {
          resultsObj[propertyKey] = copySwaggerUtils.getDefaultValue(
            propertyDescs
          );
        }
      }
      return resultsObj;
    }

    return resultsObj;
  },
};

module.exports = copySwaggerUtils;
