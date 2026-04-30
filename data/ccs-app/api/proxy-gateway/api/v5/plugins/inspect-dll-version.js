/**
 * POST /api/proxy-gateway/api/v5/plugins/inspect-dll-version
 * → IV5APIResponse<string>
 *
 * Real backend inspects the uploaded DLL and returns the embedded version
 * string. The mock just returns a hard-coded tag so the frontend's pre-fill
 * flow can be exercised end-to-end.
 */
(function () {
  return () => {
    return {
      status: 200,
      data: {
        data: "5.0.0.5810",
        message: "success",
      },
      tokenStatus: {
        expiresAt: 1900000000000,
        isValid: true,
      },
    };
  };
})();
