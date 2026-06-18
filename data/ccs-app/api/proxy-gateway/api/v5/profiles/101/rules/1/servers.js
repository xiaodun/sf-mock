(function () {
  // GET /api/v5/profiles/101/rules/1/servers — RuleView right-hand detail.
  // Rule 1 "EU Session Cap": Fixed 1:200, one weekday window (Mon-Fri), two servers under one brand.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          time: [
            {
              id: 11,
              fromHours: 7,
              fromMinutes: 0,
              fromSeconds: 0,
              toHours: 16,
              toMinutes: 0,
              toSeconds: 0,
              days: [1, 2, 3, 4, 5],
              createdAt: "2026-01-10T08:00:00Z",
              profileRuleId: 1,
            },
          ],
          margin: {
            id: 101,
            levelType: 1,
            leverage: 200,
            multiplier: 0,
            levels: [],
            createdAt: "2026-01-10T08:00:00Z",
            profileRuleId: 1,
          },
          brandServers: [
            {
              brandName: "Alpha Markets",
              servers: [
                {
                  id: 1001,
                  serverId: 1,
                  serverName: "MT5-Alpha-Live",
                  groups: ["*"],
                  accounts: [],
                  symbolGroups: ["FX"],
                  symbols: [],
                  createdAt: "2026-01-10T08:00:00Z",
                },
                {
                  id: 1002,
                  serverId: 2,
                  serverName: "MT5-Alpha-Demo",
                  groups: ["demo\\*"],
                  accounts: [],
                  symbolGroups: ["FX", "Metals"],
                  symbols: [],
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
