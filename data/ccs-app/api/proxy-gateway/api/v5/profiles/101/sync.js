(function () {
  // POST /api/v5/profiles/101/sync — submit a Generate & Sync background job.
  // Returns a jobId that the Background Tasks panel watches.
  return (data) => {
    return {
      status: 200,
      data: {
        data: { jobId: "job-dl-sync-" + Date.now() },
        code: "0",
        message: "success",
      },
    };
  };
})();
