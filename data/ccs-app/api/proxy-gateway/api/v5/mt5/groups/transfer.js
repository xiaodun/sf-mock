(function () {
  return (data) => {
    return {
      "data": {
        "data": {
          "totalCount": 2,
          "sucessCount": 1,
          "failedCount": 1,
          "details": [
            {
              "identifier": {
                "serverId": 20002,
                "name": "00-00-00313-duplicate1"
              },
              "success": false,
              "message": "Group 'jeff\\timekk' already exists on server MT5_TPTest_2."
            },
            {
              "identifier": {
                "serverId": 20002,
                "name": "00-00-00315"
              },
              "success": true,
              "message": "Transferred to server MT5_TPTest_2."
            }
          ]
        },
        "message": "partial success"
      },
      "status": 207,
      "tokenStatus": {
        "expiresAt": 1777024114434,
        "isValid": true
      }
    };
  };
})();
