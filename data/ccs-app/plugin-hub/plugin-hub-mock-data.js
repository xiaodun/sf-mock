/**
 * Plugin Library mock catalog — shared shape matches ccs-ui:
 * @/types/GlobalModule/pluginLibrary (IPlugin, IPluginDetail, IPluginVersion, IPluginFile)
 */
(function () {
  const now = "2026-04-20T08:00:00.000Z";
  const user = "mock.user@example.com";

  const token = {
    expiresAt: 1900000000000,
    isValid: true,
  };

  function envelope(innerData, message) {
    return {
      data: {
        data: innerData,
        message: message || "success",
      },
      status: 200,
      tokenStatus: token,
    };
  }

  /** @type {Record<number, { platform: string, plugin: object, versions: object[], filesByVersionId: Record<number, object[]> }>} */
  const byPluginId = {
    101: {
      platform: "MT4",
      plugin: {
        id: 101,
        name: "Virtual Dealer Plugin",
        latestVersion: "1.2.0",
        status: "Active",
        createdBy: user,
        createdOn: "2026-01-10T10:00:00.000Z",
        updatedBy: user,
        updatedOn: now,
      },
      versions: [
        {
          id: 1101,
          pluginId: 101,
          version: "1.2.0",
          status: "In Use",
          isLatest: true,
          createdBy: user,
          createdOn: "2026-03-01T09:00:00.000Z",
          updatedBy: user,
          updatedOn: now,
        },
        {
          id: 1102,
          pluginId: 101,
          version: "1.1.0",
          status: "Not In Use",
          isLatest: false,
          createdBy: user,
          createdOn: "2026-02-01T09:00:00.000Z",
          updatedBy: user,
          updatedOn: now,
        },
      ],
      filesByVersionId: {
        1101: [
          {
            id: 5001,
            versionId: 1101,
            fileName: "VirtualDealer.dll",
            size: "512 KB",
            isMainFile: true,
            fileType: "dll",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
          {
            id: 5002,
            versionId: 1101,
            fileName: "plugin.ini",
            size: "2 KB",
            isMainFile: false,
            fileType: "ini",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
          {
            id: 5003,
            versionId: 1101,
            fileName: "manifest.json",
            size: "1 KB",
            isMainFile: false,
            fileType: "json",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
        ],
        1102: [
          {
            id: 5004,
            versionId: 1102,
            fileName: "VirtualDealer_legacy.dll",
            size: "480 KB",
            isMainFile: true,
            fileType: "dll",
            createdBy: user,
            createdOn: "2026-02-01T09:00:00.000Z",
            updatedBy: user,
            updatedOn: now,
          },
        ],
      },
    },
    102: {
      platform: "MT4",
      plugin: {
        id: 102,
        name: "Reporting Toolkit",
        latestVersion: "3.0.1",
        status: "Inactive",
        createdBy: user,
        createdOn: "2025-12-01T12:00:00.000Z",
        updatedBy: user,
        updatedOn: now,
      },
      versions: [
        {
          id: 1201,
          pluginId: 102,
          version: "3.0.1",
          status: "Not In Use",
          isLatest: true,
          createdBy: user,
          createdOn: "2025-12-15T12:00:00.000Z",
          updatedBy: user,
          updatedOn: now,
        },
      ],
      filesByVersionId: {
        1201: [
          {
            id: 5101,
            versionId: 1201,
            fileName: "ReportCore.dll",
            size: "1.2 MB",
            isMainFile: true,
            fileType: "dll",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
          {
            id: 5102,
            versionId: 1201,
            fileName: "defaults.yaml",
            size: "3 KB",
            isMainFile: false,
            fileType: "yaml",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
        ],
      },
    },
    201: {
      platform: "MT5",
      plugin: {
        id: 201,
        name: "Bridge Gateway",
        latestVersion: "2.4.0",
        status: "Active",
        createdBy: user,
        createdOn: "2026-02-20T11:30:00.000Z",
        updatedBy: user,
        updatedOn: now,
      },
      versions: [
        {
          id: 2101,
          pluginId: 201,
          version: "2.4.0",
          status: "In Use",
          isLatest: true,
          createdBy: user,
          createdOn: "2026-04-01T08:00:00.000Z",
          updatedBy: user,
          updatedOn: now,
        },
      ],
      filesByVersionId: {
        2101: [
          {
            id: 6001,
            versionId: 2101,
            fileName: "BridgeGateway64.dll",
            size: "896 KB",
            isMainFile: true,
            fileType: "dll",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
          {
            id: 6002,
            versionId: 2101,
            fileName: "routing.xml",
            size: "4 KB",
            isMainFile: false,
            fileType: "xml",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
        ],
      },
    },
    202: {
      platform: "MT5",
      plugin: {
        id: 202,
        name: "News Feed Extension",
        latestVersion: "1.0.3",
        status: "Active",
        createdBy: user,
        createdOn: "2026-03-05T14:00:00.000Z",
        updatedBy: user,
        updatedOn: now,
      },
      versions: [
        {
          id: 2201,
          pluginId: 202,
          version: "1.0.3",
          status: "In Use",
          isLatest: true,
          createdBy: user,
          createdOn: now,
          updatedBy: user,
          updatedOn: now,
        },
      ],
      filesByVersionId: {
        2201: [
          {
            id: 6101,
            versionId: 2201,
            fileName: "NewsFeed.dll",
            size: "320 KB",
            isMainFile: true,
            fileType: "dll",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
          {
            id: 6102,
            versionId: 2201,
            fileName: "feeds.conf",
            size: "1 KB",
            isMainFile: false,
            fileType: "conf",
            createdBy: user,
            createdOn: now,
            updatedBy: user,
            updatedOn: now,
          },
        ],
      },
    },
  };

  const previewTextByFileId = {
    5002: "; Virtual Dealer — mock preview\n[General]\nEnableLog=1\nSpreadMode=2\n",
    5003: '{\n  "name": "virtual-dealer",\n  "version": "1.2.0",\n  "entry": "VirtualDealer.dll"\n}\n',
    5102: "# Reporting defaults\nexport:\n  format: xlsx\n  schedule: daily\n",
    6002: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<routes>\n  <route path=\"/tick\" backend=\"ws://mock:9000\"/>\n</routes>\n",
    6102: "# News feed mock\nprovider=Reuters\npollSeconds=30\n",
  };

  function listPlugins(platform) {
    const p = (platform || "MT4").toUpperCase();
    return Object.values(byPluginId)
      .filter((e) => e.platform === p)
      .map((e) => e.plugin);
  }

  function getDetail(pluginId) {
    const row = byPluginId[pluginId];
    if (!row) return null;
    return {
      id: row.plugin.id,
      name: row.plugin.name,
      status: row.plugin.status,
      createdBy: row.plugin.createdBy,
      createdOn: row.plugin.createdOn,
      updatedBy: row.plugin.updatedBy,
      updatedOn: row.plugin.updatedOn,
      versions: row.versions,
    };
  }

  function getVersions(pluginId) {
    const row = byPluginId[pluginId];
    return row ? row.versions : null;
  }

  function getFiles(versionId) {
    for (const row of Object.values(byPluginId)) {
      const files = row.filesByVersionId[versionId];
      if (files) return files;
    }
    return null;
  }

  function getFileMeta(fileId) {
    for (const row of Object.values(byPluginId)) {
      for (const files of Object.values(row.filesByVersionId)) {
        const f = files.find((x) => x.id === fileId);
        if (f) return f;
      }
    }
    return null;
  }

  function getPreviewText(fileId) {
    return previewTextByFileId[fileId] != null
      ? previewTextByFileId[fileId]
      : "# Mock preview\n(no sample content for this file id)\n";
  }

  module.exports = {
    envelope,
    listPlugins,
    getDetail,
    getVersions,
    getFiles,
    getFileMeta,
    getPreviewText,
  };
})();
