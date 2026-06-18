(function () {
  // GET /api/v5/profiles/101 — full profile detail with materialized rules.
  // PUT /api/v5/profiles/101 — update profile (rename).
  // DELETE /api/v5/profiles/101 — delete profile.
  return (data) => {
    if (data.method === "DELETE") {
      return { status: 200, data: { data: 1, code: "0", message: "success" } };
    }
    if (data.method === "PUT") {
      return { status: 200, data: { data: 1, code: "0", message: "success" } };
    }
    // GET
    return {
      status: 200,
      data: {
        data: {
          id: 101,
          name: "Default DL Profile",
          mtVersion: 5,
          createdAt: "2026-01-10T08:00:00Z",
          rules: [
            {
              rule: "EU Session Cap",
              enabled: true,
              scheduled: true,
              isNews: false,
              sortOrder: 1,
              margin: { levelType: 1, leverage: 200, multiplier: 0, levels: [] },
              time: [
                {
                  fromHours: 7, fromMinutes: 0, fromSeconds: 0,
                  toHours: 16, toMinutes: 0, toSeconds: 0,
                  days: [1, 2, 3, 4, 5],
                },
              ],
              servers: [
                { serverId: 1, groups: ["Default*", "VIP*"], accounts: [], symbolGroups: ["Forex*"], symbols: [] },
                { serverId: 2, groups: ["Demo*"], accounts: [], symbolGroups: ["Forex*"], symbols: [] },
              ],
            },
            {
              rule: "NFP News Freeze",
              enabled: true,
              scheduled: false,
              isNews: true,
              sortOrder: 2,
              margin: { levelType: 1, leverage: 0, multiplier: 5, levels: [] },
              time: [],
              servers: [
                { serverId: 3, groups: ["managers*"], accounts: [500123, 500456], symbolGroups: ["Metals*"], symbols: ["XAUUSD"] },
              ],
            },
            {
              rule: "Equity Tiered Leverage",
              enabled: true,
              scheduled: true,
              isNews: false,
              sortOrder: 3,
              margin: {
                levelType: 2,
                leverage: 0,
                multiplier: 0,
                levels: [
                  { from: 0, to: 10000, value: 500, scalingType: 1 },
                  { from: 10000, to: 100000, value: 200, scalingType: 1 },
                  { from: 100000, to: "Infinity", value: 50, scalingType: 1 },
                ],
              },
              time: [
                {
                  fromHours: 0, fromMinutes: 0, fromSeconds: 0,
                  toHours: 23, toMinutes: 59, toSeconds: 0,
                  days: [6, 7],
                },
              ],
              servers: [
                { serverId: 1, groups: ["*"], accounts: [], symbolGroups: ["Forex*", "Metals*"], symbols: [] },
                { serverId: 3, groups: ["VIP*"], accounts: [600001, 600002], symbolGroups: ["*"], symbols: [] },
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
