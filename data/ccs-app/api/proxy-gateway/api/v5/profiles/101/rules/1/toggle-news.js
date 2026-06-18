(function () {
  // PATCH /api/v5/profiles/101/rules/1/toggle-news — returns the updated rule summary.
  // Mock is stateless: it simply flips rule 1's seed isNews (false) to true.
  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          id: 1,
          rule: "EU Session Cap",
          enabled: true,
          scheduled: true,
          isNews: true,
          sortOrder: 1,
          createdAt: "2026-01-10T08:00:00Z",
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
