
(function () {
  // 项目的热更新地址
  const webpackHotUrl = "http://127.0.0.1:8080";
  return {
    "sf-notes": {
      //项目地址
      programUrl: "http://localhost:8000",
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
      WindowsTerminal: {
        isOpen: false,
      },
      withFileStructure: false, //默认为true 关联createFileStructure的行为
      withNginxConfig: false, //默认为true 关联writeNginxConfig的行为
      webpackHotUrl,
    },
    "ccs-app": {
      //项目地址
      programUrl: "http://localhost:3000",
      //项目的公共前缀
      programPrefix: "/",
      //ajax请求的前缀，用于转发到服务器
      apiPrefixList: ["/api"],
      //数组的一项代表nginx上的一个服务
      serverList: [
        {
          //监听端口
          port: 9100,
          //转发到mock服务器，地址有程序自动生成
          isMock: true,
        },
      ],
      WindowsTerminal: {
        isOpen: true,
        tabList: [
          {
            address: "C:\\Users\\SZLD03287\\Documents\\ccs-ui\\ccs-src\\ccs-app",
            startCommad: "pnpm dev",
            isSelf: true
          },
          
        ]
      },
      withFileStructure: true, //默认为true 关联createFileStructure的行为
      withNginxConfig: true, //默认为true 关联writeNginxConfig的行为
      webpackHotUrl:"http://127.0.0.1:9100"
    },
  };
})();
