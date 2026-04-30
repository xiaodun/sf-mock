(function () {
  return (data) => {
    // POST /api/v5/mt5/account/info
    // body: { serverId, login }
    return {
      data: {
        data: {
          "login": 85003439,
          "name": "MY Admin Test, 741999",
          "group": "TESR_RISK_USD",
          "leverage": 100,
          "registration": 1700000000,
          "email": "test@example.com",
          "balance": 10000.00,
          "credit": 0.00,
          "comment": "mock account"
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
