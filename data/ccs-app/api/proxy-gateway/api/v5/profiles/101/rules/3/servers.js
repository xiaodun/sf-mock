(function () {
  // GET /api/v5/profiles/101/rules/3/servers — RuleView right-hand detail.
  // Rule 3 "NFP News Freeze": Fixed x5 multiplier, no time windows, one server with
  // specific accounts + a single symbol.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          time: [],
          margin: {
            id: 103,
            levelType: 1,
            leverage: 0,
            multiplier: 5,
            levels: [],
            createdAt: "2026-01-10T08:00:00Z",
            profileRuleId: 3,
          },
          brandServers: [
            {
              brandName: "Beta Brokers",
              servers: [
                {
                  id: 1003,
                  serverId: 3,
                  serverName: "MT5-Beta-Live",
                  groups: ["real\\*"],
                  accounts: [500123, 500456],
                  symbolGroups: ["*"],
                  symbols: ["XAUUSD"],
                  createdAt: "2026-01-10T08:00:00Z",
                },
              ],
            },
          ],
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
