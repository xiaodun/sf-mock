/**
 * Mock: GET /api/proxy-gateway/api/v5/permissions/me
 *
 * 字段说明：
 *   enable: true        → 直接有权限，无需审批
 *   enable: false       → 无直接权限
 *   triggerApprove: true  → 可发起审批申请（走审批流）
 *   triggerApprove: false → 无权限且不能发起审批
 *
 * ── Group 权限 (category: "Group") ────────────────────────────
 *   permissionId  1  → Approve for High    审批高风险变更
 *   permissionId  2  → Read                查看
 *   permissionId  3  → Create              创建
 *   permissionId  4  → Duplicate           复制
 *   permissionId  5  → Transfer New        转移（新建）
 *   permissionId  6  → Transfer Settings   转移（同步设置）
 *   permissionId  7  → Import              导入
 *   permissionId  8  → Export              导出
 *   permissionId  9  → Delete              删除
 *   permissionId 10  → Update Low          编辑低风险字段
 *   permissionId 11  → Update Medium       编辑中风险字段
 *   permissionId 12  → Update High         编辑高风险字段
 *   permissionId 32  → Approve for Medium  审批中风险变更
 *
 * ── Symbol 权限 (category: "Symbol") ──────────────────────────
 *   permissionId 13  → Approve for High    审批高风险变更
 *   permissionId 14  → Read                查看
 *   permissionId 15  → Create              创建
 *   permissionId 16  → Duplicate           复制
 *   permissionId 17  → Transfer New        转移（新建）
 *   permissionId 18  → Transfer Settings   转移（同步设置）
 *   permissionId 19  → Import              导入
 *   permissionId 20  → Export              导出
 *   permissionId 21  → Delete              删除
 *   permissionId 22  → Update Low          编辑低风险字段
 *   permissionId 23  → Update Medium       编辑中风险字段
 *   permissionId 24  → Update High         编辑高风险字段
 *   permissionId 31  → Move                移动（改变分组）
 *   permissionId 33  → Approve for Medium  审批中风险变更
 *
 * ── Security 权限 (category: "Security") ─────────────────────
 *   permissionId 26  → Read
 *   permissionId 27  → Export
 *   permissionId 28  → Update Low
 *   permissionId 29  → Update Medium
 *   permissionId 30  → Update High
 *   permissionId 34  → Approve for High
 *   permissionId 35  → Approve for Medium
 *
 * ── Order 权限 (category: "Order") ───────────────────────────
 *   permissionId 36  → Read
 *   permissionId 37  → Export
 *   permissionId 38  → Report
 *   permissionId 39  → Delete
 *   permissionId 40  → Restore
 *   permissionId 41  → Update Low
 *   permissionId 42  → Update Medium
 *   permissionId 43  → Update High
 *   permissionId 44  → Reopen
 *   permissionId 45  → To History
 *   permissionId 46  → Approve for Medium
 *   permissionId 47  → Approve for High
 *
 * ── 系统权限 (systemRolePermissions) ─────────────────────────
 *   permissionId 25  → CCP Management / Admin
 *
 * ── Plugin Hub - Plugin Library ───────────────────────────────
 *   permissionId 57  → Read
 *   permissionId 58  → Create
 *   permissionId 59  → Update
 *   permissionId 60  → Delete
 *   permissionId 61  → Download
 */
(function () {
  return (data) => {
    return {
      "data": {
        "data": {
          "serverPermissions": [
            {
              "serverId": 10001,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": true
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            },
            {
              "serverId": 10002,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": true
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            },
            {
              "serverId": 10014,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    { "permissionId": 2, "name": "Read", "enable": true },
                    { "permissionId": 3, "name": "Create", "enable": true },
                    { "permissionId": 4, "name": "Duplicate", "enable": true },
                    { "permissionId": 5, "name": "Transfer New", "enable": true },
                    { "permissionId": 6, "name": "Transfer Settings", "enable": true },
                    { "permissionId": 7, "name": "Import", "enable": true },
                    { "permissionId": 8, "name": "Export", "enable": true },
                    { "permissionId": 9, "name": "Delete", "enable": true, "triggerApprove": false },
                    { "permissionId": 10, "name": "Update Low", "enable": true },
                    { "permissionId": 11, "name": "Update Medium", "enable": true, "triggerApprove": false },
                    { "permissionId": 12, "name": "Update High", "enable": true, "triggerApprove": false },
                    { "permissionId": 32, "name": "Approve for Medium", "enable": true },
                    { "permissionId": 1, "name": "Approve for High", "enable": true }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    { "permissionId": 14, "name": "Read", "enable": true },
                    { "permissionId": 15, "name": "Create", "enable": true },
                    { "permissionId": 16, "name": "Duplicate", "enable": true },
                    { "permissionId": 17, "name": "Transfer New", "enable": true },
                    { "permissionId": 18, "name": "Transfer Settings", "enable": true },
                    { "permissionId": 19, "name": "Import", "enable": true },
                    { "permissionId": 20, "name": "Export", "enable": true },
                    { "permissionId": 21, "name": "Delete", "enable": true, "triggerApprove": false },
                    { "permissionId": 22, "name": "Update Low", "enable": true },
                    { "permissionId": 23, "name": "Update Medium", "enable": true, "triggerApprove": false },
                    { "permissionId": 24, "name": "Update High", "enable": true, "triggerApprove": false },
                    { "permissionId": 31, "name": "Move", "enable": true, "triggerApprove": false },
                    { "permissionId": 33, "name": "Approve for Medium", "enable": true },
                    { "permissionId": 13, "name": "Approve for High", "enable": true }
                  ]
                }
              ]
            },
            {
              "serverId": 10015,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    { "permissionId": 2, "name": "Read", "enable": true },
                    { "permissionId": 3, "name": "Create", "enable": true },
                    { "permissionId": 4, "name": "Duplicate", "enable": true },
                    { "permissionId": 5, "name": "Transfer New", "enable": true },
                    { "permissionId": 6, "name": "Transfer Settings", "enable": true },
                    { "permissionId": 7, "name": "Import", "enable": true },
                    { "permissionId": 8, "name": "Export", "enable": true },
                    { "permissionId": 9, "name": "Delete", "enable": true, "triggerApprove": false },
                    { "permissionId": 10, "name": "Update Low", "enable": true },
                    { "permissionId": 11, "name": "Update Medium", "enable": true, "triggerApprove": false },
                    { "permissionId": 12, "name": "Update High", "enable": true, "triggerApprove": false },
                    { "permissionId": 32, "name": "Approve for Medium", "enable": true },
                    { "permissionId": 1, "name": "Approve for High", "enable": true }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    { "permissionId": 14, "name": "Read", "enable": true },
                    { "permissionId": 15, "name": "Create", "enable": true },
                    { "permissionId": 16, "name": "Duplicate", "enable": true },
                    { "permissionId": 17, "name": "Transfer New", "enable": true },
                    { "permissionId": 18, "name": "Transfer Settings", "enable": true },
                    { "permissionId": 19, "name": "Import", "enable": true },
                    { "permissionId": 20, "name": "Export", "enable": true },
                    { "permissionId": 21, "name": "Delete", "enable": true, "triggerApprove": false },
                    { "permissionId": 22, "name": "Update Low", "enable": true },
                    { "permissionId": 23, "name": "Update Medium", "enable": true, "triggerApprove": false },
                    { "permissionId": 24, "name": "Update High", "enable": true, "triggerApprove": false },
                    { "permissionId": 31, "name": "Move", "enable": true, "triggerApprove": false },
                    { "permissionId": 33, "name": "Approve for Medium", "enable": true },
                    { "permissionId": 13, "name": "Approve for High", "enable": true }
                  ]
                }
              ]
            },
            {
              "serverId": 10016,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    { "permissionId": 2, "name": "Read", "enable": true },
                    { "permissionId": 3, "name": "Create", "enable": true },
                    { "permissionId": 4, "name": "Duplicate", "enable": true },
                    { "permissionId": 5, "name": "Transfer New", "enable": true },
                    { "permissionId": 6, "name": "Transfer Settings", "enable": true },
                    { "permissionId": 7, "name": "Import", "enable": true },
                    { "permissionId": 8, "name": "Export", "enable": true },
                    { "permissionId": 9, "name": "Delete", "enable": true, "triggerApprove": false },
                    { "permissionId": 10, "name": "Update Low", "enable": true },
                    { "permissionId": 11, "name": "Update Medium", "enable": true, "triggerApprove": false },
                    { "permissionId": 12, "name": "Update High", "enable": true, "triggerApprove": false },
                    { "permissionId": 32, "name": "Approve for Medium", "enable": true },
                    { "permissionId": 1, "name": "Approve for High", "enable": true }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    { "permissionId": 14, "name": "Read", "enable": true },
                    { "permissionId": 15, "name": "Create", "enable": true },
                    { "permissionId": 16, "name": "Duplicate", "enable": true },
                    { "permissionId": 17, "name": "Transfer New", "enable": true },
                    { "permissionId": 18, "name": "Transfer Settings", "enable": true },
                    { "permissionId": 19, "name": "Import", "enable": true },
                    { "permissionId": 20, "name": "Export", "enable": true },
                    { "permissionId": 21, "name": "Delete", "enable": true, "triggerApprove": false },
                    { "permissionId": 22, "name": "Update Low", "enable": true },
                    { "permissionId": 23, "name": "Update Medium", "enable": true, "triggerApprove": false },
                    { "permissionId": 24, "name": "Update High", "enable": true, "triggerApprove": false },
                    { "permissionId": 31, "name": "Move", "enable": true, "triggerApprove": false },
                    { "permissionId": 33, "name": "Approve for Medium", "enable": true },
                    { "permissionId": 13, "name": "Approve for High", "enable": true }
                  ]
                }
              ]
            },
            {
              "serverId": 10004,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": true
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            },
            {
              "serverId": 20001,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": true
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            },
            {
              "serverId": 20003,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": true
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            },
            {
              "serverId": 20002,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": true
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            },
            {
              "serverId": 10003,
              "roleId": 73,
              "roleName": "Management",
              "rolePermissions": [
                {
                  "category": "Group",
                  "permissions": [
                    {
                      "permissionId": 2,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 3,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 4,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 5,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 6,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 7,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 8,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 9,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 10,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 11,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 12,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 32,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 1,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Symbol",
                  "permissions": [
                    {
                      "permissionId": 14,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 15,
                      "name": "Create",
                      "enable": true
                    },
                    {
                      "permissionId": 16,
                      "name": "Duplicate",
                      "enable": true
                    },
                    {
                      "permissionId": 17,
                      "name": "Transfer New",
                      "enable": true
                    },
                    {
                      "permissionId": 18,
                      "name": "Transfer Settings",
                      "enable": true
                    },
                    {
                      "permissionId": 19,
                      "name": "Import",
                      "enable": true
                    },
                    {
                      "permissionId": 20,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 21,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 22,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 23,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 24,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 31,
                      "name": "Move",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 33,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 13,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Security",
                  "permissions": [
                    {
                      "permissionId": 26,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 27,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 28,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 29,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 30,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 35,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 34,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                },
                {
                  "category": "Order",
                  "permissions": [
                    {
                      "permissionId": 36,
                      "name": "Read",
                      "enable": true
                    },
                    {
                      "permissionId": 37,
                      "name": "Export",
                      "enable": true
                    },
                    {
                      "permissionId": 38,
                      "name": "Report",
                      "enable": true
                    },
                    {
                      "permissionId": 39,
                      "name": "Delete",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 40,
                      "name": "Restore",
                      "enable": true
                    },
                    {
                      "permissionId": 41,
                      "name": "Update Low",
                      "enable": true
                    },
                    {
                      "permissionId": 42,
                      "name": "Update Medium",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 43,
                      "name": "Update High",
                      "enable": true,
                      "triggerApprove": false
                    },
                    {
                      "permissionId": 44,
                      "name": "Reopen",
                      "enable": true
                    },
                    {
                      "permissionId": 45,
                      "name": "To History",
                      "enable": true
                    },
                    {
                      "permissionId": 46,
                      "name": "Approve for Medium",
                      "enable": true
                    },
                    {
                      "permissionId": 47,
                      "name": "Approve for High",
                      "enable": true
                    }
                  ]
                }
              ]
            }
          ],
          "systemRolePermissions": [
            {
              "category": "CCPManagement",
              "permissions": [
                {
                  "permissionId": 25,
                  "name": "Admin",
                  "enable": true
                }
              ]
            },
            {
              "category": "PluginLibrary",
              "permissions": [
                { "permissionId": 57, "name": "Read", "enable": true },
                { "permissionId": 58, "name": "Create", "enable": true },
                { "permissionId": 59, "name": "Update", "enable": true },
                { "permissionId": 60, "name": "Delete", "enable": true },
                { "permissionId": 61, "name": "Download", "enable": true }
              ]
            },
            {
              "category": "PluginServerOverview",
              "permissions": [
                { "permissionId": 106, "name": "Read", "enable": true },
                { "permissionId": 107, "name": "Create", "enable": true },
                { "permissionId": 108, "name": "Update", "enable": true },
                { "permissionId": 109, "name": "Delete", "enable": true }
              ]
            },
            {
              "category": "PluginConfigManager",
              "permissions": [
                { "permissionId": 110, "name": "Read", "enable": true },
                { "permissionId": 111, "name": "Create", "enable": false },
                { "permissionId": 112, "name": "Update", "enable": false },
                { "permissionId": 113, "name": "Delete", "enable": false }
              ]
            },
            {
              "category": "PluginPriorityManagement",
              "permissions": [
                { "permissionId": 114, "name": "Read", "enable": true },
                { "permissionId": 115, "name": "Update", "enable": true }
              ]
            }
          ]
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": {
        "expiresAt": 1774668192335,
        "isValid": true
      }
    };
  };
})();
