(function () {
  const webpackHotUrl = "http://127.0.0.1:8080";
  return {
    example: {
      programUrl: "http://192.168.10.197:8000",
      // 前端项目的热更新地址
      webpackHotUrl,
      apiPrefixList: ["/api"],
      programPrefix: "/",
      serverList: [
        {
          port: 9000,
          isMock: true,
        },
        {
          port: 9001,
          url: "http://192.168.10.197:8880",
        },
      ],
    },
  };
})();
