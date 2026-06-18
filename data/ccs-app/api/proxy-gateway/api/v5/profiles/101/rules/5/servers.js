(function () {
  // GET /api/v5/profiles/101/rules/5/servers — RuleView right-hand detail.
  // Rule 5 "Equity Tiered Leverage": Equity tiers (last tier unbounded via to="Infinity"),
  // one weekend window (Sat+Sun), servers spread across two brands with differing filters.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          time: [
            {
              id: 51,
              fromHours: 0,
              fromMinutes: 0,
              fromSeconds: 0,
              toHours: 23,
              toMinutes: 59,
              toSeconds: 0,
              days: [6, 7],
              createdAt: "2026-01-10T08:00:00Z",
              profileRuleId: 5,
            },
          ],
          margin: {
            id: 105,
            levelType: 2,
            leverage: 0,
            multiplier: 0,
            levels: [
              {
                id: 1051,
                from: 0,
                to: 10000,
                value: 500,
                scalingType: 1,
                profileRuleMarginId: 105,
              },
              {
                id: 1052,
                from: 10000,
                to: 100000,
                value: 200,
                scalingType: 1,
                profileRuleMarginId: 105,
              },
              {
                id: 1053,
                from: 100000,
                to: "Infinity",
                value: 50,
                scalingType: 1,
                profileRuleMarginId: 105,
              },
            ],
            createdAt: "2026-01-10T08:00:00Z",
            profileRuleId: 5,
          },
          brandServers: [
            {
              brandName: "Alpha Markets",
              servers: [
                {
                  id: 1005,
                  serverId: 1,
                  serverName: "MT5-Alpha-Live",
                  groups: ["*"],
                  accounts: [],
                  symbolGroups: ["Forex*", "Metals*"],
                  symbols: [],
                  createdAt: "2026-01-10T08:00:00Z",
                },
              ],
            },
            {
              brandName: "Beta Brokers",
              servers: [
                {
                  id: 1006,
                  serverId: 3,
                  serverName: "MT5-Beta-Live",
                  groups: ["vip\\*"],
                  accounts: [700001],
                  symbolGroups: ["Crypto"],
                  symbols: ["BTCUSD", "ETHUSD"],
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
