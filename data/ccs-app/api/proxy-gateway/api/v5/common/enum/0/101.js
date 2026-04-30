(function () {
  return (data) => {
    // GET /api/v5/common/enum/0/101 — Approval enum (version=0, module=APPROVAL=101)
    // Consumed by useApprovalEnum → PermissionContext
    // Shape: IApprovalEnumData { approvalModules, approvalStates }
    return {
      status: 200,
      data: {
        data: {
          approvalModules: [
            { key: "1", label: "Group" },
            { key: "2", label: "Symbol" },
            { key: "3", label: "Order" },
            { key: "4", label: "Plugin" },
          ],
          approvalStates: [
            { key: "0", label: "Pending" },
            { key: "1", label: "Approved" },
            { key: "2", label: "Rejected" },
            { key: "3", label: "Recalled" },
            { key: "4", label: "Expired" },
          ],
        },
      },
    };
  };
})();
