(function () {
  // PUT /api/v5/profiles/101/rules/5 — update rule 5. Returns affected row count (integer).
  return (data) => {
    return { status: 200, data: { data: 1, code: "0", message: "success" } };
  };
})();
