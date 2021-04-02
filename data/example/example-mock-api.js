(function getApis() {
  return {
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
    "/api/simple/object": {
      body: {
        message: "普通对象",
        color: "red",
      },
    },
  };
})();
