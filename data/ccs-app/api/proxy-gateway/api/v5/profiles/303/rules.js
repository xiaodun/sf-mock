(function () {
  // GET  /api/v5/profiles/303/rules — MT4 Standard Profile rule list (50+ rules).
  // POST /api/v5/profiles/303/rules — create a rule.

  var ruleNames = [
    "MT4 Standard Leverage", "MT4 News Event Restriction", "EU Session Cap",
    "US Session Open", "Asian Session Limit", "NFP Freeze", "FOMC Restriction",
    "ECB Rate Decision", "Gold Volatility Cap", "Crypto Weekend Lock",
    "High Equity Reduction", "Low Equity Boost", "VIP Client Override",
    "Scalper Detection", "Hedging Margin Adj", "Overnight Swap Buffer",
    "Market Close Buffer", "Weekend Gap Protection", "Flash Crash Guard",
    "Liquidity Drought Cap", "Spreads Widening Adj", "Stop-Out Prevention",
    "Major Pairs Standard", "Minor Pairs Reduced", "Exotic Pairs Cap",
    "Index CFD Limit", "Commodity Cap", "Energy Sector Adj",
    "Shares CFD Limit", "Bond CFD Margin", "ETF Margin Rule",
    "Morning Session AU", "London Open Boost", "NY Crossover Cap",
    "Tokyo Fix Window", "SNB Event Guard", "BOJ Decision Lock",
    "RBA Rate Cap", "RBNZ Announcement", "Fed Minutes Freeze",
    "Earnings Season Adj", "Dividend Ex-Date Lock", "Rollover Period Cap",
    "Quarter End Squeeze", "Year End Reduction", "Holiday Thin Market",
    "Black Friday Cap", "Christmas Restriction", "New Year Lock",
    "Custom Client Rule A", "Custom Client Rule B", "Custom Client Rule C",
  ];

  var rules = [];
  for (var i = 0; i < ruleNames.length; i++) {
    var lt = i % 5 === 0 ? 2 : 1;
    rules.push({
      id: i + 1,
      rule: ruleNames[i],
      enabled: i % 3 !== 2,
      scheduled: i % 2 === 0,
      isNews: i % 7 === 1,
      sortOrder: i + 1,
      levelType: lt,
      leverage: lt === 1 ? [100, 200, 300, 500, 1000][i % 5] : 0,
      multiplier: lt === 1 && i % 4 === 3 ? 5 : 0,
      createdAt: "2026-03-" + String(15 + (i % 15)).padStart(2, "0") + "T10:30:00Z",
    });
  }

  return (data) => {
    if (data.req.method.toLowerCase() === "post") {
      return { status: 200, data: { data: 99, code: "0", message: "success" } };
    }
    return {
      status: 200,
      data: {
        data: rules,
        code: "0",
        message: "success",
      },
    };
  };
})();
