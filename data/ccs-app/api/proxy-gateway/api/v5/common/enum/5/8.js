(function () {
  return (data) => {
    // GET /api/v5/common/enum/5/8 — MT5 Orders enum (version=5, module=ORDERS=8)
    return {
      data: {
        data: {
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
          ],
          "state": [
            { "key": 0, "label": "Started" },
            { "key": 1, "label": "Placed" },
            { "key": 2, "label": "Canceled" },
            { "key": 3, "label": "Partial" },
            { "key": 4, "label": "Filled" },
            { "key": 5, "label": "Rejected" },
            { "key": 6, "label": "Expired" },
            { "key": 7, "label": "Request Add" },
            { "key": 8, "label": "Request Modify" },
            { "key": 9, "label": "Request Cancel" }
          ],
          "type": [
            { "key": 0, "label": "Buy" },
            { "key": 1, "label": "Sell" },
            { "key": 2, "label": "Buy Limit" },
            { "key": 3, "label": "Sell Limit" },
            { "key": 4, "label": "Buy Stop" },
            { "key": 5, "label": "Sell Stop" },
            { "key": 6, "label": "Buy Stop Limit" },
            { "key": 7, "label": "Sell Stop Limit" },
            { "key": 8, "label": "Close By" }
          ],
          "typeFill": [
            { "key": 0, "label": "Return" },
            { "key": 1, "label": "IOC" },
            { "key": 2, "label": "FOK" }
          ],
          "typeTime": [
            { "key": 0, "label": "GTC" },
            { "key": 1, "label": "Day" },
            { "key": 2, "label": "Specified" },
            { "key": 3, "label": "Specified Day" }
          ]
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
