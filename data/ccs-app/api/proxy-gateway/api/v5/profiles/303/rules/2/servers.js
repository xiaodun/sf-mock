(function () {
  // GET /api/v5/profiles/303/rules/2/servers — "MT4 News Event Restriction" detail.
  // Equity-based, assigned to 2 servers.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          time: [
            {
              id: 311,
              fromHours: 12,
              fromMinutes: 30,
              fromSeconds: 0,
              toHours: 14,
              toMinutes: 0,
              toSeconds: 0,
              days: [3, 5],
              createdAt: "2026-03-16T14:00:00Z",
              profileRuleId: 2,
            },
          ],
          margin: {
            id: 302,
            levelType: 2,
            leverage: 0,
            multiplier: 0,
            levels: [
              { id: 3021, from: 0, to: 5000, value: 200, scalingType: 1, profileRuleMarginId: 302 },
              { id: 3022, from: 5000, to: 20000, value: 100, scalingType: 1, profileRuleMarginId: 302 },
              { id: 3023, from: 20000, to: "Infinity", value: 50, scalingType: 1, profileRuleMarginId: 302 },
            ],
            createdAt: "2026-03-16T14:00:00Z",
            profileRuleId: 2,
          },
          brandServers: [
            {
              brandName: "Delta FX",
              servers: [
                {
                  id: 3010,
                  serverId: 10,
                  serverName: "MT4-Delta-Live",
                  groups: ["Default*"],
                  accounts: [],
                  symbolGroups: ["Forex*"],
                  symbols: ["EURUSD", "USDJPY"],
                  createdAt: "2026-03-16T14:00:00Z",
                },
                {
                  id: 3011,
                  serverId: 12,
                  serverName: "MT4-Delta-ECN",
                  groups: ["ECN*"],
                  accounts: [],
                  symbolGroups: ["Forex*"],
                  symbols: ["EURUSD"],
                  createdAt: "2026-03-16T14:00:00Z",
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
