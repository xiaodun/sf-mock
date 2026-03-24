(function () {
  return (data) => {
    return {
      "data": {
        "data": {
          "groupName": "system",
          "serverName": "MT4_TPTEST",
          "common": {
            "name": "system",
            "otpMode": 0,
            "enable": true,
            "company": "VantageFX Pty Ltd.",
            "supportPage": "",
            "defaultLeverage": 1,
            "defaultDeposit": 0,
            "currency": "USD",
            "interestRate": 0,
            "allowFlagForcedOtpUsage": false
          },
          "permissions": {
            "timeout": 0,
            "news": 0,
            "newsLanguages": [],
            "maxPositions": 0,
            "maxSecurities": 0,
            "signal": 0,
            "email": false,
            "checkIePrices": false,
            "useSwap": true,
            "hedgeProhibited": false,
            "trailling": true,
            "closeFifo": false,
            "advisor": true,
            "closeReopen": true,
            "expiration": true,
            "riskWarning": false
          },
          "archive": {
            "archivePeriod": 90,
            "archiveMaxBalance": 0,
            "archivePendingPeriod": 0
          },
          "margin": {
            "credit": 0,
            "marginCall": 80,
            "marginMode": 0,
            "marginStopout": 50,
            "hedgeLargeLeg": false,
            "stopOutSkipHedged": false,
            "marginType": 0
          },
          "securities": [
            {
              "secName": "Forex",
              "show": 1,
              "trade": true,
              "ieQuickMode": false,
              "execution": 0,
              "spreadDiff": 0,
              "freeMarginMode": false,
              "ieDeviation": 0,
              "confirmation": false,
              "closeBy": true,
              "muCloseBy": true,
              "autoCloseOutMode": 0,
              "lotMin": 0.01,
              "lotMax": 500,
              "lotStep": 0.01,
              "commBase": 0,
              "commType": 0,
              "commLots": 0,
              "commTax": 0,
              "commAgent": 0,
              "commAgentType": 0,
              "commAgentLots": 0
            },
            {
              "secName": "Crypto.w",
              "show": 1,
              "trade": true,
              "ieQuickMode": false,
              "execution": 1,
              "spreadDiff": 0,
              "freeMarginMode": false,
              "ieDeviation": 0,
              "confirmation": false,
              "closeBy": false,
              "muCloseBy": false,
              "autoCloseOutMode": 0,
              "lotMin": 0.01,
              "lotMax": 2,
              "lotStep": 0.01,
              "commBase": 0,
              "commType": 0,
              "commLots": 0,
              "commTax": 0,
              "commAgent": 0,
              "commAgentType": 0,
              "commAgentLots": 0
            }
          ],
          "symbols": [],
          "reports": {
            "reports": false,
            "smtpServer": "",
            "templates": "",
            "smtpLogin": "",
            "smtpPassword": "",
            "supportEmail": "",
            "copies": false,
            "signature": ""
          },
          "existsPendingApproval": false
        },
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
