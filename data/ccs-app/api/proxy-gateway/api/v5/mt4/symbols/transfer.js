(function () {
  return (data) => {
    return {
      "success": false,
      "status": 422,
      "errorDescription": "failed",
      "data": {
        "totalCount": 1,
        "sucessCount": 0,
        "failedCount": 1,
        "details": [
          {
            "identifier": {
              "serverId": 10002,
              "name": "_DJI"
            },
            "success": false,
            "message": "Symbol already exists"
          }
        ]
      }
    };
  };
})();
