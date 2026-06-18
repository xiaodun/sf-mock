(function () {
  // PUT /api/v5/profiles/101/rules/1 — update rule 1. Returns affected row count (integer).
  return (data) => {
    return { status: 200, data: { data: 1, code: "0", message: "success" } };
  };
})();
