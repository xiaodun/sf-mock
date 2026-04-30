(function () {
  return (data) => {
    // GET /api/v5/common/enum/5/11 — MT5 Deal enum (version=5, module=DEAL=11)
    return {
      data: {
        data: {
          "action": [
            { "key": 0, "label": "Buy" },
            { "key": 1, "label": "Sell" },
            { "key": 2, "label": "Balance" },
            { "key": 3, "label": "Credit" },
            { "key": 4, "label": "Charge" },
            { "key": 5, "label": "Correction" },
            { "key": 6, "label": "Bonus" },
            { "key": 7, "label": "Commission" },
            { "key": 8, "label": "Commission Daily" },
            { "key": 9, "label": "Commission Monthly" },
            { "key": 10, "label": "Agent Daily" },
            { "key": 11, "label": "Agent Monthly" },
            { "key": 12, "label": "Interest Rate" },
            { "key": 13, "label": "Buy Canceled" },
            { "key": 14, "label": "Sell Canceled" },
            { "key": 15, "label": "Dividend" },
            { "key": 16, "label": "Dividend Franked" },
            { "key": 17, "label": "Tax" },
            { "key": 18, "label": "Agent" },
            { "key": 19, "label": "So Compensation" }
          ],
          "actionGateway": [
            { "key": 0, "label": "None" },
            { "key": 1, "label": "Buy" },
            { "key": 2, "label": "Sell" }
          ],
          "entryflags": [
            { "key": 0, "label": "In" },
            { "key": 1, "label": "Out" },
            { "key": 2, "label": "Reverse" },
            { "key": 3, "label": "Out By" }
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
