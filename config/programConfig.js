(function () {
  // 项目的热更新地址
  const webpackHotUrl = "http://127.0.0.1:8080";
  return {
    example: {
      //项目地址
      programUrl: "http://192.168.10.197:8000",
      //项目的公共前缀
      programPrefix: "/",
      //ajax请求的前缀，用于转发到服务器
      apiPrefixList: ["/api"],
      //数组的一项代表nginx上的一个服务
      serverList: [
        {
          //监听端口
          port: 9000,
          //转发到mock服务器，地址有程序自动生成
          isMock: true,
        },
        {
          port: 9001,
          //响应ajax请求的服务器地址
          url: "http://192.168.10.197:8880",
        },
      ],
      webpackHotUrl,
    },
  };
})();
