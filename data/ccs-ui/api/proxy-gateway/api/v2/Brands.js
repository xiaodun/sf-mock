(function () {
  return (data) => {
    console.log('wx', data.params.mtVersion)
    if (data.params.mtVersion == 4) {
      return {
        "data": {
          "value": [
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
          "isSuccess": true,
          "error": null
        },
        "status": 200,
        "tokenStatus": {
          "expiresAt": 1772851729845,
          "isValid": true
        }
      };
    }
    else if (data.params.mtVersion == 5) {
      return {
        "data": {
          "value": [
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
          "isSuccess": true,
          "error": null
        },
        "status": 200,
        "tokenStatus": {
          "expiresAt": 1772851731807,
          "isValid": true
        }
      };
    }
  };
})();
