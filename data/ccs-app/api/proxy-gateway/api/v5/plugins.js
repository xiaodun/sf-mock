/**
 * GET /api/proxy-gateway/api/v5/plugins?mtVersion=4|5
 * → IV5APIResponse<IPlugin[]>
 */
(function () {
  const path = require("path");
  // rspUtils 每次请求会 eval 本文件，但 require() 会缓存依赖；清缓存后改 plugin-hub-mock-data 无需重启 mock
  const hubPath = path.join(
    process.cwd(),
    "data",
    "ccs-app",
    "plugin-hub",
    "plugin-hub-mock-data.js"
  );
  try {
    delete require.cache[require.resolve(hubPath)];
  } catch (_) {}
  const hub = require(hubPath);

  return (data) => {
    const mtVersion = data.params && data.params.mtVersion;
    const items = hub.listPlugins(mtVersion);
    return hub.envelope(items, "success");
  };
})();
