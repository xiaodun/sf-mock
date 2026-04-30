(function () {
  return (data) => {
    // POST /api/v5/mt5/ticket/position
    // Returns: { position: IMT5TicketTreePosition }
    return {
      data: {
        data: {
          "position": {
            "positionTicket": 99992100,
            "login": 85003439,
            "symbol": "EURUSD",
            "action": "Buy",
            "volume": 1.00,
            "volumeExt": 1.00,
            "volumeGatewayExt": 1.00,
            "priceOpen": "1.08523",
            "priceCurrent": 1.08761,
            "priceSL": 1.08000,
            "priceTP": 1.09500,
            "priceGateway": 0,
            "storage": -3.20,
            "profit": 238.00,
            "timeCreate": "2026-03-27T06:38:38.787+00:00",
            "timeCreateMsc": "2026-03-27T06:38:38.787+00:00",
            "timeUpdate": "2026-03-27T18:40:00.000+00:00",
            "timeUpdateMsc": "2026-03-27T18:40:00.000+00:00",
            "reason": "Client",
            "comment": "manual",
            "digits": 5,
            "digitsCurrency": 2,
            "contractSize": 100000,
            "rateMargin": 1,
            "rateProfit": 1,
            "externalID": "",
            "expertID": 0,
            "expertPositionID": 0,
            "activationMode": 0,
            "activationTime": "",
            "activationPrice": 0,
            "activationFlags": "",
            "modificationFlags": "None",
            "actionGateway": 0,
            "dealer": 0,
            "isHistory": false
          }
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
