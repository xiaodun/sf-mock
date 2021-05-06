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
  getWrapOne(params, list = [], defaultConfig) {
    let objs = {};
    objs.page = params.page;
    objs.size = params.size;
    objs.total = list.length;
    objs.totalPage = (((list.length - 1) / params.size) | 0) + 1;
    const paramMap = defaultConfig.pageSettings.getParamMap();
    const defaultPage = paramMap.get("page").defaultValue;
    let startPage = params.page;
    if (defaultPage === 1) {
      startPage = params.page - 1;
    }
    if (params.page <= objs.totalPage) {
      objs.nextPage = params.page + 1;
      objs.rows = list.slice(
        startPage * params.size,
        (startPage + 1) * params.size
      );
    }
    return defaultConfig.pageSettings.getWrapContext(objs);
  },
};
module.exports = pageUtils;
