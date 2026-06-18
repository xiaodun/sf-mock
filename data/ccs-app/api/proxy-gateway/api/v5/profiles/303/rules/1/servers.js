(function () {
  // GET /api/v5/profiles/303/rules/1/servers — "MT4 Standard Leverage" detail.
  // 120 servers across 20 brands to stress-test the Server Assignment table.
  var brandNames = [
    "Alpha Markets", "Beta Brokers", "Gamma Trading", "Delta FX", "Epsilon Markets",
    "Zeta Capital", "Eta Finance", "Theta Investments", "Iota Securities", "Kappa Wealth",
    "Lambda Holdings", "Mu Partners", "Nu Global", "Xi Trading", "Omicron FX",
    "Pi Brokers", "Rho Capital", "Sigma Markets", "Tau Finance", "Upsilon Trading",
  ];
  var groupOptions = ["Default*", "VIP*", "ECN*", "Pro*", "Demo*", "Premium*", "Standard*", "Micro*"];
  var symbolGroupOptions = ["Forex*", "Metals*", "Indices*", "Crypto*", "Energy*", "Shares*"];
  var symbolOptions = ["EURUSD", "GBPUSD", "USDJPY", "AUDUSD", "NZDUSD", "XAUUSD", "XAGUSD", "BTCUSD", "ETHUSD", "US30"];

  var brandServers = [];
  var serverId = 100;
  var entryId = 5000;

  for (var b = 0; b < brandNames.length; b++) {
    var serversPerBrand = (b % 3 === 0) ? 8 : (b % 3 === 1) ? 6 : 5;
    var servers = [];
    for (var s = 0; s < serversPerBrand; s++) {
      var suffix = s === 0 ? "Live" : s === 1 ? "Demo" : s === 2 ? "ECN" : s === 3 ? "Pro" : "Node-" + s;
      var grpCount = 1 + (serverId % 4);
      var sgCount = 1 + (serverId % 3);
      var symCount = (serverId % 5);
      var groups = [];
      for (var g = 0; g < grpCount; g++) groups.push(groupOptions[(serverId + g) % groupOptions.length]);
      var symbolGroups = [];
      for (var sg = 0; sg < sgCount; sg++) symbolGroups.push(symbolGroupOptions[(serverId + sg) % symbolGroupOptions.length]);
      var symbols = [];
      for (var sy = 0; sy < symCount; sy++) symbols.push(symbolOptions[(serverId + sy) % symbolOptions.length]);

      servers.push({
        id: entryId++,
        serverId: serverId,
        serverName: "MT4-" + brandNames[b].split(" ")[0] + "-" + suffix,
        groups: groups,
        accounts: (serverId % 7 === 0) ? [serverId * 100 + 1, serverId * 100 + 2] : [],
        symbolGroups: symbolGroups,
        symbols: symbols,
        createdAt: "2026-03-15T10:30:00Z",
      });
      serverId++;
    }
    brandServers.push({ brandName: brandNames[b], servers: servers });
  }

  // Generate 15 time windows and 20 equity tiers programmatically
  var timeWindows = [];
  var twId = 301;
  var slots = [
    { fh: 0, fm: 0, th: 2, tm: 0, days: [1,2,3,4,5,6,7] },
    { fh: 2, fm: 30, th: 4, tm: 30, days: [1,2,3,4,5] },
    { fh: 5, fm: 0, th: 7, tm: 0, days: [1,3,5] },
    { fh: 7, fm: 0, th: 9, tm: 30, days: [1,2,3,4,5] },
    { fh: 9, fm: 30, th: 12, tm: 0, days: [1,2,3,4,5] },
    { fh: 12, fm: 0, th: 13, tm: 30, days: [1,2,3,4,5] },
    { fh: 13, fm: 30, th: 16, tm: 0, days: [1,2,3,4,5] },
    { fh: 16, fm: 0, th: 18, tm: 0, days: [1,2,3] },
    { fh: 18, fm: 0, th: 20, tm: 0, days: [1,2,3,4] },
    { fh: 20, fm: 0, th: 22, tm: 0, days: [1,2,3,4,5] },
    { fh: 22, fm: 0, th: 23, tm: 59, days: [4,5] },
    { fh: 8, fm: 0, th: 12, tm: 0, days: [6,7] },
    { fh: 14, fm: 0, th: 18, tm: 0, days: [6,7] },
    { fh: 19, fm: 0, th: 23, tm: 0, days: [6] },
    { fh: 6, fm: 0, th: 10, tm: 0, days: [7] },
  ];
  for (var t = 0; t < slots.length; t++) {
    timeWindows.push({
      id: twId++,
      fromHours: slots[t].fh,
      fromMinutes: slots[t].fm,
      fromSeconds: 0,
      toHours: slots[t].th,
      toMinutes: slots[t].tm,
      toSeconds: 0,
      days: slots[t].days,
      createdAt: "2026-03-15T10:30:00Z",
      profileRuleId: 1,
    });
  }

  var equityLevels = [];
  var boundaries = [0, 500, 1000, 2000, 3000, 5000, 7500, 10000, 15000, 25000, 35000, 50000, 75000, 100000, 150000, 250000, 500000, 750000, 1000000, 2000000];
  var leverages = [3000, 2000, 1500, 1200, 1000, 800, 600, 500, 400, 300, 250, 200, 150, 100, 75, 50, 40, 30, 25, 20];
  for (var l = 0; l < boundaries.length; l++) {
    equityLevels.push({
      id: 3011 + l,
      from: boundaries[l],
      to: l < boundaries.length - 1 ? boundaries[l + 1] : "Infinity",
      value: leverages[l],
      scalingType: 1,
      profileRuleMarginId: 301,
    });
  }

  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          time: timeWindows,
          margin: {
            id: 301,
            levelType: 2,
            leverage: 0,
            multiplier: 0,
            levels: equityLevels,
            createdAt: "2026-03-15T10:30:00Z",
            profileRuleId: 1,
          },
          brandServers: brandServers,
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
