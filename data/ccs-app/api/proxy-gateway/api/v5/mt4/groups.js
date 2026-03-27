(function () {
  return (data) => {
    // POST (create) / PUT (update) — return success
    // 注意: 要测试 412，在 ccs-app-mock-api.js 里取消注释:
    //   response: { statusCode: 412 }  // [412-TEST]
    // 那样 sf-mock 会在路由层直接返回 HTTP 412，不会走到这里
    if (data && (data.method === "POST" || data.method === "PUT")) {
      return {
        "data": {
          "data": null,
          "code": "0",
          "message": "success"
        },
        "status": 200,
        "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
      };
    }

    // GET — return group list (IMT4GroupListItem[])
    return {
      "data": {
        "data": [
          {
            "name": "manager",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "0 / 0 %",
            "securities": "Forex, Gold, Silver, Oil, Crypto.w, Mini Gold",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "M_GFT_USD",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "100 / 50 %",
            "securities": "Forex Major, Gold, Silver, Oil.w, Crypto.w, Mini Gold",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "R_STD_USD",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "80 / 50 %",
            "securities": "Forex, Gold, Silver, Commodities",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "R_ECN_USD",
            "company": "VantageFX Pty Ltd.",
            "marginInfo": "80 / 50 %",
            "securities": "Forex, Gold, Silver, Commodities, Crypto.w",
            "enable": true,
            "existsPendingApproval": true
          },
          {
            "name": "R_REBATEMM_USD",
            "company": "MyFX Markets PTY Ltd.",
            "marginInfo": "0 / 0 %",
            "securities": "US Equity CFDs",
            "enable": false,
            "existsPendingApproval": false
          },
          {
            "name": "J_ENF_AUD",
            "company": "VantageFX Pty Ltd.",
            "marginInfo": "0 / 0 %",
            "securities": "",
            "enable": false,
            "existsPendingApproval": false
          },
          {
            "name": "coverage",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "80 / 51 %",
            "securities": "Forex Major, Gold, Silver, Mini Gold",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "system",
            "company": "VantageFX Pty Ltd.",
            "marginInfo": "80 / 50 %",
            "securities": "Forex, Gold, Silver, Crypto.w",
            "enable": true,
            "existsPendingApproval": false
          }
        ],
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
