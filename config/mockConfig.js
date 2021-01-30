(function () {
  return {
    startPort: 9192,
    rspHeaders: {
      'Content-Type': 'application/json,charset=utf-8',
      //不用nginx代理时需要添加

      'Access-Control-Allow-Methods': 'DELETE,PUT,POST,GET,OPTIONS',
      'Access-Control-Allow-Origin': 'http://${remoteIp}',
      'Access-Control-Allow-Headers':
        'content-type,authorization,token ',
      'Access-Control-Allow-Credentials': true,
    },
  };
})();
