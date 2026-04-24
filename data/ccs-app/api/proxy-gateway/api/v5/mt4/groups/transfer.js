(function () {
  // ========= Scenario switcher =========================================
  // 切换 MODE 即可在前端测试不同结果，无需动 chip/server 选择：
  //   "partial"    — 奇偶穿插：一半 success，一半 fail（HTTP 207）
  //   "allSuccess" — 全部成功（HTTP 200）
  //   "allFailed"  — 全部失败但接口已执行（HTTP 207，partial 分支 → allFailed 子分支）
  //   "validation" — 前置校验失败（HTTP 422，flat 报文触发 hook 的 validation 分支）
  // details 条数 = 前端勾选的 toServerIds × groupNames/symbols 笛卡尔积，
  // 单 server/多 server 直接由前端决定。
  // ====================================================================
  const MODE = "partial";

  return (data) => {
    const params = data.params || {};
    const toServerIds = Array.isArray(params.toServerIds) ? params.toServerIds : [];
    const items = Array.isArray(params.groupNames)
      ? params.groupNames
      : Array.isArray(params.symbols)
        ? params.symbols
        : [];

    const details = [];
    items.forEach((name, itemIdx) => {
      toServerIds.forEach((serverId, srvIdx) => {
        const combinedIdx = itemIdx * toServerIds.length + srvIdx;
        let success;
        let message;
        if (MODE === "allSuccess") {
          success = true;
          message = null;
        } else if (MODE === "allFailed") {
          success = false;
          message = Math.random() +` Mock transfer error for ${name} on server ${serverId}`;
        } else if (MODE === "validation") {
          success = false;
          message = `Validation failed for ${name} on server ${serverId}`;
        } else {
          // partial: even index success, odd index fail — 单 item 单 server 时为 success
          success = combinedIdx % 2 === 0;
          message = success
            ? null
            : `Mock failure for ${name} on server ${serverId}`;
        }
        details.push({
          identifier: { serverId, name },
          success,
          message,
        });
      });
    });

    const totalCount = details.length;
    const sucessCount = details.filter((d) => d.success).length;
    const failedCount = totalCount - sucessCount;

    // Pre-transfer validation failure: flat envelope with success:false.
    // Hook reads body.success === false → validation error branch.
    if (MODE === "validation") {
      return {
        success: false,
        status: 422,
        errorDescription: "Validation failed",
        data: { totalCount, sucessCount: 0, failedCount: totalCount, details },
      };
    }

    // Post-transfer envelope (200 full success / 207 partial or all-failed).
    return {
      data: {
        data: { totalCount, sucessCount, failedCount, details },
        message:
          sucessCount === totalCount
            ? "success"
            : sucessCount === 0
              ? "failed"
              : "partial success",
      },
      status: sucessCount === totalCount ? 200 : 207,
      tokenStatus: { expiresAt: 1900000000000, isValid: true },
    };
  };
})();
