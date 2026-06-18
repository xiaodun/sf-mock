(function () {
  // PUT /api/v5/profiles/303/rules/reorder — returns re-ordered list.
  return (data) => {
    return {
      status: 200,
      data: {
        data: [
          {
            id: 2,
            rule: "MT4 News Event Restriction",
            enabled: true,
            scheduled: false,
            isNews: true,
            sortOrder: 1,
            levelType: 2,
            leverage: 0,
            multiplier: 0,
            createdAt: "2026-03-16T14:00:00Z",
          },
          {
            id: 1,
            rule: "MT4 Standard Leverage",
            enabled: true,
            scheduled: true,
            isNews: false,
            sortOrder: 2,
            levelType: 1,
            leverage: 500,
            multiplier: 0,
            createdAt: "2026-03-15T10:30:00Z",
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
