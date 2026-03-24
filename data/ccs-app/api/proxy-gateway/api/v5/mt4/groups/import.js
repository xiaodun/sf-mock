(function () {
  return (data) => {
    // POST multipart/form-data — returns ImportResponse
    // rowNumber is now on each fieldError (not on ImportDetail)
    return {
      "data": {
        "data": {
          "totalCount": 3,
          "sucessCount": 2,
          "failedCount": 1,
          "details": [
            {
              "groupName": "R_STD_USD_NEW",
              "isSuccess": true,
              "fieldErrors": []
            },
            {
              "groupName": "R_ECN_USD_NEW",
              "isSuccess": true,
              "fieldErrors": []
            },
            {
              "groupName": "R_BAD_GROUP",
              "isSuccess": false,
              "fieldErrors": [
                {
                  "sheetName": "Common",
                  "rowNumber": 4,
                  "address": "B4",
                  "fieldName": "currency",
                  "message": "Invalid currency code: XXX"
                },
                {
                  "sheetName": "Margin",
                  "rowNumber": 4,
                  "address": "D4",
                  "fieldName": "marginCall",
                  "message": "Value must be between 0 and 100"
                }
              ]
            }
          ]
        },
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
