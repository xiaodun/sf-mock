/**
 * Plugin Library mock catalog — shape matches backend contract.
 * See ccs-ui @/types/GlobalModule/pluginLibrary.ts
 *
 * Endpoints consumed:
 *   GET /api/v5/plugins?mtVersion=4|5  → listPlugins()
 *   GET /api/v5/plugins/{id}            → getDetail() (versions[] + files[] embedded)
 *
 * plugin.status       0 = Active, 1 = Inactive
 * plugin.mtVersion    4 = MT4, 5 = MT5
 * version.isInUse     boolean — true blocks version deletion
 * file.fileType       0 = Dll, 1 = Config, 2 = Rule, 3 = Other
 * file.fileSize       bytes (frontend formats via formatBytes)
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

  /** @type {Record<number, { plugin: object, versions: object[] }>} */
  const byPluginId = {
    101: {
      plugin: {
        id: 101,
        name: "virtual_dealer_plugin",
        displayName: "Virtual Dealer Plugin",
        mtVersion: 4,
        status: 0,
        latestVersionTag: "1.2.0",
        s3Directory: "plugins/mt4/virtual_dealer_plugin/",
        isInUse: true,
        createdBy: user,
        createdAt: "2026-01-10T10:00:00.000Z",
        modifiedBy: user,
        modifiedAt: now,
      },
      versions: [
        {
          id: 1101,
          pluginId: 101,
          versionTag: "1.2.0",
          isLatest: true,
          isInUse: true,
          createdBy: user,
          createdAt: "2026-03-01T09:00:00.000Z",
          updatedBy: user,
          updatedAt: now,
          files: [
            {
              id: 5001,
              fileName: "VirtualDealer.dll",
              fileType: 0,
              fileSize: 524288,
              checksum: "5001-dll-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/VirtualDealer.dll",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5002,
              fileName: "plugin.ini",
              fileType: 1,
              fileSize: 2048,
              checksum: "5002-ini-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/plugin.ini",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5003,
              fileName: "manifest.json",
              fileType: 3,
              fileSize: 1024,
              checksum: "5003-json-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/manifest.json",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5005,
              fileName: "defaults.yaml",
              fileType: 1,
              fileSize: 2560,
              checksum: "5005-yaml-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/defaults.yaml",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5006,
              fileName: "overrides.yml",
              fileType: 1,
              fileSize: 1280,
              checksum: "5006-yml-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/overrides.yml",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5007,
              fileName: "settings.cfg",
              fileType: 1,
              fileSize: 512,
              checksum: "5007-cfg-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/settings.cfg",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5008,
              fileName: "server.conf",
              fileType: 1,
              fileSize: 768,
              checksum: "5008-conf-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/server.conf",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5009,
              fileName: "readme.txt",
              fileType: 3,
              fileSize: 256,
              checksum: "5009-txt-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/readme.txt",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5010,
              fileName: "config.xml",
              fileType: 3,
              fileSize: 3072,
              checksum: "5010-xml-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/config.xml",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
          ],
        },
        {
          id: 1102,
          pluginId: 101,
          versionTag: "1.1.0",
          isLatest: false,
          isInUse: false,
          createdBy: user,
          createdAt: "2026-02-01T09:00:00.000Z",
          updatedBy: user,
          updatedAt: now,
          files: [
            {
              id: 5004,
              fileName: "VirtualDealer_legacy.dll",
              fileType: 0,
              fileSize: 491520,
              checksum: "5004-dll-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1102/VirtualDealer_legacy.dll",
              createdBy: user,
              createdAt: "2026-02-01T09:00:00.000Z",
              updatedBy: user,
              updatedAt: "2026-02-01T09:00:00.000Z",
            },
          ],
        },
      ],
    },
    102: {
      plugin: {
        id: 102,
        name: "reporting_toolkit",
        displayName: "Reporting Toolkit",
        mtVersion: 4,
        status: 1,
        latestVersionTag: "3.0.1",
        s3Directory: "plugins/mt4/reporting_toolkit/",
        isInUse: false,
        createdBy: user,
        createdAt: "2025-12-01T12:00:00.000Z",
        modifiedBy: user,
        modifiedAt: now,
      },
      versions: [
        {
          id: 1201,
          pluginId: 102,
          versionTag: "3.0.1",
          isLatest: true,
          isInUse: false,
          createdBy: user,
          createdAt: "2025-12-15T12:00:00.000Z",
          updatedBy: user,
          updatedAt: now,
          files: [
            {
              id: 5101,
              fileName: "ReportCore.dll",
              fileType: 0,
              fileSize: 1258291,
              checksum: "5101-dll-checksum",
              sourceVersionId: null,
              s3Key: "plugins/102/1201/ReportCore.dll",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 5102,
              fileName: "defaults.yaml",
              fileType: 1,
              fileSize: 3072,
              checksum: "5102-yaml-checksum",
              sourceVersionId: null,
              s3Key: "plugins/102/1201/defaults.yaml",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
          ],
        },
      ],
    },
    201: {
      plugin: {
        id: 201,
        name: "bridge_gateway",
        displayName: "Bridge Gateway",
        mtVersion: 5,
        status: 0,
        latestVersionTag: "2.4.0",
        s3Directory: "plugins/mt5/bridge_gateway/",
        isInUse: true,
        createdBy: user,
        createdAt: "2026-02-20T11:30:00.000Z",
        modifiedBy: user,
        modifiedAt: now,
      },
      versions: [
        {
          id: 2101,
          pluginId: 201,
          versionTag: "2.4.0",
          isLatest: true,
          isInUse: true,
          createdBy: user,
          createdAt: "2026-04-01T08:00:00.000Z",
          updatedBy: user,
          updatedAt: now,
          files: [
            {
              id: 6001,
              fileName: "BridgeGateway64.dll",
              fileType: 0,
              fileSize: 917504,
              checksum: "6001-dll-checksum",
              sourceVersionId: null,
              s3Key: "plugins/201/2101/BridgeGateway64.dll",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 6002,
              fileName: "routing.xml",
              fileType: 2,
              fileSize: 4096,
              checksum: "6002-xml-checksum",
              sourceVersionId: null,
              s3Key: "plugins/201/2101/routing.xml",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
          ],
        },
      ],
    },
    202: {
      plugin: {
        id: 202,
        name: "news_feed_extension",
        displayName: "News Feed Extension",
        mtVersion: 5,
        status: 0,
        latestVersionTag: "1.0.3",
        s3Directory: "plugins/mt5/news_feed_extension/",
        isInUse: false,
        createdBy: user,
        createdAt: "2026-03-05T14:00:00.000Z",
        modifiedBy: user,
        modifiedAt: now,
      },
      versions: [
        {
          id: 2201,
          pluginId: 202,
          versionTag: "1.0.3",
          isLatest: true,
          isInUse: false,
          createdBy: user,
          createdAt: now,
          updatedBy: user,
          updatedAt: now,
          files: [
            {
              id: 6101,
              fileName: "NewsFeed.dll",
              fileType: 0,
              fileSize: 327680,
              checksum: "6101-dll-checksum",
              sourceVersionId: null,
              s3Key: "plugins/202/2201/NewsFeed.dll",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
            {
              id: 6102,
              fileName: "feeds.conf",
              fileType: 1,
              fileSize: 1024,
              checksum: "6102-conf-checksum",
              sourceVersionId: null,
              s3Key: "plugins/202/2201/feeds.conf",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
          ],
        },
      ],
    },
  };

  /** Preview text for config files (fileType === 1). */
  const previewTextByFileId = {
    5002: "; Virtual Dealer — mock preview\n[General]\nEnableLog=1\nSpreadMode=2\n",
    5102: "# Reporting defaults\nexport:\n  format: xlsx\n  schedule: daily\n",
    6102: "# News feed mock\nprovider=Reuters\npollSeconds=30\n",
  };

  /** Unified file preview response — matches PluginFilePreviewDto */
  const filePreviewByFileId = {
    5002: {
      fileId: 5002,
      fileName: "plugin.ini",
      fileType: 1,
      contentType: "text/plain",
      fileSize: 2048,
      text: "; Virtual Dealer — mock preview\n[General]\nEnableLog=1\nSpreadMode=2\nMaxSlippage=3\n",
      dllMetadata: null,
      lastModifiedAt: now,
    },
    5005: {
      fileId: 5005,
      fileName: "defaults.yaml",
      fileType: 2,
      contentType: "text/plain",
      fileSize: 2560,
      text: "rules:\n  - rule: MT4_USD_Gold_TEST\n    enabled: true\n    filter:\n      groups: [M_VIG_01_USD]\n      symbol_groups: [Gold*]\n    margin:\n      level_type: Fixed\n      leverage: 50\n",
      dllMetadata: null,
      lastModifiedAt: now,
    },
    5006: {
      fileId: 5006,
      fileName: "overrides.yml",
      fileType: 2,
      contentType: "text/plain",
      fileSize: 1280,
      text: "rules:\n  - rule: Override_Silver\n    enabled: false\n    filter:\n      symbol_groups: [Silver*]\n    margin:\n      level_type: Fixed\n      leverage: 100\n",
      dllMetadata: null,
      lastModifiedAt: now,
    },
    5102: {
      fileId: 5102,
      fileName: "defaults.yaml",
      fileType: 2,
      contentType: "text/plain",
      fileSize: 3072,
      text: "rules:\n  - rule: Report_Forex\n    enabled: true\n    filter:\n      groups: [M_VIG_01_USD]\n    margin:\n      level_type: Fixed\n      leverage: 100\n",
      dllMetadata: null,
      lastModifiedAt: now,
    },
  };

  /** YAML rules — matches IYamlRuleRaw from useConfigParamYaml */
  const yamlRulesByFileId = {
    // plugin 101 / version 1101 / file 5005 (defaults.yaml)
    5005: [
      {
        id: 1,
        fileId: 5005,
        name: "MT4_USD_Gold_NEWS",
        ordering: 1,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: true,
          category: "News",
          filter: {
            groups: ["M_VIG_01_USD", "M_VIG_02_USD"],
            symbol_groups: ["Gold*"],
            symbols: [],
            time: [{ from: "01:00", to: "23:00", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] }],
          },
          margin: { level_type: "Fixed", leverage: 50 },
        }),
        serverIds: [10001, 10002],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 2,
        fileId: 5005,
        name: "MT4_USD_Silver_NEWS",
        ordering: 2,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: false,
          category: "News",
          filter: {
            groups: ["M_VIG_01_USD"],
            symbol_groups: ["Silver*"],
            symbols: [],
            time: [],
          },
          margin: { level_type: "Fixed", leverage: 100 },
        }),
        serverIds: [10001],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 3,
        fileId: 5005,
        name: "MT4_Forex_Default",
        ordering: 3,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: false,
          category: "Forex",
          filter: {
            groups: ["M_VIG_01_USD", "M_VIG_02_USD", "M_VIG_03_USD"],
            symbol_groups: ["Forex*"],
            symbols: ["EURUSD", "GBPUSD"],
            time: [
              { from: "00:00", to: "08:00", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
              { from: "20:00", to: "24:00", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
            ],
          },
          margin: { level_type: "equity", levels: [{ from: null, to: 10000, leverage: 200 }, { from: 10000, to: 50000, leverage: 100 }, { from: 50000, to: 99999, leverage: 50 }] },
        }),
        serverIds: [10001, 10002, 10003],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 4,
        fileId: 5005,
        name: "MT4_Gold_Premium",
        ordering: 4,
        definitionJson: JSON.stringify({
          enabled: false,
          scheduled: false,
          category: "Gold",
          filter: {
            groups: ["M_PREM_01_USD"],
            symbol_groups: ["Gold*"],
            symbols: [],
            time: [],
          },
          margin: { level_type: "Fixed", leverage: 200 },
        }),
        serverIds: [],
        modifiedAt: now,
        lastModifiedBy: user,
      },
    ],
    // plugin 102 / version 1201 / file 5102 (defaults.yaml)
    5102: [
      {
        id: 10,
        fileId: 5102,
        name: "Report_Forex_Daily",
        ordering: 1,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: true,
          category: "Forex",
          filter: {
            groups: ["M_VIG_01_USD"],
            symbol_groups: ["Forex*"],
            symbols: [],
            time: [{ from: "22:00", to: "23:59", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] }],
          },
          margin: { level_type: "Fixed", leverage: 100 },
        }),
        serverIds: [20001],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 11,
        fileId: 5102,
        name: "Report_Indices_Weekly",
        ordering: 2,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: true,
          category: "Indices",
          filter: {
            groups: ["M_VIG_01_USD", "M_VIG_02_USD"],
            symbol_groups: ["Indices*"],
            symbols: [],
            time: [{ from: "20:00", to: "22:00", days: ["Fri"] }],
          },
          margin: { level_type: "Fixed", leverage: 50 },
        }),
        serverIds: [20001, 20002],
        modifiedAt: now,
        lastModifiedBy: user,
      },
    ],
  };

  /** INI parameters — matches IIniParametersResponse */
  const iniParametersByFileId = {
    // plugin 101 / version 1101 / file 5002 (plugin.ini)
    5002: {
      fileId: 5002,
      global: [
        { id: 101, fileId: 5002, key: "EnableLog", value: "1", type: 0, category: 0, lastModifiedBy: user, lastModifiedAt: now },
        { id: 102, fileId: 5002, key: "SpreadMode", value: "2", type: 0, category: 0, lastModifiedBy: user, lastModifiedAt: now },
      ],
      mutableDefault: [
        { id: 103, fileId: 5002, key: "MaxSlippage", value: "3", type: 0, category: 1, lastModifiedBy: user, lastModifiedAt: now },
        { id: 104, fileId: 5002, key: "VirtualStopLevel", value: "10", type: 0, category: 1, lastModifiedBy: user, lastModifiedAt: now },
      ],
      serverSpecific: [
        { id: 105, fileId: 5002, key: "ServerAddress", value: "192.168.1.100", type: 1, category: 2, lastModifiedBy: user, lastModifiedAt: now },
      ],
    },
  };

  /**
   * @param {number|string|undefined} mtVersion 4 | 5 | omitted (no filter)
   */
  function listPlugins(mtVersion) {
    const entries = Object.values(byPluginId);
    if (mtVersion === undefined || mtVersion === null || mtVersion === "") {
      return entries.map((e) => e.plugin);
    }
    const v = Number(mtVersion);
    return entries.filter((e) => e.plugin.mtVersion === v).map((e) => e.plugin);
  }

  function getDetail(pluginId) {
    const row = byPluginId[pluginId];
    if (!row) return null;
    return {
      ...row.plugin,
      versions: row.versions,
    };
  }

  function getFileMeta(fileId) {
    for (const row of Object.values(byPluginId)) {
      for (const version of row.versions) {
        const f = version.files.find((x) => x.id === fileId);
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

  function getFilePreview(fileId) {
    if (filePreviewByFileId[fileId]) return filePreviewByFileId[fileId];
    const meta = getFileMeta(fileId);
    if (!meta) return null;
    return {
      fileId: meta.id,
      fileName: meta.fileName,
      fileType: meta.fileType,
      contentType: "text/plain",
      fileSize: meta.fileSize,
      text: getPreviewText(fileId),
      dllMetadata: null,
      lastModifiedAt: now,
    };
  }

  function getYamlRules(fileId) {
    return yamlRulesByFileId[fileId] || [];
  }

  function getIniParameters(fileId) {
    return iniParametersByFileId[fileId] || { fileId, global: [], mutableDefault: [], serverSpecific: [] };
  }

  module.exports = {
    envelope,
    listPlugins,
    getDetail,
    getFileMeta,
    getPreviewText,
    getFilePreview,
    getYamlRules,
    getIniParameters,
  };
})();
