(function () {
  // GET  /api/v5/profiles/202/rules — "High Risk Profile" rule list.
  // POST /api/v5/profiles/202/rules — create a rule.
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
            rule: "High Risk Leverage Cap",
            enabled: true,
            scheduled: false,
            isNews: false,
            sortOrder: 1,
            levelType: 1,
            leverage: 50,
            multiplier: 0,
            createdAt: "2026-02-01T08:00:00Z",
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
