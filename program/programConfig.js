(function () {
  const webpackHotUrl = "http://127.0.0.1:8080";
  return {
    "ncme-app-h5": {
      withNginxConf: true,
      withFileStructure: true,
      apiPrefix: "/medic-h5",
      programPrefix: "/",
      mockListenPort: 9050,
      jointListenPort: 9051,
      jointServiceUrl: "http://ncme.test.wenwo.com",
      programUrl: "http://localhost:8085/h5",
      webpackHotUrl,
    },
    // 键值是项目名
    "graphic-consultation-patient-h5": {
      //配置是否参与到nginx.conf文件server配置的生成
      withNginxConf: true,
      //配置是否参与用于提供mock数据的文件目录结构生成
      withFileStructure: true,
      //nginx.conf => server配置 => location => 转发接口请求前缀
      apiPrefix: "/p/h5/",
      //nginx.conf => server配置 => location => 转发非接口请求前缀
      programPrefix: "/patient_consult_h5",
      //nginx.conf => server配置 => 使用本地测试服务器时监听的端口
      mockListenPort: 9000,
      //nginx.conf => server配置 => 用于联调时监听的端口
      jointListenPort: 9001,
      //nginx.conf => server配置 => 用于联调时转发的地址
      jointServiceUrl: "http://192.168.10.131:8880",
      jointCopyConfig: {
        open: false,
        //没有则创建一个
        mode: "create",
        request: {
          headers: {},
        },
      },
      //nginx.conf => server配置 => 前端项目的根目录
      programUrl: " http://localhost:8080",
      // 前端项目的热更新地址
      webpackHotUrl,
    },

    "consultation-room-pc": {
      withNginxConf: true,
      withFileStructure: true,
      apiPrefix: "/api",
      programPrefix: "/",
      mockListenPort: 9010,
      jointListenPort: 9011,
      jointServiceUrl: "http://10.200.0.1:52123",
      programUrl: "http://127.0.0.1:3888",
      webpackHotUrl,
    },
    aiwen_doctor_app_h5: {
      withNginxConf: true,
      withFileStructure: true,
      apiPrefix: "/api",
      programPrefix: "/",
      mockListenPort: 9020,
      jointListenPort: 9021,
      jointServiceUrl: "http://10.200.0.1:52125",
      programUrl: "http://localhost:8081",
      webpackHotUrl,
    },
    "c-platform-h5-nuxt": {
      withNginxConf: true,
      withFileStructure: true,
      apiPrefix: ["/iw/p/h5", "/api"],
      programPrefix: "/",
      mockListenPort: 9030,
      jointListenPort: 9031,
      jointServiceUrl: "http://10.200.0.1:59080/p/h5/",
      programUrl: "http://localhost:56005",
      webpackHotUrl,
    },
    saas_server_admin: {
      withNginxConf: true,
      withFileStructure: true,
      apiPrefix: ["/api", "/medic-admin"],
      programPrefix: "/",
      mockListenPort: 9040,
      jointListenPort: 9041,

      jointServiceUrl: "http://10.210.2.129:59084/medic-admin",
      programUrl: "http://localhost:8896",
      webpackHotUrl,
      jointCopyConfig: {
        // open: true,
        // open: false,
        mode: "create",
      },
    },
  };
})();
