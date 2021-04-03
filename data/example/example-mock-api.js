(function getApis() {
  return {
    //简单使用
    "/api/simple/object": {
      body: {
        message: "普通对象",
        color: "red",
      },
    },
    "/api/simple/null": {
      body: null,
    },
    "/api/simple/undefined": {
      body: undefined,
    },
    "/api/simple/number": {
      body: 1,
    },
    "/api/simple/string": {
      body: "字符串",
    },
    "/api/simple/array": {
      body: [1, 2, 3, 4, 5, 6],
    },
    //区分方法
    "/api/method": {
      body: {
        // get: [1, 2, 3, 4, 5, 6],
        get: {
          color: "red",
          message1: "方法指的是request支持的方法",
          message2: "返回数据支持全部简单模式",
        },
      },
      options: {
        ingoreMethod: false,
      },
    },
    //动态路径
    "/api/regexp/\\w+/\\d+$": {
      // /api/regexp/name/200
      body: {
        color: "red",
      },
      options: {
        supportRegexp: true,
      },
    },
    //设置HTPP 状态码
    "/api/statusCode": {
      response: {
        statusCode: 404,
      },
      body: {
        color: "red",
      },
    },
    // json文件
    "/api/json": {
      body: "hero.json",
    },
    "/api/method/json": {
      body: {
        get: "hero.json",
      },
      options: {
        ingoreMethod: false,
      },
    },
  };
})();
