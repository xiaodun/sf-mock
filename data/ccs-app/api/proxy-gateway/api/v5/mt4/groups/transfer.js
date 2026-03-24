(function () {
  return (data) => {
    // POST (transfer new) / PUT (transfer settings) — same response shape
    return {
      "data": {
        "data": {
          "totalCount": 2,
          "sucessCount": 2,
          "failedCount": 0,
          "details": [
            {
              "identifier": {
                "serverId": 10002,
                "name": "R_STD_USD"
              },
              "success": true,
              "message": "success"
            },
            {
              "identifier": {
                "serverId": 10002,
                "name": "R_ECN_USD"
              },
              "success": true,
              "message": "success"
            }
          ]
        },
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
