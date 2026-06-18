(function () {
  // PUT / DELETE /api/v5/profiles/101/rules/99 — returns affected row count (integer).
  return (data) => {
    return { status: 200, data: { data: 1, code: "0", message: "success" } };
  };
})();
