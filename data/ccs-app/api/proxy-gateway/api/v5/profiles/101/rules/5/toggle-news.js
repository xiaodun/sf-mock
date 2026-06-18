(function () {
  // PATCH /api/v5/profiles/101/rules/5/toggle-news — returns the updated rule summary.
  // Mock is stateless: it flips rule 5's seed isNews (false) to true.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          id: 5,
          rule: "Equity Tiered Leverage",
          enabled: true,
          scheduled: false,
          isNews: true,
          sortOrder: 3,
          createdAt: "2026-01-10T08:00:00Z",
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
