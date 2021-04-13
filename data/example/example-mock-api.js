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
    //获取url上的参数
    "/api/regexp/url/(\\w+)/(\\d+)$": {
      // /api/regexp/url/name/200
      body: (data) => ({
        color: "red",
        message: "会返回url上的参数",
        execResults: data.execResults,
      }),
      options: {
        supportRegexp: true,
      },
    },
    //设置HTPP 状态码
    "/api/statusCode": {
      response: {
        statusCode: 500,
      },
      body: {
        color: "red",
      },
    },
    //延迟返回
    "/api/delay": {
      response: {
        delaySeconds: 3,
      },
      body: {
        message: "这个是一个延迟返回",
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
    //函数运算
    "/api/function": {
      body: ({}) => {
        return {
          message: "可进行函数运算，除了不能再次返回函数外，其余格式都可以",
        };
      },
    },
    "/api/function/params": {
      body: (data) => {
        return {
          params: data.params,
          message: "自动解析参数并注入,可以操作request、response",
        };
      },
    },
    "/api/function/json": {
      body: (data) => {
        return "hero.json";
      },
    },
    //js文件
    "/api/js": {
      body: "able.js",
    },
    "/api/js/method": {
      body: {
        get: "able.js",
      },
      options: {
        ingoreMethod: false,
      },
    },
    //设置cookie
    "/api/cookies": {
      response: {
        getCookies(data = {}) {
          return {
            method: data.method,
          };
        },
      },
      body: {
        message: "其余属性程序会自动设置",
      },
    },

    //分页
    "/api/page": {
      pageable: true,
      getData() {
        return new Array(100).fill(1).map((item, index) => ({
          id: index,
          name: "寒冰射手" + index,
        }));
      },
      body(data) {
        return data.pageInfos;
      },
    },
  };
})();
