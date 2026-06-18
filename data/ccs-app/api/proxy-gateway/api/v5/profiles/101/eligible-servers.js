(function () {
  // GET /api/v5/profiles/101/eligible-servers
  // Brand → Server → Instances tree for Generate & Sync dialog.
  return (data) => {
    return {
      status: 200,
      data: {
        data: [
          {
            brandName: "Alpha Markets",
            servers: [
              {
                serverName: "MT5-Alpha-Live",
                instances: [
                  {
                    instanceId: "inst-001",
                    ec2InstanceId: "i-0a1b2c3d4e5f60001",
                    isMainServer: true,
                    isBackupServer: false,
                    hasDynamicLeveragePlugin: true,
                    sampledAt: "2026-06-05T08:00:00Z",
                    serviceStateDisplay: "Running",
                  },
                  {
                    instanceId: "inst-002",
                    ec2InstanceId: "i-0a1b2c3d4e5f60002",
                    isMainServer: false,
                    isBackupServer: true,
                    hasDynamicLeveragePlugin: true,
                    sampledAt: "2026-06-05T08:00:00Z",
                    serviceStateDisplay: "Running",
                  },
                ],
              },
              {
                serverName: "MT5-Alpha-Demo",
                instances: [
                  {
                    instanceId: "inst-003",
                    ec2InstanceId: "i-0a1b2c3d4e5f60003",
                    isMainServer: true,
                    isBackupServer: false,
                    hasDynamicLeveragePlugin: false,
                    sampledAt: "2026-06-05T08:00:00Z",
                    serviceStateDisplay: "Stopped",
                  },
                ],
              },
            ],
          },
          {
            brandName: "Beta Brokers",
            servers: [
              {
                serverName: "MT5-Beta-Live",
                instances: [
                  {
                    instanceId: "inst-004",
                    ec2InstanceId: "i-0a1b2c3d4e5f60004",
                    isMainServer: true,
                    isBackupServer: false,
                    hasDynamicLeveragePlugin: true,
                    sampledAt: "2026-06-05T08:00:00Z",
                    serviceStateDisplay: "Running",
                  },
                ],
              },
            ],
          },
        ],
        code: "0",
        message: "success",
      },
    };
  };
})();
