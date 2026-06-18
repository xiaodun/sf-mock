(function () {
  // PATCH /api/v5/profiles/303/rules/1/toggle-news
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          id: 1,
          rule: "MT4 Standard Leverage",
          enabled: true,
          scheduled: true,
          isNews: true,
          sortOrder: 1,
          levelType: 1,
          leverage: 500,
          multiplier: 0,
          createdAt: "2026-03-15T10:30:00Z",
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
