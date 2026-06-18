(function () {
  // PUT /api/v5/profiles/303/rules/1 — update rule.
  // DELETE /api/v5/profiles/303/rules/1 — delete rule.
  return (data) => {
    if (data.method === "DELETE") {
      return { status: 200, data: { data: null, code: "0", message: "success" } };
    }
    return { status: 200, data: { data: 1, code: "0", message: "success" } };
  };
})();
