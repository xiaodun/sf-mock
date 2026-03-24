(function () {
  return (data) => {
    // POST — export groups to Excel
    // Note: real endpoint returns an xlsx blob (Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet)
    // Mock returns a JSON success stub; actual file download won't work in mock mode.
    return {
      "data": {
        "data": null,
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
