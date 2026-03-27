(function getApis() {
  return {
    "/api/proxy-gateway/api/v5/common/rsa-public-key": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt4/backups": {
      useDirMode: true,
    },

    "/api/proxy-gateway/api/v5/mt5/orders/list": {
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
      response: { statusCode: 412 }, // [412-TEST] 取消注释模拟 RSA key expired
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
