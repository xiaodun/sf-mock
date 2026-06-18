(function () {
  // GET /api/v5/profiles/yaml-file-rules/1
  // Backend parses the YAML file and returns rules in IProfileRuleDto[] shape.
  return (data) => {
    return {
      status: 200,
      data: {
        data: [
          {
            rule: "Imported Rule - Session Cap",
            enabled: true,
            scheduled: true,
            isNews: false,
            sortOrder: 1,
            margin: { levelType: 1, leverage: 100, multiplier: 0, levels: [] },
            time: [
              {
                fromHours: 8, fromMinutes: 0, fromSeconds: 0,
                toHours: 17, toMinutes: 0, toSeconds: 0,
                days: [1, 2, 3, 4, 5],
              },
            ],
            servers: [
              {
                serverId: 1,
                groups: ["*"],
                accounts: [],
                symbolGroups: ["Forex*"],
                symbols: [],
              },
            ],
          },
          {
            rule: "Imported Rule - Weekend Restriction",
            enabled: true,
            scheduled: true,
            isNews: false,
            sortOrder: 2,
            margin: { levelType: 1, leverage: 50, multiplier: 0, levels: [] },
            time: [
              {
                fromHours: 0, fromMinutes: 0, fromSeconds: 0,
                toHours: 23, toMinutes: 59, toSeconds: 0,
                days: [6, 7],
              },
            ],
            servers: [
              {
                serverId: 1,
                groups: ["*"],
                accounts: [],
                symbolGroups: ["*"],
                symbols: [],
              },
            ],
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
