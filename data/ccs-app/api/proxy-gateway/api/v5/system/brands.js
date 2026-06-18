(function () {
  return (data) => {
    if (data.params.mtVersion == 5) {
      return {
        "data": {
          "data": [
            {
              "brand": "Brand3",
              "servers": [
                { "serverName": "MT5_TPTest", "serverId": 20001, "mtVersion": 5 },
                { "serverName": "MT5_TPTest_2", "serverId": 20002, "mtVersion": 5 }
              ]
            },
            {
              "brand": "Brand4",
              "servers": [
                { "serverName": "MT5_3", "serverId": 20003, "mtVersion": 5 }
              ]
            }
          ],
          "message": "success"
        },
        "status": 200,
        "tokenStatus": { "expiresAt": 1774668572478, "isValid": true }
      };
    } else {
      return {
        "data": {
          "data": [
            {
              "brand": "Vantage",
              "servers": [
                { "serverName": "MT4_VAN_Live", "serverId": 10101, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Live2", "serverId": 10102, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Demo", "serverId": 10103, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Demo2", "serverId": 10104, "mtVersion": 4 },
                { "serverName": "MT4_VAN_UAT", "serverId": 10105, "mtVersion": 4 },
                { "serverName": "MT4_VAN_UAT2", "serverId": 10106, "mtVersion": 4 },
                { "serverName": "MT4_VAN_STP", "serverId": 10107, "mtVersion": 4 },
                { "serverName": "MT4_VAN_ECN", "serverId": 10108, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Prime", "serverId": 10109, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Prime2", "serverId": 10110, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Cent", "serverId": 10111, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Copy", "serverId": 10112, "mtVersion": 4 },
                { "serverName": "MT4_VAN_Swap", "serverId": 10113, "mtVersion": 4 },
                { "serverName": "MT4_VAN_IS", "serverId": 10114, "mtVersion": 4 },
                { "serverName": "MT4_VAN_AU", "serverId": 10115, "mtVersion": 4 },
                { "serverName": "MT4_VAN_UK", "serverId": 10116, "mtVersion": 4 },
                { "serverName": "MT4_VAN_SG", "serverId": 10117, "mtVersion": 4 }
              ]
            },
            {
              "brand": "GO Markets",
              "servers": [
                { "serverName": "MT4_GO_Live", "serverId": 10201, "mtVersion": 4 },
                { "serverName": "MT4_GO_Live2", "serverId": 10202, "mtVersion": 4 },
                { "serverName": "MT4_GO_Demo", "serverId": 10203, "mtVersion": 4 },
                { "serverName": "MT4_GO_Demo2", "serverId": 10204, "mtVersion": 4 },
                { "serverName": "MT4_GO_UAT", "serverId": 10205, "mtVersion": 4 },
                { "serverName": "MT4_GO_STP", "serverId": 10206, "mtVersion": 4 },
                { "serverName": "MT4_GO_ECN", "serverId": 10207, "mtVersion": 4 },
                { "serverName": "MT4_GO_Prime", "serverId": 10208, "mtVersion": 4 },
                { "serverName": "MT4_GO_Cent", "serverId": 10209, "mtVersion": 4 },
                { "serverName": "MT4_GO_Copy", "serverId": 10210, "mtVersion": 4 },
                { "serverName": "MT4_GO_IS", "serverId": 10211, "mtVersion": 4 },
                { "serverName": "MT4_GO_AU", "serverId": 10212, "mtVersion": 4 },
                { "serverName": "MT4_GO_UK", "serverId": 10213, "mtVersion": 4 },
                { "serverName": "MT4_GO_SG", "serverId": 10214, "mtVersion": 4 },
                { "serverName": "MT4_GO_SC", "serverId": 10215, "mtVersion": 4 }
              ]
            },
            {
              "brand": "Eightcap",
              "servers": [
                { "serverName": "MT4_EC_Live", "serverId": 10301, "mtVersion": 4 },
                { "serverName": "MT4_EC_Live2", "serverId": 10302, "mtVersion": 4 },
                { "serverName": "MT4_EC_Demo", "serverId": 10303, "mtVersion": 4 },
                { "serverName": "MT4_EC_UAT", "serverId": 10304, "mtVersion": 4 },
                { "serverName": "MT4_EC_STP", "serverId": 10305, "mtVersion": 4 },
                { "serverName": "MT4_EC_Prime", "serverId": 10306, "mtVersion": 4 },
                { "serverName": "MT4_EC_AU", "serverId": 10307, "mtVersion": 4 },
                { "serverName": "MT4_EC_UK", "serverId": 10308, "mtVersion": 4 },
                { "serverName": "MT4_EC_SG", "serverId": 10309, "mtVersion": 4 }
              ]
            },
            {
              "brand": "Pepperstone",
              "servers": [
                { "serverName": "MT4_PEP_Live", "serverId": 10401, "mtVersion": 4 },
                { "serverName": "MT4_PEP_Live2", "serverId": 10402, "mtVersion": 4 },
                { "serverName": "MT4_PEP_Demo", "serverId": 10403, "mtVersion": 4 },
                { "serverName": "MT4_PEP_UAT", "serverId": 10404, "mtVersion": 4 },
                { "serverName": "MT4_PEP_Razor", "serverId": 10405, "mtVersion": 4 },
                { "serverName": "MT4_PEP_Edge", "serverId": 10406, "mtVersion": 4 },
                { "serverName": "MT4_PEP_AU", "serverId": 10407, "mtVersion": 4 },
                { "serverName": "MT4_PEP_UK", "serverId": 10408, "mtVersion": 4 },
                { "serverName": "MT4_PEP_SC", "serverId": 10409, "mtVersion": 4 },
                { "serverName": "MT4_PEP_KE", "serverId": 10410, "mtVersion": 4 },
                { "serverName": "MT4_PEP_CY", "serverId": 10411, "mtVersion": 4 }
              ]
            }
          ],
          "message": "success"
        },
        "status": 200,
        "tokenStatus": { "expiresAt": 1773884640602, "isValid": true }
      };
    }
  };
})();
