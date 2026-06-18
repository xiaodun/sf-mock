(function () {
  // PATCH /api/v5/profiles/101/rules/3/toggle-news — returns the updated rule summary.
  // Mock is stateless: it flips rule 3's seed isNews (true) to false.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          id: 3,
          rule: "NFP News Freeze",
          enabled: false,
          scheduled: true,
          isNews: false,
          sortOrder: 2,
          createdAt: "2026-01-10T08:00:00Z",
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
