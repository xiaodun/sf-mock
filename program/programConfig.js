(function () {
  const webpackHotUrl = 'http://127.0.0.1:8080';
  return {
    // 键值是项目名
    // 'sf-notes': {
    //   //配置是否参与到nginx.conf文件server配置的生成
    //   withNginxConf: true,
    //   //配置是否参与用于提供mock数据的文件目录结构生成
    //   withFileStructure: true,
    //   //nginx.conf => server配置 => location => 转发接口请求前缀
    //   apiPrefix: '/api',
    //   //nginx.conf => server配置 => location => 转发非接口请求前缀
    //   programPrefix: '/',
    //   //nginx.conf => server配置 => 使用本地测试服务器时监听的端口
    //   mockListenPort: 9000,
    //   //nginx.conf => server配置 => 用于联调时监听的端口
    //   jointListenPort: 9001,
    //   //nginx.conf => server配置 => 用于联调时转发的地址
    //   jointServiceUrl: 'http://10.200.0.3:52123',
    //   //nginx.conf => server配置 => 前端项目的根目录
    //   programUrl: 'http://192.168.10.131:8000',
    //   // 前端项目的热更新地址
    //   webpackHotUrl,
    // },
  };
})();
