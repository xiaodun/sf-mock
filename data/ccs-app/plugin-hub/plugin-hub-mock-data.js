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
            {
              id: 5011,
              fileName: "empty-rules.yaml",
              fileType: 1,
              fileSize: 512,
              checksum: "5011-yaml-checksum",
              sourceVersionId: null,
              s3Key: "plugins/101/1101/empty-rules.yaml",
              createdBy: user,
              createdAt: now,
              updatedBy: user,
              updatedAt: now,
            },
          ],
        },
        {
          id: 1103,
          pluginId: 101,
          versionTag: "1.0.5",
          isLatest: false,
          isInUse: false,
          createdBy: user,
          createdAt: "2026-01-15T09:00:00.000Z",
          updatedBy: user,
          updatedAt: now,
          // files field intentionally omitted to simulate backend response without files
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
    5011: {
      fileId: 5011,
      fileName: "empty-rules.yaml",
      fileType: 2,
      contentType: "text/plain",
      fileSize: 512,
      text: "rules: []\n",
      dllMetadata: null,
      lastModifiedAt: now,
    },
  };

  /** YAML rules — matches IYamlRuleRaw from useConfigParamYaml */
  const yamlRulesByFileId = {
    // plugin 101 / version 1101 / file 5011 (empty-rules.yaml) — no rules, for empty-state testing
    5011: [],
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
            groups: ["M_VIG_01_USD", "M_GFT_USD", "UNKNOWN_GROUP_XYZ"],
            symbol_groups: ["Gold*"],
            symbols: [],
            accounts: [],
            time: [
              { from: "01:00", to: "08:15", days: ["Mon"] },
              { from: "01:00", to: "04:55", days: ["Tue"] },
              { from: "09:35", to: "20:15", days: ["Tue"] },
              { from: "09:35", to: "12:30", days: ["Wed"] },
              { from: "01:25", to: "12:30", days: ["Thu"] },
              { from: "01:25", to: "15:50", days: ["Fri"] },
              { from: "20:40", to: "21:20", days: ["Fri"] },
              { from: "08:35", to: "09:05", days: ["Sat"] },
              { from: "11:25", to: "11:45", days: ["Sun"] },
              { from: "08:20", to: "09:20", days: ["Mon", "Tue", "Wed"] },
              { from: "05:00", to: "06:30", days: ["Mon", "Tue", "Wed"] },
              { from: "20:40", to: "23:00", days: ["Mon", "Tue", "Wed"] },
              { from: "12:45", to: "15:50", days: ["Mon", "Tue", "Wed"] },
              { from: "16:15", to: "17:30", days: ["Mon", "Tue", "Wed"] },
              { from: "17:40", to: "19:40", days: ["Mon", "Tue", "Wed"] },
              { from: "21:35", to: "23:00", days: ["Mon", "Tue", "Wed"] },
              { from: "18:40", to: "18:55", days: ["Mon", "Tue", "Wed"] },
              { from: "16:10", to: "16:20", days: ["Mon", "Tue", "Wed"] },
              { from: "09:35", to: "23:00", days: ["Thu"] },
              { from: "06:35", to: "08:15", days: ["Thu"] },
              { from: "01:25", to: "06:30", days: ["Thu"] },
              { from: "16:15", to: "20:15", days: ["Thu"] },
              { from: "17:40", to: "20:15", days: ["Thu"] },
              { from: "20:05", to: "20:15", days: ["Fri"] },
              { from: "05:05", to: "05:30", days: ["Sat", "Sun"] },
              { from: "06:50", to: "07:15", days: ["Sat", "Sun"] },
              { from: "17:20", to: "17:30", days: ["Sun"] },
            ],
          },
          margin: { level_type: "fixed", leverage: 50 },
        }),
        serverIds: [10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110, 10111, 10112, 10113, 10114, 10115, 10116, 10117, 10201, 10202, 10203, 10204, 10205, 10206, 10207, 10208, 10209, 10210, 10211, 10212, 10213, 10214, 10215, 10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10401, 10402, 10403, 10404, 10405, 10406, 10407, 10408, 10409, 10410, 10411],
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
        serverIds: [10101, 10102, 10103],
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
        serverIds: [10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110, 10201, 10202, 10203, 10204, 10205, 10206, 10301, 10302, 10303, 10304, 10305, 10401, 10402, 10403],
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
      {
        id: 5,
        fileId: 5005,
        name: "MT4_Silver_Premium",
        ordering: 5,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: false,
          category: "Silver",
          filter: {
            groups: ["M_PREM_01_USD", "M_PREM_02_USD"],
            symbol_groups: ["Silver*"],
            symbols: ["XAGUSD"],
            time: [],
          },
          margin: { level_type: "Fixed", leverage: 100 },
        }),
        serverIds: [10101, 10102, 10103, 10201, 10202],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 6,
        fileId: 5005,
        name: "MT4_Indices_US",
        ordering: 6,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: true,
          category: "Indices",
          filter: {
            groups: ["M_VIG_01_USD"],
            symbol_groups: ["US30*", "NAS100*", "SP500*"],
            symbols: [],
            time: [
              { from: "14:30", to: "21:00", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
            ],
          },
          margin: { level_type: "equity", levels: [{ from: null, to: 5000, leverage: 100 }, { from: 5000, to: 20000, leverage: 50 }, { from: 20000, to: 99999, leverage: 25 }] },
        }),
        serverIds: [10101, 10102, 10103, 10104, 10105, 10106, 10201, 10202, 10203, 10301, 10302, 10401, 10402, 10403, 10404],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 7,
        fileId: 5005,
        name: "MT4_Crypto_BTC",
        ordering: 7,
        definitionJson: JSON.stringify({
          enabled: false,
          scheduled: false,
          category: "Crypto",
          filter: {
            groups: ["M_CRYPTO_01"],
            symbol_groups: ["BTC*"],
            symbols: ["BTCUSD"],
            time: [],
          },
          margin: { level_type: "Fixed", leverage: 2 },
        }),
        serverIds: [],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 8,
        fileId: 5005,
        name: "MT4_Oil_WTI_News",
        ordering: 8,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: true,
          category: "Commodities",
          filter: {
            groups: ["M_VIG_01_USD", "M_VIG_02_USD"],
            symbol_groups: ["Oil*", "WTI*"],
            symbols: ["USOIL"],
            time: [
              { from: "13:30", to: "14:30", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
              { from: "18:00", to: "18:30", days: ["Wed"] },
            ],
          },
          margin: { level_type: "Fixed", leverage: 50 },
        }),
        serverIds: [10101, 10102, 10103, 10201, 10202, 10203],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 9,
        fileId: 5005,
        name: "MT4_EUR_Pairs_Default",
        ordering: 9,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: false,
          category: "Forex",
          filter: {
            groups: ["M_VIG_01_USD", "M_VIG_02_USD", "M_VIG_03_USD"],
            symbol_groups: ["EUR*"],
            symbols: [],
            time: [],
          },
          margin: { level_type: "Fixed", leverage: 200 },
        }),
        serverIds: [10101, 10102, 10103, 10201, 10202],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 12,
        fileId: 5005,
        name: "MT4_JPY_Pairs_News",
        ordering: 10,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: true,
          category: "Forex",
          filter: {
            groups: ["M_VIG_01_USD"],
            symbol_groups: ["*JPY"],
            symbols: ["USDJPY", "EURJPY", "GBPJPY"],
            time: [
              { from: "01:30", to: "02:30", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
              { from: "06:00", to: "07:00", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
            ],
          },
          margin: { level_type: "Fixed", leverage: 100 },
        }),
        serverIds: [10101, 10102, 10103],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 13,
        fileId: 5005,
        name: "MT4_Gold_Standard",
        ordering: 11,
        definitionJson: JSON.stringify({
          enabled: true,
          scheduled: false,
          category: "Gold",
          filter: {
            groups: ["M_VIG_01_USD", "M_VIG_02_USD", "M_PREM_01_USD"],
            symbol_groups: ["Gold*", "XAUUSD*"],
            symbols: ["XAUUSD"],
            time: [],
          },
          margin: { level_type: "Fixed", leverage: 100 },
        }),
        serverIds: [10101, 10102, 10103, 10201, 10202, 10203],
        modifiedAt: now,
        lastModifiedBy: user,
      },
      {
        id: 14, fileId: 5005, name: "MT4_AUD_Pairs_News", ordering: 12,
        definitionJson: JSON.stringify({ enabled: true, scheduled: true, filter: { groups: ["M_VIG_01_USD"], symbol_groups: ["*AUD"], symbols: ["AUDUSD", "AUDNZD"], accounts: [], time: [{ from: "00:30", to: "01:30", days: ["Mon","Tue","Wed","Thu","Fri"] }] }, margin: { level_type: "fixed", leverage: 100 } }),
        serverIds: [10101, 10102, 10201, 10301], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 15, fileId: 5005, name: "MT4_CHF_Pairs_News", ordering: 13,
        definitionJson: JSON.stringify({ enabled: false, scheduled: false, filter: { groups: ["M_VIG_02_USD"], symbol_groups: ["*CHF"], symbols: [], accounts: [], time: [] }, margin: { level_type: "fixed", leverage: 200 } }),
        serverIds: [10103, 10104, 10203], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 16, fileId: 5005, name: "MT4_Metals_Premium", ordering: 14,
        definitionJson: JSON.stringify({ enabled: true, scheduled: false, filter: { groups: ["M_PREM_01_USD", "M_PREM_02_USD"], symbol_groups: ["Gold*", "Silver*", "Platinum*"], symbols: [], accounts: [], time: [] }, margin: { level_type: "equity", levels: [{ from: 0, to: 10000, leverage: 500 }, { from: 10000, to: ".inf", leverage: 200 }] } }),
        serverIds: [10101, 10102, 10103, 10201, 10202], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 17, fileId: 5005, name: "MT4_SP500_News", ordering: 15,
        definitionJson: JSON.stringify({ enabled: true, scheduled: true, filter: { groups: ["M_VIG_01_USD"], symbol_groups: ["SP500*"], symbols: ["SP500"], accounts: [], time: [{ from: "14:30", to: "15:00", days: ["Mon","Tue","Wed","Thu","Fri"] }, { from: "20:55", to: "21:05", days: ["Mon","Tue","Wed","Thu","Fri"] }] }, margin: { level_type: "fixed", leverage: 50 } }),
        serverIds: [10101, 10102, 10103, 10104, 10201, 10301, 10401], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 18, fileId: 5005, name: "MT4_NAS100_News", ordering: 16,
        definitionJson: JSON.stringify({ enabled: true, scheduled: true, filter: { groups: ["M_VIG_01_USD"], symbol_groups: ["NAS100*"], symbols: [], accounts: [], time: [{ from: "14:30", to: "15:00", days: ["Mon","Tue","Wed","Thu","Fri"] }] }, margin: { level_type: "fixed", leverage: 50 } }),
        serverIds: [10101, 10102, 10201, 10301, 10401], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 19, fileId: 5005, name: "MT4_Crypto_ETH", ordering: 17,
        definitionJson: JSON.stringify({ enabled: false, scheduled: false, filter: { groups: ["M_CRYPTO_01"], symbol_groups: ["ETH*"], symbols: ["ETHUSD"], accounts: [], time: [] }, margin: { level_type: "fixed", leverage: 2 } }),
        serverIds: [], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 20, fileId: 5005, name: "MT4_WTI_Default", ordering: 18,
        definitionJson: JSON.stringify({ enabled: true, scheduled: false, filter: { groups: ["M_VIG_01_USD","M_VIG_02_USD"], symbol_groups: ["WTI*","Oil*"], symbols: [], accounts: [], time: [] }, margin: { level_type: "fixed", multiplier: 2 } }),
        serverIds: [10101, 10102, 10103, 10201, 10202, 10203, 10301, 10401], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 21, fileId: 5005, name: "MT4_GBP_Pairs_News", ordering: 19,
        definitionJson: JSON.stringify({ enabled: true, scheduled: true, filter: { groups: ["M_VIG_01_USD"], symbol_groups: ["*GBP","GBP*"], symbols: ["GBPUSD","GBPJPY","EURGBP"], accounts: [], time: [{ from: "07:00", to: "08:30", days: ["Mon","Tue","Wed","Thu","Fri"] }] }, margin: { level_type: "fixed", leverage: 100 } }),
        serverIds: [10101, 10102, 10103, 10104, 10201, 10202, 10301, 10401, 10402], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 22, fileId: 5005, name: "MT4_CAD_Pairs_News", ordering: 20,
        definitionJson: JSON.stringify({ enabled: true, scheduled: true, filter: { groups: ["M_VIG_01_USD"], symbol_groups: ["*CAD"], symbols: [], accounts: [], time: [{ from: "13:30", to: "14:00", days: ["Mon","Tue","Wed","Thu","Fri"] }] }, margin: { level_type: "fixed", leverage: 100 } }),
        serverIds: [10101, 10102, 10201, 10301, 10401], modifiedAt: now, lastModifiedBy: user,
      },
      {
        id: 23, fileId: 5005, name: "MT4_Equity_Default", ordering: 21,
        definitionJson: JSON.stringify({ enabled: true, scheduled: false, filter: { groups: ["M_VIG_01_USD","M_VIG_02_USD","M_VIG_03_USD"], symbol_groups: [], symbols: [], accounts: [], time: [] }, margin: { level_type: "equity", levels: [{ from: 0, to: 10000, leverage: 500 }, { from: 10000, to: 50000, leverage: 200 }, { from: 50000, to: 100000, leverage: 100 }, { from: 100000, to: ".inf", leverage: 50 }] } }),
        serverIds: [10101, 10102, 10103, 10104, 10105, 10106, 10107, 10108, 10109, 10110, 10111, 10112, 10113, 10114, 10115, 10116, 10117, 10201, 10202, 10203, 10204, 10205, 10206, 10207, 10208, 10209, 10210, 10211, 10212, 10213, 10214, 10215, 10301, 10302, 10303, 10304, 10305, 10306, 10307, 10308, 10309, 10401, 10402, 10403, 10404, 10405, 10406, 10407, 10408, 10409, 10410, 10411], modifiedAt: now, lastModifiedBy: user,
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
            groups: ["real\\M_VIG_01_USD", "real\\M_PREM_01_USD", "UNKNOWN_MT5_GROUP"],
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
            groups: ["real\\M_VIG_01_USD", "real\\M_VIG_02_USD"],
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

  let nextRuleId = 100;

  function createYamlRule(fileId, name, definitionJson, serverIds) {
    if (!yamlRulesByFileId[fileId]) yamlRulesByFileId[fileId] = [];
    const rules = yamlRulesByFileId[fileId];
    const newRule = {
      id: nextRuleId++,
      fileId,
      name,
      ordering: rules.length + 1,
      definitionJson: definitionJson || JSON.stringify({ enabled: true, scheduled: false, category: "Other", filter: { groups: [], symbol_groups: [], symbols: [], time: [] }, margin: { level_type: "Fixed", leverage: 200 } }),
      serverIds: serverIds || [],
      modifiedAt: new Date().toISOString(),
      lastModifiedBy: user,
    };
    rules.push(newRule);
    return newRule;
  }

  function deleteYamlRule(fileId, ruleId) {
    const rules = yamlRulesByFileId[fileId];
    if (!rules) return false;
    const idx = rules.findIndex((r) => r.id === ruleId);
    if (idx === -1) return false;
    rules.splice(idx, 1);
    return true;
  }

  function updateYamlRule(fileId, ruleId, name, definitionJson, serverIds) {
    const rules = yamlRulesByFileId[fileId];
    if (!rules) return null;
    const rule = rules.find((r) => r.id === ruleId);
    if (!rule) return null;
    if (name !== undefined) rule.name = name;
    if (definitionJson !== undefined) rule.definitionJson = definitionJson;
    if (serverIds !== undefined) rule.serverIds = serverIds;
    rule.modifiedAt = new Date().toISOString();
    return rule;
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
    createYamlRule,
    deleteYamlRule,
    updateYamlRule,
    getIniParameters,
  };
})();
