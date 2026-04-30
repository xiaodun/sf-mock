(function () {
  let callCount = 0;

  return (data) => {
    callCount++;

    // 第1次返回 price=1.08523，后续请求（background refetch / Refresh Data）
    // 返回 price=1.08700，用于复现 formInitRef 屏蔽 deal form 更新的 bug。
    const price = Math.random();
    const pricePosition = callCount === 1 ? 1.08523 : 1.08700;

    return {
      data: {
        data: {
          "deal": 5975991,
          "login": 85003439,
          "order": 100014919,
          "dealer": 0,
          "symbol": "EURUSD",
          "digits": 5,
          "digitsCurrency": 2,
          "contractSize": 100000,
          "action": 0,
          "entry": 0,
          "time": "2026-03-27T06:38:38.787+00:00",
          "timeMsc": 1743054718787,
          "price": price,
          "volume": 1.00,
          "volumeExt": 1.00,
          "profit": 238.00,
          "profitRaw": 238.00,
          "storage": -3.20,
          "commission": 0,
          "fee": 0,
          "value": 0,
          "rateProfit": 1,
          "rateMargin": 1,
          "expertID": 0,
          "positionID": 99992100,
          "comment": "manual",
          "flags": 0,
          "pricePosition": pricePosition,
          "tickValue": 1,
          "tickSize": 0.00001,
          "volumeClosed": 1.00,
          "volumeClosedExt": 1.00,
          "priceSL": 0,
          "priceTP": 0,
          "gateway": "",
          "volumeGateway": 0,
          "priceGateway": 0,
          "modificationFlags": "None",
          "reason": 0,
          "marketBid": 1.08700,
          "marketAsk": 1.08702,
          "marketLast": 0,
          "externalID": "",
          "existsPendingApproval": false,
          "_callCount": callCount,
          "_note": `call #${callCount}: price=${price}`
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": {
        "expiresAt": 1777631157000,
        "isValid": true
      }
    };
  };
})();
