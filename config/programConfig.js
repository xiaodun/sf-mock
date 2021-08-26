(function () {
  // 项目的热更新地址
  const webpackHotUrl = "http://127.0.0.1:8080";
  return {
    example: {
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
        isOpen: true,
        tabList: [
          {
            address: `D:\\github\\sf-notes`,
            startCommad: "npm run dev",
            isSelf: true,
          },
          {
            withCreateAllBat: false, //默认为true 生成启动自身的bat文件
            withCreateSingleBat: false, //默认为true 是否和其它项目一起启动
            address: `D:\\github\\sf-notes\\service\\app`,
            startCommad: "node service.js",
            titleName: "notes-service",
          },
        ],
      },
      withFileStructure: false, //默认为true 关联createFileStructure的行为
      withNginxConfig: false, //默认为true 关联writeNginxConfig的行为
      webpackHotUrl,
    },
  };
})();
