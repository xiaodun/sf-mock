(function getApis() {
  return {
    "/api/table/getHeroList": {
      rsp: {
        statusCode: 404,
      },
      body: "getHeroList.js",
      options: {
        supportRegexp: true,
      },
    },
  };
})();
