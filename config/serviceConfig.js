(function () {
  return {
    startPort: 9192,
    rspHeaders: {
      "Content-Type": "application/json,charset=utf-8",
      //处理跨域问题

      "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
      "Access-Control-Allow-Origin": "${remoteOrigin}",
      "Access-Control-Allow-Headers":
        "content-type,authorization,token,Medic-Os",
      "Access-Control-Allow-Credentials": true,
    },
  };
})();
