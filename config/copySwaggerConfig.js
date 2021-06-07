(function () {
  return {
    isOpen: true,
    getDocLink(copySwaggerParams) {
      //swagger 文档地址
      return "http://10.200.0.3:59080";
    },
    getMatchUrl(copySwaggerParams) {
      //mock服务器获得的url可能与swagger文档上的有出入，比如swagger文档上的没有前缀
      const prefixList = ["/api/gateway/doctor", "/api/gateway", "/api"];
      const prefix = prefixList.find((item) =>
        copySwaggerParams.url.startsWith(item)
      );
      if (prefix) {
        return copySwaggerParams.url.split(prefix)[1];
      }
    },
    transformRspData(copySwaggerParams) {
      //对解析好的swagger文档结构做一些简单的处理
      if (copySwaggerParams.generateRspData.status != undefined) {
        copySwaggerParams.generateRspData.status = 200;
      } else {
        //有些接口没有最外面的层次
        copySwaggerParams.generateRspData = {
          data: copySwaggerParams.generateRspData,
          status: 200,
          message: "",
        };
      }
    },
    getMockStructure(copySwaggerParams) {
      //对解析好的swagger结构进行包裹  使其符合mock服务器的响应结构
      return {
        body: copySwaggerParams.generateRspData,
      };
    },
  };
})();
