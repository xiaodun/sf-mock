(function () {
  // GET /api/v5/profiles/101/preview-yaml?serverId=1
  // Returns generated YAML content as a string for preview in the ServerView Raw YAML panel.
  return (data) => {
    var yaml = [
      "# Dynamic Leverage Rules — Profile: Default DL Profile",
      "# Server: MT5-Alpha-Live (serverId: 1)",
      "# Generated: 2026-06-05T08:00:00Z",
      "",
      "rules:",
      "  - name: EU Session Cap",
      "    enabled: true",
      "    scheduled: true",
      "    margin:",
      "      type: fixed",
      "      leverage: 200",
      "    time_windows:",
      "      - from: '07:00'",
      "        to: '16:00'",
      "        days: [Mon, Tue, Wed, Thu, Fri]",
      "    filter:",
      "      groups: ['Default*', 'VIP*']",
      "      symbol_groups: ['Forex*']",
      "",
      "  - name: Equity Tiered Leverage",
      "    enabled: true",
      "    scheduled: true",
      "    margin:",
      "      type: equity",
      "      levels:",
      "        - from: 0",
      "          to: 10000",
      "          leverage: 500",
      "        - from: 10000",
      "          to: 100000",
      "          leverage: 200",
      "        - from: 100000",
      "          to: .inf",
      "          leverage: 50",
      "    time_windows:",
      "      - from: '00:00'",
      "        to: '23:59'",
      "        days: [Sat, Sun]",
      "    filter:",
      "      groups: ['*']",
      "      symbol_groups: ['Forex*', 'Metals*']",
    ].join("\n");

    return {
      status: 200,
      data: { data: yaml, code: "0", message: "success" },
    };
  };
})();
