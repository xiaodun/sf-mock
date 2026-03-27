(function () {
  return (data) => {
    // Returns array of Unix timestamps (seconds)
    // 0 = basebackup, other values = dated backups (newest first)
    return {
      data: {
        data: [
          1743076800, // 2026-03-27 12:00:00 UTC
          1742990400, // 2026-03-26 12:00:00 UTC
          1742904000, // 2026-03-25 12:00:00 UTC
          1742817600, // 2026-03-24 12:00:00 UTC
          0,          // basebackup
        ],
        message: "success",
      },
    };
  };
})();
