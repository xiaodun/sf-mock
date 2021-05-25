(function () {
  return {
    isOpen: false,
    getDocLink(copySwaggerParams) {
      return "http://10.200.0.4:59080";
    },
    getMatchUrl(copySwaggerParams) {
      return copySwaggerParams.url.split("/api")[1];
    },
    getMockStructure(copySwaggerParams) {
      return {
        body: copySwaggerParams.generateRspData,
      };
    },
    //对文档中的示例部分做转换
    transformRspData(copySwaggerParams) {
      copySwaggerParams.generateRspData.status = 200;
    },
  };
})();
