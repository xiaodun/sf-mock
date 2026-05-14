/**
 * Dynamic Plugin Hub routes (detail, file preview, file download).
 * Matched via regexp in ccs-app-mock-api.js.
 *
 * Versions and files are returned embedded in the plugin detail payload
 * (`GET /api/v5/plugins/{id}`) — independent /versions and /files GET
 * endpoints no longer exist.
 */
(function () {
  const path = require("path");
  const fs = require("fs");

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

  function apiPathFromRequest(reqUrl) {
    const raw = (reqUrl || "").split("?")[0];
    const marker = "/api/proxy-gateway";
    const i = raw.indexOf(marker);
    return i >= 0 ? raw.slice(i + marker.length) : raw;
  }

  const fallbackNow = "2026-04-20T08:00:00.000Z";

  return (data) => {
    const apiPath = apiPathFromRequest(data.req && data.req.url);

    const mDetail = /^\/api\/v5\/plugins\/(\d+)$/.exec(apiPath);
    if (mDetail) {
      const id = parseInt(mDetail[1], 10);
      const detail = hub.getDetail(id);
      if (!detail) {
        return hub.envelope(
          {
            id,
            name: `plugin_${id}`,
            displayName: `Plugin #${id} (mock — not in catalog)`,
            mtVersion: 4,
            status: 1,
            latestVersionTag: "",
            s3Directory: "",
            isInUse: false,
            createdBy: "-",
            createdAt: fallbackNow,
            modifiedBy: "-",
            modifiedAt: fallbackNow,
            versions: [],
          },
          "success"
        );
      }
      return hub.envelope(detail, "success");
    }

    // New unified preview: GET /api/v5/plugins/{id}/versions/{id}/files/{id}/preview
    const mNewPreview = /^\/api\/v5\/plugins\/(\d+)\/versions\/(\d+)\/files\/(\d+)\/preview$/.exec(apiPath);
    if (mNewPreview) {
      const fid = parseInt(mNewPreview[3], 10);
      const meta = hub.getFileMeta(fid);
      if (!meta) {
        return hub.envelope(null, "not found");
      }
      return hub.envelope(hub.getFilePreview(fid), "success");
    }

    // YAML rules: GET /api/v5/plugins/{id}/versions/{id}/config/yaml/files/{id}/rules
    const mYamlRules = /^\/api\/v5\/plugins\/(\d+)\/versions\/(\d+)\/config\/yaml\/files\/(\d+)\/rules$/.exec(apiPath);
    if (mYamlRules) {
      const fid = parseInt(mYamlRules[3], 10);
      return hub.envelope(hub.getYamlRules(fid), "success");
    }

    // INI parameters: GET /api/v5/plugins/{id}/versions/{id}/config/ini/files/{id}/parameters
    const mIniParams = /^\/api\/v5\/plugins\/(\d+)\/versions\/(\d+)\/config\/ini\/files\/(\d+)\/parameters$/.exec(apiPath);
    if (mIniParams) {
      const fid = parseInt(mIniParams[3], 10);
      return hub.envelope(hub.getIniParameters(fid), "success");
    }

    // Legacy preview: GET /api/v5/files/{id}/preview
    const mPreview = /^\/api\/v5\/files\/(\d+)\/preview$/.exec(apiPath);
    if (mPreview) {
      const fid = parseInt(mPreview[1], 10);
      const meta = hub.getFileMeta(fid);
      const text = meta
        ? hub.getPreviewText(fid)
        : "# Mock preview\nUnknown file id: " + fid + "\n";
      return hub.envelope(text, "success");
    }

    const mDownload = /^\/api\/v5\/files\/(\d+)\/download$/.exec(apiPath);
    if (mDownload) {
      const fid = parseInt(mDownload[1], 10);
      const meta = hub.getFileMeta(fid);
      if (!meta) {
        return hub.envelope({ stub: true, reason: "unknown file id", fileId: fid }, "Not found");
      }
      const samplePath = path.join(
        process.cwd(),
        "data",
        "ccs-app",
        "plugin-hub",
        "plugin-hub-sample.dll"
      );
      if (!fs.existsSync(samplePath)) {
        return hub.envelope({ stub: true, fileId: fid }, "Mock sample file missing on disk");
      }
      return {
        __pluginHubFileDownload: true,
        filePath: path.join("data", "ccs-app", "plugin-hub", "plugin-hub-sample.dll"),
        downloadName: meta.fileName || "plugin-download.bin",
      };
    }

    return hub.envelope({ error: "plugin-hub mock: unmatched path", path: apiPath }, "error");
  };
})();
