(function () {
  return (data) => {
    // DELETE — batch delete response
    // Note: sf-mock does not parse DELETE request bodies, so data.body is always undefined.
    // We rely on groupNames from the body when available (POST/PUT), otherwise return
    // isAllSuccess: true without details — the dialog's else-branch handles this correctly.
    const groupNames = data && data.body && data.body.groupNames;

    if (groupNames && groupNames.length > 0) {
      return {
        "data": {
          "data": {
            "isAllSuccess": true,
            "totalCount": groupNames.length,
            "sucessCount": groupNames.length,
            "failedCount": 0,
            "details": groupNames.map((name) => ({
              "identifier": name,
              "success": true,
              "message": "success"
            }))
          },
          "code": "0",
          "message": "success"
        },
        "status": 200,
        "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
      };
    }

    // Fallback: body not available (DELETE request), return isAllSuccess without details
    return {
      "data": {
        "data": {
          "isAllSuccess": true,
          "totalCount": 1,
          "sucessCount": 1,
          "failedCount": 0
        },
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
