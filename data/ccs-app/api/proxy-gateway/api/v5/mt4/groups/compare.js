(function () {
  return (data) => {
    // POST — compare response: field change logs + approval info
    return {
      "data": {
        "data": {
          "logs": [
            {
              "fieldKey": "mt4_group_common_defaultLeverage",
              "field": "Default Leverage",
              "oldValue": "200",
              "newValue": "400",
              "target": "manager",
              "auditData": null,
              "changedObject": null,
              "targetType": null
            },
            {
              "fieldKey": "mt4_group_margin_marginCall",
              "field": "Margin Call",
              "oldValue": "80",
              "newValue": "100",
              "target": "manager",
              "auditData": null,
              "changedObject": null,
              "targetType": null
            }
          ],
          "needApproval": false,
          "impliedLevel": 2
        },
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
