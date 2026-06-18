(function () {
  // PATCH /api/v5/profiles/303/rules/2/toggle-news
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          id: 2,
          rule: "MT4 News Event Restriction",
          enabled: true,
          scheduled: false,
          isNews: false,
          sortOrder: 2,
          levelType: 2,
          leverage: 0,
          multiplier: 0,
          createdAt: "2026-03-16T14:00:00Z",
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
