(function () {
  let callCount = 0;

  return (data) => {
    callCount++;

    const price = callCount === 1 ? 1.08700 : 1.08850;

    return {
      data: {
        data: {
          "deal": 5976014,
          "login": 85003439,
          "order": 100014920,
          "dealer": 0,
          "symbol": "EURUSD",
          "digits": 5,
          "digitsCurrency": 2,
          "contractSize": 100000,
          "action": 1,
          "entry": 1,
          "time": "2026-03-27T06:38:41.387+00:00",
          "timeMsc": 1743054721387,
          "price": price,
          "volume": 1.00,
          "volumeExt": 1.00,
          "profit": -160.00,
          "profitRaw": -160.00,
          "storage": 0,
          "commission": 0,
          "fee": 0,
          "value": 0,
          "rateProfit": 1,
          "rateMargin": 1,
          "expertID": 0,
          "positionID": 99992100,
          "comment": "manual",
          "flags": 0,
          "pricePosition": 1.08523,
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
          "marketBid": 1.08698,
          "marketAsk": 1.08702,
          "marketLast": 0,
          "externalID": "",
          "existsPendingApproval": false,
          "_callCount": callCount,
          "_note": "call #" + callCount + ": price=" + price
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
