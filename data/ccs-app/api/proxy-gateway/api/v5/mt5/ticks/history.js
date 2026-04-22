(function () {
  return (data) => {
    // Base time: 2025-10-15T10:30:00.000Z = 1760524200000
    const base = 1760524200000;
    const ticks = [];
    let bid = 1.14735;
    let ask = 1.14749;
    let last = 1.14743;
    for (let i = 0; i < 600; i++) {
      bid += (Math.random() - 0.5) * 0.00004;
      ask = bid + 0.00013 + Math.random() * 0.00004;
      last = bid + 0.00005 + (Math.random() - 0.5) * 0.00006;
      ticks.push({
        datetime: new Date(base + i * 1000 + Math.floor(Math.random() * 900)).toISOString(),
        bid: Math.round(bid * 100000) / 100000,
        ask: Math.round(ask * 100000) / 100000,
        last: Math.round(last * 100000) / 100000,
        volume: 0,
        volumeExt: 0,
        flags: [2, 4, 130, 134][Math.floor(Math.random() * 4)]
      });
    }
    return {
      "data": {
        "data": ticks
      }
    };
  };
})();
