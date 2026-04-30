(function () {
  return (data) => {
    // POST /api/v5/mt5/ticket/resolve
    // body: { serverId, ticket, ticketType, login? }
    // Returns: { positionTicket, login, symbol }
    //
    // deal 5975991 → position 99992100, login 85003439, symbol EURUSD
    // deal 5976014 → position 99992100, login 85003439, symbol EURUSD
    // position 99992100 → positionTicket 99992100 (self-resolve)
    const ticket = data?.body?.ticket ?? data?.query?.ticket;
    const ticketType = data?.body?.ticketType ?? data?.query?.ticketType;

    if (ticketType === "position") {
      return {
        data: {
          data: {
            "positionTicket": ticket ?? 99992100,
            "login": 85003439,
            "symbol": "EURUSD"
          },
          "message": "success"
        },
        "status": 200,
        "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
      };
    }

    // deal or order → resolve to position 99992100
    return {
      data: {
        data: {
          "positionTicket": 99992100,
          "login": 85003439,
          "symbol": "EURUSD"
        },
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();
