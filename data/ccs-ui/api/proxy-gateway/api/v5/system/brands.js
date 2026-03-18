(function () {
  return (data) => {
    if (data.params.version == 5) {
      return {
        "data": {
          "data": [
            {
              "brand": "Brand3",
              "servers": [
                {
                  "serverName": "MT5 TPTest",
                  "serverId": 20001,
                  "mtVersion": 5
                },
                {
                  "serverName": "MT5 TPTest 2",
                  "serverId": 20002,
                  "mtVersion": 5
                }
              ]
            },
            {
              "brand": "Brand4",
              "servers": [
                {
                  "serverName": "MT5_3",
                  "serverId": 20003,
                  "mtVersion": 5
                }
              ]
            }
          ],
          "message": "success"
        },
        "status": 200,
        "tokenStatus": {
          "expiresAt": 1773884640602,
          "isValid": true
        }
      };
    }
    else {
      return {
        "data": {
          "data": [
            {
              "brand": "Brand1",
              "servers": [
                {
                  "serverName": "MT4_TPTEST",
                  "serverId": 10001,
                  "mtVersion": 4
                },
                {
                  "serverName": "MT4_TEST",
                  "serverId": 10002,
                  "mtVersion": 4
                }
              ]
            },
            {
              "brand": "Brand2",
              "servers": [
                {
                  "serverName": "MT4_TEST_3",
                  "serverId": 10003,
                  "mtVersion": 4
                },
                {
                  "serverName": "MT4_TEST_4",
                  "serverId": 10004,
                  "mtVersion": 4
                }
              ]
            }
          ],
          "message": "success"
        },
        "status": 200,
        "tokenStatus": {
          "expiresAt": 1773884640602,
          "isValid": true
        }
      }
    }
  };
})();
