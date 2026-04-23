(function () {
  return (data) => {
    // POST (transfer new) / PUT (transfer settings) — same response shape
    return {
      "data": {
        "totalCount": 2,
        "sucessCount": 1,
        "failedCount": 1,
        "details": [
          {
            "identifier": {
              "serverId": 10002,
              "name": "coverage"
            },
            "success": true,
            // "message": "success"
          },
          {
            "identifier": {
              "serverId": 10002,
              "name": "M_GFT_USD"
            },
            "success": false,
            "message": "Transfer failed: group configuration conflict"
          }
        ]
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
