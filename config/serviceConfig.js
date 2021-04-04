(function () {
  return {
    startPort: 9192,
    getHeaders: (data) => {
      return {
        "Content-Type": "application/json,charset=utf-8",
        //处理跨域问题
        "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
        "Access-Control-Allow-Origin": data.remoteOrigin,
        "Access-Control-Allow-Headers": data.reqHeaders,
        "Access-Control-Allow-Credentials": true,
      };
    },
  };
})();
