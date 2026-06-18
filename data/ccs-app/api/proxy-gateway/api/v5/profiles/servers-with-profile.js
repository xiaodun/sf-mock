(function () {
  // GET /api/v5/profiles/servers-with-profile?mtVersion=5 — Add Brand/Server modal source.
  // All servers grouped by brand, each annotated with its currently-assigned profile
  // (profileId/profileName null when unassigned). serverIds align with the rule mocks.
  return (data) => {
    return {
      status: 200,
      data: {
        data: [
          {
            brand: "Alpha Markets",
            servers: [
              {
                serverId: 1,
                serverName: "MT5-Alpha-Live",
                profileId: 101,
                profileName: "Default DL Profile",
              },
              {
                serverId: 2,
                serverName: "MT5-Alpha-Demo",
                profileId: 101,
                profileName: "Default DL Profile",
              },
            ],
          },
          {
            brand: "Beta Brokers",
            servers: [
              {
                serverId: 3,
                serverName: "MT5-Beta-Live",
                profileId: 101,
                profileName: "Default DL Profile",
              },
              {
                serverId: 4,
                serverName: "MT5-Beta-Demo",
                profileId: null,
                profileName: null,
              },
            ],
          },
          {
            brand: "Gamma Trading",
            servers: [
              {
                serverId: 5,
                serverName: "MT5-Gamma-Live",
                profileId: 202,
                profileName: "High Risk Profile",
              },
              {
                serverId: 6,
                serverName: "MT5-Gamma-Demo",
                profileId: null,
                profileName: null,
              },
            ],
          },
          {
            brand: "Delta FX",
            servers: [
              {
                serverId: 10,
                serverName: "MT4-Delta-Live",
                profileId: 303,
                profileName: "MT4 Standard Profile",
              },
              {
                serverId: 11,
                serverName: "MT4-Delta-Demo",
                profileId: 303,
                profileName: "MT4 Standard Profile",
              },
              {
                serverId: 12,
                serverName: "MT4-Delta-ECN",
                profileId: 303,
                profileName: "MT4 Standard Profile",
              },
            ],
          },
          {
            brand: "Epsilon Markets",
            servers: [
              {
                serverId: 13,
                serverName: "MT4-Epsilon-Live",
                profileId: 303,
                profileName: "MT4 Standard Profile",
              },
              {
                serverId: 14,
                serverName: "MT4-Epsilon-Demo",
                profileId: null,
                profileName: null,
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
