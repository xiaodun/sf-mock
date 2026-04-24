(function () {
  return (data) => {
    // POST (transfer new) / PUT (transfer settings) — same response shape
    // 207 Partial success: 2 groups × 3 servers = 6 details (2 success, 4 failed)
    return {
      data: {
        data: {
          totalCount: 6,
          sucessCount: 2,
          failedCount: 4,
          details: [
            {
              identifier: {
                serverId: 10014,
                name: "M_GFT_USD",
              },
              success: false,
              message: "Security Commodities not found.",
            },
            {
              identifier: {
                serverId: 10015,
                name: "M_GFT_USD",
              },
              success: true,
              message: null,
            },
            {
              identifier: {
                serverId: 10016,
                name: "M_GFT_USD",
              },
              success: false,
              message: "Target server 10016 group M_GFT_USD already exists",
            },
            {
              identifier: {
                serverId: 10014,
                name: "R_STD_USD",
              },
              success: false,
              message: "Target server 10014 group R_STD_USD already exists",
            },
            {
              identifier: {
                serverId: 10015,
                name: "R_STD_USD",
              },
              success: true,
              message: null,
            },
            {
              identifier: {
                serverId: 10016,
                name: "R_STD_USD",
              },
              success: false,
              message: "Security Forex .sc not found.",
            },
          ],
        },
        message: "partial success",
      },
      status: 207,
      tokenStatus: {
        expiresAt: 1777000453943,
        isValid: true,
      },
    };
  };
})();