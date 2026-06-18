(function () {
  // GET  /api/v5/profiles/101/rules — flat rule list ordered by sortOrder (left-hand list).
  // POST /api/v5/profiles/101/rules — create a rule; returns the new rule id (integer).
  // Rule ids 1 / 3 / 5 align with the per-rule /servers mocks.
  return (data) => {
    if (data.req.method.toLowerCase() === "post") {
      return { status: 200, data: { data: 99, code: "0", message: "success" } };
    }
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
            levelType: 1,
            leverage: 200,
            multiplier: 0,
            createdAt: "2026-01-10T08:00:00Z",
          },
          {
            id: 3,
            rule: "NFP News Freeze",
            enabled: true,
            scheduled: false,
            isNews: true,
            sortOrder: 2,
            levelType: 1,
            leverage: 0,
            multiplier: 5,
            createdAt: "2026-01-15T10:00:00Z",
          },
          {
            id: 5,
            rule: "Equity Tiered Leverage",
            enabled: true,
            scheduled: true,
            isNews: false,
            sortOrder: 3,
            levelType: 2,
            leverage: 0,
            multiplier: 0,
            createdAt: "2026-01-20T12:00:00Z",
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
