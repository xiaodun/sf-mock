const pageUtils = {
  getTransformParams(reqParams, defaultConfig) {
    //将请求中的参数转换为mock服务器内部使用的参数
    let params = {};
    const paramMap = defaultConfig.pageSettings.getParamMap();
    for ([serviceKey, values] of paramMap) {
      params[serviceKey] = reqParams[values.reqKey];
      if (params[serviceKey] != null) {
        params[serviceKey] = +params[serviceKey];
      } else {
        params[serviceKey] = values.defaultValue;
      }
    }

    return params;
  },
};
module.exports = pageUtils;
