(function () {
  // GET /api/v5/profiles/dynamic-leverage-yaml-files?mtVersion=5&pluginId=10
  // Returns deployed YAML rule files for "Import from YAML file" flow.
  return (data) => {
    return {
      status: 200,
      data: {
        data: [
          {
            fileId: 1,
            versionId: 100,
            pluginId: 10,
            pluginName: "DynamicLeverage",
            versionTag: "v2.1.0",
            fileName: "dynamic_leverage_rules.yml",
            label: "dynamic_leverage_rules.yml v2.1.0",
          },
          {
            fileId: 2,
            versionId: 101,
            pluginId: 10,
            pluginName: "DynamicLeverage",
            versionTag: "v2.0.5",
            fileName: "dynamic_leverage_rules.yml",
            label: "dynamic_leverage_rules.yml v2.0.5",
          },
          {
            fileId: 3,
            versionId: 200,
            pluginId: 11,
            pluginName: "DynamicLeverage_Pro",
            versionTag: "v1.3.0",
            fileName: "dl_pro_rules.yml",
            label: "dl_pro_rules.yml v1.3.0",
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
