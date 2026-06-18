(function () {
  // PUT /api/v5/profiles/303/rules/2 — update rule.
  // DELETE /api/v5/profiles/303/rules/2 — delete rule.
  return (data) => {
    if (data.method === "DELETE") {
      return { status: 200, data: { data: null, code: "0", message: "success" } };
    }
    return { status: 200, data: { data: 2, code: "0", message: "success" } };
  };
})();
