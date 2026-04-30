(function () {
  return (data) => {
    // GET /api/v5/common/enum/5/10 — MT5 Position enum (version=5, module=POSITION=10)
    return {
      data: {
        data: {
          "action": [
            { "key": 0, "label": "Buy" },
            { "key": 1, "label": "Sell" }
          ],
          "reason": [
            { "key": 0, "label": "Client" },
            { "key": 1, "label": "Expert" },
            { "key": 2, "label": "Dealer" },
            { "key": 3, "label": "SL" },
            { "key": 4, "label": "TP" },
            { "key": 5, "label": "SO" },
            { "key": 6, "label": "Rollover" },
            { "key": 7, "label": "External Client" },
            { "key": 8, "label": "VMargin" },
            { "key": 9, "label": "Gateway" },
            { "key": 10, "label": "Signal" },
            { "key": 11, "label": "Settlement" },
            { "key": 12, "label": "Transfer" },
            { "key": 13, "label": "Sync" },
            { "key": 14, "label": "External Service" },
            { "key": 15, "label": "Migration" },
            { "key": 16, "label": "Mobile" },
            { "key": 17, "label": "Web" },
            { "key": 18, "label": "Split" }
          ]
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
