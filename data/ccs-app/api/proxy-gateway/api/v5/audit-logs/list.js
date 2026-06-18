(function () {
  // Reproduces SUMMARY text overflow: long unbroken semicolon-delimited string
  // has no spaces so `whiteSpace: "pre-wrap"` alone cannot break the line.
  const longSummary =
    "Batch update\napi_cp_141;api_cp_6300;api_cp_977;api_cp_5486;api_cp_7191;api_cp_3585;api_cp_2229;api_cp_1388;api_cp_4448;api_cp_5581;api_cp_9053;api_cp_352;api_cp_6853;api_cp_4201;api_cp_8874;api_cp_3310;api_cp_7652;api_cp_1125;api_cp_9987;api_cp_2467";

  return (data) => {
    return {
      status: 200,
      data: {
        data: {
          totalCount: 3,
          items: [
            {
              id: 1001,
              server: "MT4_TEST_4",
              serverType: 1,
              serverTypeName: "MT4",
              module: 2,
              moduleName: "Group",
              target:
                "api_cp_141;api_cp_6300;api_cp_977;api_cp_5486;api_cp_7191",
              action: 2,
              actionName: "Update",
              actor: "colbie.yang@hytechc.com",
              changes: longSummary,
              date: "2026-05-28T06:09:00Z",
              items: [
                {
                  id: 10011,
                  fieldKey: "commissionMode",
                  field: "Commission Mode",
                  oldValue: "0",
                  newValue: "1",
                  target: "api_cp_141",
                  auditData: null,
                  changedObject: null,
                  targetType: null,
                  riskLevel: null,
                },
                {
                  id: 10012,
                  fieldKey: "commissionValue",
                  field: "Commission Value",
                  oldValue: "0.00",
                  newValue: "5.00",
                  target: "api_cp_141",
                  auditData: null,
                  changedObject: null,
                  targetType: null,
                  riskLevel: null,
                },
              ],
            },
            {
              id: 1002,
              server: "Global",
              serverType: 0,
              serverTypeName: "Global",
              module: 1,
              moduleName: "User",
              target: "test.user@example.com",
              action: 1,
              actionName: "Create",
              actor: "admin@hytechc.com",
              changes: "New user account created",
              date: "2026-05-28T08:43:00Z",
              items: [],
            },
            {
              id: 1003,
              server: "MT4_TEST_4",
              serverType: 1,
              serverTypeName: "MT4",
              module: 2,
              moduleName: "Group",
              target: "demo_group_usd",
              action: 3,
              actionName: "Delete",
              actor: "colbie.yang@hytechc.com",
              changes: "",
              date: "2026-05-28T09:15:00Z",
              items: [
                {
                  id: 10031,
                  fieldKey: "enable",
                  field: "Enable",
                  oldValue: true,
                  newValue: false,
                  target: null,
                  auditData: null,
                  changedObject: null,
                  targetType: null,
                  riskLevel: null,
                },
              ],
            },
          ],
        },
        code: "0",
        message: "success",
      },
    };
  };
})();
