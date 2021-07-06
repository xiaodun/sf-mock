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

    "aiwen-user-h5": {
      programUrl: "http://localhost:8088",
      programPrefix: "/",
      apiPrefixList: ["/api"],
      serverList: [
        {
          port: 9060,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },
    "ncme-app-h5": {
      programUrl: "http://localhost:8085/h5",
      programPrefix: "/",
      apiPrefixList: ["/medic-h5"],
      serverList: [
        {
          port: 9050,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },
    "graphic-consultation-patient-h5": {
      programUrl: " http://localhost:8080",
      programPrefix: "/patient_consult_h5",
      apiPrefixList: ["/p/h5/"],
      serverList: [
        {
          port: 9000,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },

    "consultation-room-pc": {
      programUrl: "http://127.0.0.1:3888",
      programPrefix: "/",
      apiPrefixList: ["/api", "/message/"],
      serverList: [
        {
          port: 9010,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },
    aiwen_doctor_app_h5: {
      programUrl: "http://localhost:8080",
      programPrefix: "/",
      apiPrefixList: ["/api"],
      serverList: [
        {
          port: 9020,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },
    "c-platform-h5-nuxt": {
      programUrl: "http://localhost:56005",
      programPrefix: "/",
      apiPrefixList: ["/iw/p/h5", "/api"],
      serverList: [
        {
          port: 9030,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },
    saas_server_admin: {
      programUrl: "http://localhost:8896",
      programPrefix: "/",
      apiPrefixList: ["/api", "/medic-admin", "/v1"],
      serverList: [
        {
          port: 9040,
          isMock: true,
        },
      ],
      webpackHotUrl,
    },
  };
})();
