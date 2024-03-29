const axios = require("axios");
const fs = require("fs");
const path = require("path");
const Mock = require("mockjs");
const Random = Mock.Random;
const copySwaggerConfig = eval(
  fs.readFileSync(
    path.resolve(__dirname, "../config/copySwaggerConfig.js"),
    "utf-8"
  )
);
const copySwaggerUtils = {
  getResourceList: async function () {
    //获得swagger文档上有哪些组
    const rsp = await axios
      .get(copySwaggerConfig.getDocLink() + "/swagger-resources")
      .catch((error) => {
        console.error(error);
        console.log("获取文档失败");
        return {};
      });
    return rsp.data || "";
  },
  getGroupRspCollection: async function (groupUrl) {
    //获得swagger对单个组的描述
    const rsp = await axios.get(copySwaggerConfig.getDocLink() + groupUrl);
    return rsp.data;
  },
  getMethod(matchPathInfos) {
    //默认一个url只对应一种方法
    const method = ["get", "post", "delete", "put"].find(
      (item) => matchPathInfos[item]
    );
    return method;
  },
  getStructureName(schemaStr) {
    //获取具体的结构体键值
    const name = schemaStr.split("#/definitions/")[1];
    return name;
  },
  fillDefinitions(topStructureName, groupRsp, type = "object") {
    //结构体的定义都是独立出来的  存在嵌套使用的情况 所以需要递归解析

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
      if (type === "array") {
        return [rspData];
      }
      return rspData;
    }

    const results = able(topStructureName);
    console.log("已获取到全部结构体");
    return results;
  },

  getRspDescribe: async function (copySwaggerParams) {
    //得到url对应的响应体结构描述
    const resourceList = await copySwaggerUtils.getResourceList();
    const matchUrl = copySwaggerConfig.getMatchUrl(copySwaggerParams);
    let rspDes;
    //一个服务一个服务的去匹配
    for (let i = 0; i < resourceList.length; i++) {
      const groupInfos = resourceList[i];
      console.log("groupName : " + groupInfos.name);
      const groupRsp = await this.getGroupRspCollection(groupInfos.url);
      const matchPathInfos = groupRsp.paths[matchUrl];
      if (matchPathInfos) {
        //如果在当前组内找到了
        const method = copySwaggerUtils.getMethod(matchPathInfos);
        const matchMethodInfos = matchPathInfos[method];
        //获得http状态为200的结构体
        const rsp200 = matchMethodInfos.responses["200"];
        if (rsp200.schema) {
          let type = "object";
          let rsp200SchemaStr = rsp200.schema.$ref;
          if (rsp200.schema.type === "array") {
            type = "array";
            rsp200SchemaStr = rsp200.schema.items.$ref;
          }
          console.log("topDefinition : " + rsp200SchemaStr);
          const structureName =
            copySwaggerUtils.getStructureName(rsp200SchemaStr);
          rspDes = copySwaggerUtils.fillDefinitions(
            structureName,
            groupRsp,
            type
          );
        } else {
          rspDes = {};
        }
        break;
      } else {
        console.log("匹配失败");
      }
    }

    return rspDes;
  },
  getDefaultValue(propertyDescs) {
    //根据属性描述生成默认值
    if (propertyDescs.type === "integer") {
      return 0;
    } else if (propertyDescs.type === "string") {
      if (propertyDescs.format === "date-time") {
        return Random.date("yyyy-MM-dd HH:mm:ss");
      }
      return "";
    } else if (propertyDescs.type === "boolean") {
      return Random.boolean();
    }
  },
  getRspData: async function (copySwaggerParams) {
    //得到url对应响应数据
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
      let ableResults = {};
      let isArray = false;
      if (Array.isArray(desc)) {
        desc = desc[0];
        isArray = true;
      }
      for (let propertyKey in desc) {
        if (propertyKey === "definition$ref") {
          continue;
        }
        const propertyDescs = desc[propertyKey];
        const definition$ref = propertyDescs.definition$ref;
        if (definition$ref) {
          if (definition$ref.type === "object") {
            ableResults[propertyKey] = {};
            ableResults[propertyKey] = able(propertyDescs);
          } else if (definition$ref.type === "array") {
            ableResults[propertyKey] = [];
            ableResults[propertyKey].push(able(propertyDescs.items));
          }
        } else {
          ableResults[propertyKey] =
            copySwaggerUtils.getDefaultValue(propertyDescs);
        }
      }
      if (isArray) {
        return [ableResults];
      }
      return ableResults;
    }

    return resultsObj;
  },
};

module.exports = copySwaggerUtils;
