(function () {
  // GET /api/v5/profiles/101/rules/99/servers — detail for a freshly-created rule.
  // Empty time/servers, default Fixed 1:100 margin so the editor opens cleanly.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          time: [],
          margin: {
            id: 199,
            levelType: 1,
            leverage: 100,
            multiplier: 0,
            levels: [],
            createdAt: "2026-06-01T00:00:00Z",
            profileRuleId: 99,
          },
          brandServers: [],
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
