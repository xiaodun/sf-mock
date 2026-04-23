/**
 * GET /api/proxy-gateway/api/v5/plugin-hub/plugins?platform=MT4|MT5
 * → IV5APIResponse<IPlugin[]>
 */
(function () {
  const path = require("path");
  const hub = require(path.join(
    process.cwd(),
    "data",
    "ccs-app",
    "plugin-hub",
    "plugin-hub-mock-data.js"
  ));

  return (data) => {
    const platform = (data.params && data.params.platform) || "MT4";
    const items = hub.listPlugins(platform);
    return hub.envelope(items, "success");
  };
})();
