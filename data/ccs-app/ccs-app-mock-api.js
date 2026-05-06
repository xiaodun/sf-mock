(function getApis() {
  return {
    "/api/proxy-gateway/api/v5/mt5/positions/99992103": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/99992101": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/99992104": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/99992102": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/99992100": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/ticket/orders": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/ticket/deals": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/ticket/position": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/ticket/resolve": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/deals/list": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/plugin-config/text/files/5003": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/plugin-config/text/files/5002": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/symbols/transfer": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/symbols/transfer": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/groups/transfer": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/roles/role-groups": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/roles": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/system/configs/import-limits": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/100014920": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/backups": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/common/enum/5/11": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/common/enum/5/10": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/securities": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/common/enum/5/8": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/3135800": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/3135021": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/deals/5975991": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/3135021": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/common/enum/0/101": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/3135679": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/account/info": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/deals/5976014": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/100014919": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/ticket/tree": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/network-server/trade-servers": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/backups": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/network-server/backup-servers": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/orders": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/symbol-folder": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/symbols": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/common/rsa-public-key": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/backups": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/to-history": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/list": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/positions/list": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/ticks/history": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/symbols": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/groups": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/groups/J_ENF_AUD": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/groups/coverage": {
      useDirMode: true,
    },

    // ─── MT4 Groups (v5) ────────────────────────────────────────────────────
    // GET list / POST create / PUT update
    // 切换 412 测试模式: 取消下面 response 行注释 → GET/PUT/POST 均返回 HTTP 412
    // 恢复正常: 注释掉 response 行，保留 useDirMode: true
    "/api/proxy-gateway/api/v5/mt4/groups": {
      useDirMode: true,
      // response: { statusCode: 412 }, // [412-TEST] 静态412已移至 groups.js 动态处理（第1次写返回412，第2次返回200）
    },

    // GET /api/v5/mt4/groups/companies
    "/api/proxy-gateway/api/v5/mt4/groups/companies": {
      useDirMode: true,
    },

    // GET /api/v5/mt4/groups/symbols
    "/api/proxy-gateway/api/v5/mt4/groups/symbols": {
      useDirMode: true,
    },

    // GET /api/v5/mt4/groups/default
    "/api/proxy-gateway/api/v5/mt4/groups/default": {
      useDirMode: true,
    },

    // POST /api/v5/mt4/groups/import  (multipart file upload)
    "/api/proxy-gateway/api/v5/mt4/groups/import": {
      useDirMode: true,
    },

    // POST /api/v5/mt4/groups/export  (returns xlsx blob — mock returns stub)
    "/api/proxy-gateway/api/v5/mt4/groups/export": {
      useDirMode: true,
    },

    // POST /api/v5/mt4/groups/duplicate
    "/api/proxy-gateway/api/v5/mt4/groups/duplicate": {
      useDirMode: true,
    },

    // DELETE /api/v5/mt4/groups/batch
    "/api/proxy-gateway/api/v5/mt4/groups/batch": {
      useDirMode: true,
    },

    // POST /api/v5/mt4/groups/transfer  (transfer new)
    // PUT  /api/v5/mt4/groups/transfer  (transfer settings)
    "/api/proxy-gateway/api/v5/mt4/groups/transfer": {
      useDirMode: true,
    },

    // POST /api/v5/mt4/groups/compare
    "/api/proxy-gateway/api/v5/mt4/groups/compare": {
      useDirMode: true,
    },

    // GET /api/v5/mt4/groups/{groupName}  — individual group detail files
    "/api/proxy-gateway/api/v5/mt4/groups/manager": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/groups/R_STD_USD": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/groups/R_ECN_USD": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/groups/M_GFT_USD": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/groups/system": {
      useDirMode: true,
    },

    // ─── Approval Tasks (v5) ─────────────────────────────────────────────────
    // GET /api/v5/approval-tasks/user/approval-list  — approvers list for delete/edit approval
    "/api/proxy-gateway/api/v5/approval-tasks/user/approval-list": {
      useDirMode: true,
    },

    // ─── Common Enum (v5) ────────────────────────────────────────────────────
    // GET /api/v5/common/enum/4/1  — MT4 Group enum (version=4, module=1)
    "/api/proxy-gateway/api/v5/common/enum/4/1": {
      useDirMode: true,
    },

    // ─── System / Permissions ────────────────────────────────────────────────
    "/api/proxy-gateway/api/v5/system/brands": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/system/field-risk-levels": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/permissions/me": {
      useDirMode: true,
    },

    // ─── Plugin Hub — Plugin Library (v5) ───────────────────────────────────
    // GET .../plugins?mtVersion=4|5  → IV5APIResponse<IPlugin[]>
    "/api/proxy-gateway/api/v5/plugins": {
      useDirMode: true,
    },
    // POST .../plugins/inspect-dll-version  → IV5APIResponse<string>
    "/api/proxy-gateway/api/v5/plugins/inspect-dll-version": {
      useDirMode: true,
    },
    // GET  .../plugins/{id}
    // GET  .../files/{id}/preview
    // GET  .../files/{id}/download
    "/api/proxy-gateway/api/v5/(plugins/\\d+|files/\\d+/preview|files/\\d+/download)$":
      {
        useDirMode: false,
        options: {
          supportRegexp: true,
        },
        body: "plugin-hub/plugin-hub-router.js",
      },

    // ─── Roles / Users ───────────────────────────────────────────────────────
    "/api/proxy-gateway/api/v3/role": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/user/all": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/user/approval-list": {
      useDirMode: true,
    },

    // ─── MT4 Symbols / Securities ────────────────────────────────────────────
    "/api/proxy-gateway/api/v3/mt4/symbols/securities": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/mt4/symbols": {
      useDirMode: true,
    },

    // ─── MT4 Orders ──────────────────────────────────────────────────────────
    "/api/proxy-gateway/api/v3/mt4/orders/MT4_TPTEST": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/mt4/orders/MT4_TPTEST/compare": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/mt4/orders": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/mt4/orders/5176257": {
      useDirMode: true,
    },

    // ─── MT4 Backups ─────────────────────────────────────────────────────────
    "/api/proxy-gateway/api/v3/mt4/backups": {
      useDirMode: true,
    },

    // ─── MT4 Groups (v2, legacy) ──────────────────────────────────────────────
    "/api/proxy-gateway/api/v2/mt4/groups/0800076666": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v2/mt4/groups/groupcompanies": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v2/mt4/groups": {
      useDirMode: true,
    },

    // ─── Audit / Field Risk ──────────────────────────────────────────────────
    "/api/proxy-gateway/api/v3/audit-logs": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/field-risk-levels": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v3/me/role-permission": {
      useDirMode: true,
    },

    // ─── Enum (v3 legacy) ────────────────────────────────────────────────────
    "/api/proxy-gateway/api/v3/enum/4/8": {
      useDirMode: true,
    },

    // ─── MT5 ─────────────────────────────────────────────────────────────────
    "/api/proxy-gateway/api/mt5/news/all": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/news/language/all": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/symbols/all": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/mailServers/all": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/enum/reports": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/enum/permissions": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/enum/news": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/floatingMargins/all": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/tradeServers": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/enum/margin": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/enum/common": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/companies": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/v2/name": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/mt5/group/all": {
      useDirMode: true,
    },

    // ─── Misc ────────────────────────────────────────────────────────────────
    "/api/proxy-gateway/api/v2/Brands": {
      useDirMode: true,
    },

    "/api/health": {
      useDirMode: true,
    },

    "/api/auth/session": {
      useDirMode: true,
    },
  };
})();
