(function () {
  // GET /api/v5/profiles?mtVersion=4|5 — list all profiles with a rule-count summary.
  // POST /api/v5/profiles — create a new profile.
  return (data) => {
    if (data.method === "POST") {
      return {
        status: 200,
        data: { data: 303, code: "0", message: "success" },
      };
    }
    return {
      status: 200,
      data: {
        data: [
          {
            id: 101,
            name: "Default DL Profile",
            ruleCount: 3,
            mtVersion: 5,
            isApplied: true,
            createdAt: "2026-01-10T08:00:00Z",
          },
          {
            id: 202,
            name: "High Risk Profile",
            ruleCount: 1,
            mtVersion: 5,
            isApplied: false,
            createdAt: "2026-02-01T08:00:00Z",
          },
          {
            id: 303,
            name: "MT4 Standard Profile",
            ruleCount: 2,
            mtVersion: 4,
            isApplied: false,
            createdAt: "2026-03-15T10:30:00Z",
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
