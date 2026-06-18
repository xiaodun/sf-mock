(function () {
  // PUT /api/v5/profiles/101/rules/reorder — reorder rules by ordered ruleIds.
  // Echoes back the rule summaries in the requested order with recomputed sortOrder.
  const CATALOG = {
    1: { id: 1, rule: "EU Session Cap", enabled: true, scheduled: true, isNews: false },
    3: { id: 3, rule: "NFP News Freeze", enabled: false, scheduled: true, isNews: true },
    5: { id: 5, rule: "Equity Tiered Leverage", enabled: true, scheduled: false, isNews: false },
    99: { id: 99, rule: "New Rule", enabled: true, scheduled: false, isNews: false },
  };
  return (data) => {
    const ruleIds = (data.params && data.params.ruleIds) || [1, 3, 5];
    const ordered = ruleIds
      .map((id, index) => {
        const base = CATALOG[id];
        if (!base) return null;
        return { ...base, sortOrder: index + 1, createdAt: "2026-01-10T08:00:00Z" };
      })
      .filter(Boolean);
    return { status: 200, data: { data: ordered, code: "0", message: "success" } };
  };
})();
