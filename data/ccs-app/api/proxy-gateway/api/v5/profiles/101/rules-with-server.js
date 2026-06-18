(function () {
  // GET /api/v5/profiles/101/rules-with-server?serverId=1
  // ServerView "All Rules" mode — each rule carries its single-server assignment (or null).
  return (data) => {
    return {
      status: 200,
      data: {
        data: [
          {
            id: 1,
            rule: "EU Session Cap",
            enabled: true,
            scheduled: true,
            isNews: false,
            sortOrder: 1,
            createdAt: "2026-01-10T08:00:00Z",
            time: [
              {
                id: 10,
                fromHours: 7, fromMinutes: 0, fromSeconds: 0,
                toHours: 16, toMinutes: 0, toSeconds: 0,
                days: [1, 2, 3, 4, 5],
                profileRuleId: 1,
              },
            ],
            margin: {
              id: 10,
              levelType: 1,
              leverage: 200,
              multiplier: 0,
              levels: [],
              profileRuleId: 1,
            },
            server: {
              id: 100,
              serverId: 1,
              groups: ["Default*", "VIP*"],
              accounts: [],
              symbolGroups: ["Forex*"],
              symbols: [],
              createdAt: "2026-01-10T08:00:00Z",
            },
          },
          {
            id: 3,
            rule: "NFP News Freeze",
            enabled: true,
            scheduled: false,
            isNews: true,
            sortOrder: 2,
            createdAt: "2026-01-15T10:00:00Z",
            time: [],
            margin: {
              id: 11,
              levelType: 1,
              leverage: 0,
              multiplier: 5,
              levels: [],
              profileRuleId: 3,
            },
            server: null,
          },
          {
            id: 5,
            rule: "Equity Tiered Leverage",
            enabled: true,
            scheduled: true,
            isNews: false,
            sortOrder: 3,
            createdAt: "2026-01-20T12:00:00Z",
            time: [
              {
                id: 30,
                fromHours: 0, fromMinutes: 0, fromSeconds: 0,
                toHours: 23, toMinutes: 59, toSeconds: 0,
                days: [6, 7],
                profileRuleId: 5,
              },
            ],
            margin: {
              id: 12,
              levelType: 2,
              leverage: 0,
              multiplier: 0,
              levels: [
                { id: 1, from: 0, to: 10000, value: 500, scalingType: 1, profileRuleMarginId: 12 },
                { id: 2, from: 10000, to: 100000, value: 200, scalingType: 1, profileRuleMarginId: 12 },
                { id: 3, from: 100000, to: "Infinity", value: 50, scalingType: 1, profileRuleMarginId: 12 },
              ],
              profileRuleId: 5,
            },
            server: {
              id: 102,
              serverId: 1,
              groups: ["*"],
              accounts: [],
              symbolGroups: ["Forex*", "Metals*"],
              symbols: [],
              createdAt: "2026-01-20T12:00:00Z",
            },
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
