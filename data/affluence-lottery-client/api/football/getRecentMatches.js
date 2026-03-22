(function () {
  return (data) => {
    const date = data.params?.date || data.params?.startDate || '2026-03-21'
    const list = [
      {
        matchId: 2038601,
        code: '6008',
        date,
        game: '首尔FC vs 光州FC',
        win: 1.95,
        draw: 3.3,
        lose: 3.75,
        halfDesc: '2:0',
        scoreDesc: '4:0'
      },
      {
        matchId: 2038602,
        code: '7002',
        date,
        game: '大阪樱花 vs 神户胜利',
        win: 2.05,
        draw: 3.25,
        lose: 3.2,
        halfDesc: '1:0',
        scoreDesc: '2:1'
      },
      {
        matchId: 2038603,
        code: '7005',
        date,
        game: '浦和红钻 vs 町田泽维',
        win: 2.45,
        draw: 3.05,
        lose: 2.58,
        halfDesc: '0:1',
        scoreDesc: '2:3'
      },
      {
        matchId: 2038604,
        code: '7012',
        date,
        game: '珀斯 vs 墨尔本城',
        win: 2.85,
        draw: 3.1,
        lose: 2.22,
        halfDesc: '0:0',
        scoreDesc: '1:1'
      }
    ]
    return {
      success: true,
      list
    }
  }
})();
