(function () {
  // [412-TEST] Counter — first PUT/POST returns 412, second returns 200
  // Reset by reloading sf-mock. Set to 0 to disable 412 simulation.
  let _mutationCount = 0;

  return (data) => {
    const method = (data.method || "GET").toUpperCase();

    // [412-TEST] Simulate RSA key expired: first write returns 412, retry returns 200
    if (method === "PUT" || method === "POST") {
      _mutationCount++;
      console.log(`[412-TEST] groups ${method} call #${_mutationCount}`);
      if (_mutationCount === 1) {
        console.log("[412-TEST] returning 412");
        return { statusCode: 412, data: { message: "RSA key expired" } };
      }
      console.log("[412-TEST] returning 200 (retry succeeded)");
      _mutationCount = 0; // reset for next test
      return { data: { data: null, message: "success" } };
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
          },
          {
            "name": "M_VIG_01_USD",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "100 / 50 %",
            "securities": "Forex, Gold, Silver, Oil",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "M_VIG_02_USD",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "100 / 50 %",
            "securities": "Forex, Gold, Silver, Oil",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "M_VIG_03_USD",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "80 / 50 %",
            "securities": "Forex Major, Gold",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "M_PREM_01_USD",
            "company": "VantageFX Pty Ltd.",
            "marginInfo": "80 / 50 %",
            "securities": "Forex, Gold, Silver",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "M_PREM_02_USD",
            "company": "VantageFX Pty Ltd.",
            "marginInfo": "80 / 50 %",
            "securities": "Forex, Gold",
            "enable": true,
            "existsPendingApproval": false
          },
          {
            "name": "M_CRYPTO_01",
            "company": "Vantage Global Prime Pty Ltd",
            "marginInfo": "50 / 50 %",
            "securities": "Crypto",
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
