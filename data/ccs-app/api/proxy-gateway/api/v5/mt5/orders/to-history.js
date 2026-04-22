module.exports = (function () {
  return (data) => {
    const body = data.body || data.params || {};
    const { serverId, tickets } = body;

    // Simulate an error for testing
    // You can comment this out to return to success mode
    /*
    if (tickets && tickets.length > 0) {
      const details = tickets.map((ticket, index) => {
        // Make the first one succeed, and the rest fail
        if (index === 0) {
          return {
            id: ticket,
            isSuccess: true,
            message: "Success"
          };
        } else {
          return {
            id: ticket,
            isSuccess: false,
            message: `Validation failed for order #${ticket}: Margin requirements not met.`
          };
        }
      });

      return {
        status: 422,
        data: {
          code: 422,
          message: "Validation failed for some orders",
          data: {
            totalCount: tickets.length,
            sucessCount: 1,
            failedCount: tickets.length - 1,
            details: details
          }
        }
      };
    }
    */

    // Direct execution
    const count = Array.isArray(tickets) ? tickets.length : 1;
    return {
      status: 200,
      data: {
        code: 0,
        message: "Success",
        data: {
          totalCount: count,
          sucessCount: count,
          failedCount: 0,
          details: (Array.isArray(tickets) ? tickets : []).map(ticket => ({
            id: ticket,
            isSuccess: true,
            message: "Success"
          }))
        }
      }
    };
  };
})();
