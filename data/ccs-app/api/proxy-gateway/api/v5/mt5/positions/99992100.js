(function () {
  let callCount = 0;

  return (data) => {
    callCount++;

    // 第1次返回 priceOpen=1.08523，后续返回 priceOpen=1.08700
    // 用于复现 formInitRef 屏蔽 background refetch 更新的 bug
    const priceOpen = Math.random();
    const priceCurrent = callCount === 1 ? 1.08761 : 1.08950;

    return {
      data: {
        data: {
          "position": 99992100,
          "login": 85003439,
          "symbol": "EURUSD",
          "digits": 5,
          "digitsCurrency": 2,
          "contractSize": 100000,
          "action": 0,
          "volumeInLots": 1.00,
          "volumeGatewayExt": 1.00,
          "priceOpen": priceOpen,
          "priceCurrent": priceCurrent,
          "priceSL": 1.08000,
          "priceTP": 1.09500,
          "priceGateway": 1.08523,
          "actionGateway": 0,
          "reason": 0,
          "storage": -3.20,
          "profit": 238.00,
          "rateProfit": 1,
          "rateMargin": 1,
          "dealer": 0,
          "expertID": 0,
          "expertPositionID": 0,
          "comment": "manual",
          "externalID": "",
          "timeCreate": 1743033600,
          "timeCreateMsc": 1743033600000,
          "timeUpdate": 1743076800,
          "timeUpdateMsc": 1743076800000,
          "activationMode": 0,
          "activationTime": 0,
          "activationPrice": 0,
          "activationFlags": "",
          "modificationFlags": "None",
          "isHistory": false,
          "existsPendingApproval": false,
          "_callCount": callCount,
          "_note": "call #" + callCount + ": priceOpen=" + priceOpen
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
