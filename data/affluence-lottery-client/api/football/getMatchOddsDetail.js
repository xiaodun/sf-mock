(function () {
  return (data) => {
    const input = data.params?.matchIds || data.params?.matchId || []
    const ids = Array.isArray(input)
      ? input.map((item) => `${item}`.trim()).filter(Boolean)
      : `${input || ''}`.split(',').map((item) => item.trim()).filter(Boolean)
    const mapping = {
      '2038601': {
        handicapDesc: '(+1)胜',
        handicap: 1.96,
        scoreDesc: '5:0',
        score: 21,
        goalDesc: '4',
        goal: 5.9,
        singleDesc: '胜',
        single: 1.95,
        halfDesc: '胜平',
        half: 3.1
      },
      '2038602': {
        handicapDesc: '(+1)平',
        handicap: 3.45,
        scoreDesc: '3:1',
        score: 8.6,
        goalDesc: '4',
        goal: 3.5,
        singleDesc: '胜',
        single: 2.05,
        halfDesc: '胜平',
        half: 5.1
      },
      '2038603': {
        handicapDesc: '(-1)负',
        handicap: 1.92,
        scoreDesc: '2:3',
        score: 30,
        goalDesc: '4',
        goal: 8.8,
        singleDesc: '负',
        single: 2.58,
        halfDesc: '负胜',
        half: 16
      },
      '2038604': {
        handicapDesc: '(+1)胜',
        handicap: 1.64,
        scoreDesc: '平其他',
        score: 6.8,
        goalDesc: '1',
        goal: 3.2,
        singleDesc: '平',
        single: 3.1,
        halfDesc: '平平',
        half: 5.5
      }
    }
    const result = {}
    ids.forEach((id) => {
      if (mapping[id]) {
        result[id] = mapping[id]
      }
    })
    return {
      success: true,
      data: result
    }
  }
})();
