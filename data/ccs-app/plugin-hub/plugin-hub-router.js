/**
 * Dynamic Plugin Hub routes (detail, versions, files, preview, download).
 * Matched via regexp in ccs-app-mock-api.js
 */
(function () {
  const path = require("path");
  const fs = require("fs");

  const hub = require(path.join(
    process.cwd(),
    "data",
    "ccs-app",
    "plugin-hub",
    "plugin-hub-mock-data.js"
  ));

  function apiPathFromRequest(reqUrl) {
    const raw = (reqUrl || "").split("?")[0];
    const marker = "/api/proxy-gateway";
    const i = raw.indexOf(marker);
    return i >= 0 ? raw.slice(i + marker.length) : raw;
  }

  const fallbackNow = "2026-04-20T08:00:00.000Z";

  return (data) => {
    const apiPath = apiPathFromRequest(data.req && data.req.url);

    const mDetail = /^\/api\/v5\/plugin-hub\/plugins\/(\d+)$/.exec(apiPath);
    if (mDetail) {
      const id = parseInt(mDetail[1], 10);
      const detail = hub.getDetail(id);
      if (!detail) {
        return hub.envelope(
          {
            id,
            name: `Plugin #${id} (mock — not in catalog)`,
            status: "Inactive",
            createdBy: "-",
            createdOn: fallbackNow,
            updatedBy: "-",
            updatedOn: fallbackNow,
            versions: [],
          },
          "success"
        );
      }
      return hub.envelope(detail, "success");
    }

    const mVersions = /^\/api\/v5\/plugin-hub\/plugins\/(\d+)\/versions$/.exec(apiPath);
    if (mVersions) {
      const id = parseInt(mVersions[1], 10);
      const versions = hub.getVersions(id);
      return hub.envelope(versions || [], "success");
    }

    const mFiles = /^\/api\/v5\/plugin-hub\/versions\/(\d+)\/files$/.exec(apiPath);
    if (mFiles) {
      const vid = parseInt(mFiles[1], 10);
      const files = hub.getFiles(vid);
      return hub.envelope(files || [], "success");
    }

    const mPreview = /^\/api\/v5\/plugin-hub\/files\/(\d+)\/preview$/.exec(apiPath);
    if (mPreview) {
      const fid = parseInt(mPreview[1], 10);
      const meta = hub.getFileMeta(fid);
      const text = meta
        ? hub.getPreviewText(fid)
        : "# Mock preview\nUnknown file id: " + fid + "\n";
      // IV5APIResponse<string> — JSON body (same Content-Type as other v5 mocks)
      return hub.envelope(text, "success");
    }

    const mDownload = /^\/api\/v5\/plugin-hub\/files\/(\d+)\/download$/.exec(apiPath);
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
