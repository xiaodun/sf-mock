(function () {
  return {
    isOpen: false,
    getDocLink(copySwaggerParams) {
      //swagger 文档地址
      return "http://10.200.0.4:59080";
    },
    getMatchUrl(copySwaggerParams) {
      //mock服务器获得的url可能与swagger文档上的有出入，比如swagger文档上的没有前缀
      const prefixList = ["/api"];
      const prefix = prefixList.find((item) =>
        copySwaggerParams.url.startsWith(item)
      );
      if (prefix) {
        return copySwaggerParams.url.split(prefix)[1];
      }
    },
    transformRspData(copySwaggerParams) {
      //对解析好的swagger文档结构做一些简单的处理
      copySwaggerParams.generateRspData.status = 200;
    },
    getMockStructure(copySwaggerParams) {
      //对解析好的swagger结构进行包裹  使其符合mock服务器的响应结构
      return {
        body: copySwaggerParams.generateRspData,
      };
    },
  };
})();
