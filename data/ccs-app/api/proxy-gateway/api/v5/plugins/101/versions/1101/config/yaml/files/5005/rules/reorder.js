(function () {
  return (data) => {
    return { __httpStatus: 400, message: "Rule name already exists", errorDescription: "Duplicate rule name" };
  };
})();
