(function () {
  return (data) => {
    // Control row count via URL query param: ?count=50000 (default 600)
    // e.g. in browser network tab, the mock server URL supports ?count=100000
    const qstr = (data.req.url.split("?")[1] || "");
    const qparams = Object.fromEntries(
      qstr.split("&").filter(Boolean).map(p => {
        const [k, v] = p.split("=");
        return [decodeURIComponent(k), decodeURIComponent(v || "")];
      })
    );
    const count = Math.min(parseInt(qparams.count || "600", 10), 200000);

    // Base time: 2025-10-15T10:30:00.000Z
    const base = 1760524200000;
    const ticks = [];
    let bid = 1.14735;
    let ask = 1.14749;
    let last = 1.14743;
    for (let i = 0; i < count; i++) {
      bid += (Math.random() - 0.5) * 0.00004;
      ask = bid + 0.00013 + Math.random() * 0.00004;
      last = bid + 0.00005 + (Math.random() - 0.5) * 0.00006;
      ticks.push({
        datetime: new Date(base + i * 1000 + Math.floor(Math.random() * 900)).toISOString(),
        bid: Math.round(bid * 100000) / 100000,
        ask: Math.round(ask * 100000) / 100000,
        last: Math.round(last * 100000) / 100000,
        volume: Math.floor(Math.random() * 100),
        volumeExt: 0,
        flags: [2, 4, 130, 134][Math.floor(Math.random() * 4)],
      });
    }
    return {
      data: {
        data: ticks,
      },
    };
  };
})();
