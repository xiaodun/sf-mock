(function () {
  // PUT /api/v5/profiles/101/rules/3 — update rule 3. Returns affected row count (integer).
  return (data) => {
    return { status: 200, data: { data: 1, code: "0", message: "success" } };
  };
})();
