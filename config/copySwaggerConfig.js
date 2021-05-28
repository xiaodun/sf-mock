(function () {
  return {
    isOpen: false,
    getDocLink(copySwaggerParams) {
      //swagger 文档地址
      return "http://10.200.0.4:59080";
    },
    getMatchUrl(copySwaggerParams) {
      //mock服务器获得的url可能与swagger文档上的有出入，比如swagger文档上的没有前缀
      return copySwaggerParams.url.split("/api")[1];
    },
    getMockStructure(copySwaggerParams) {
      //对解析好的swagger结构进行包裹  使其符合mock服务器的响应结构
      return {
        body: copySwaggerParams.generateRspData,
      };
    },
    transformRspData(copySwaggerParams) {
      //对解析好的swagger文档结构做一些简单的处理
      copySwaggerParams.generateRspData.status = 200;
    },
  };
})();
