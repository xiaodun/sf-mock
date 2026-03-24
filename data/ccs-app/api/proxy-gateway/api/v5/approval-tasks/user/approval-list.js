(function () {
  return (data) => {
    // GET /api/v5/approval-tasks/user/approval-list?serverId=&riskLevel=&module=
    // Returns Approver[] — current user is filtered out client-side
    return {
      "data": {
        "data": [
          {
            "userId": 64,
            "userName": "candice.wang@hytechc.com",
            "userEmail": "candice.wang@hytechc.com",
            "firstName": "Candice",
            "lastName": "Wang"
          },
          {
            "userId": 69,
            "userName": "chunyang.ma@hytechc.com",
            "userEmail": "chunyang.ma@hytechc.com",
            "firstName": "Chun",
            "lastName": "Ma"
          },
          {
            "userId": 71,
            "userName": "juohan.chiang@hytechc.com",
            "userEmail": "juohan.chiang@hytechc.com",
            "firstName": "Joe",
            "lastName": "Chiang"
          },
          {
            "userId": 68,
            "userName": "joel.yap@hytechc.com",
            "userEmail": "joel.yap@hytechc.com",
            "firstName": "Joel",
            "lastName": "Yap"
          },
          {
            "userId": 40,
            "userName": "shaun.tan@hytechc.com",
            "userEmail": "shaun.tan@hytechc.com",
            "firstName": "Shaun",
            "lastName": "Tan"
          },
          {
            "userId": 44,
            "userName": "stephen.dai@hytechc.com",
            "userEmail": "stephen.dai@hytechc.com",
            "firstName": "Stephen",
            "lastName": "Dai"
          }
        ],
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
