(function () {
  return {
    mockData: {
      response: {
        delaySeconds: 0,
      },
      options: {
        ingoreMethod: true,
      },
    },
    pageSettings: {
      getParamMap() {
        return new Map([
          [
            "size",
            {
              reqKey: "pageSize",
              defaultValue: 10,
            },
          ],
          [
            "page",
            {
              reqKey: "pageNum",
              defaultValue: 1,
            },
          ],
        ]);
      },
      getWrapContext(data) {
        return {
          nextPageNum: data.nextPageNum,
          pageNum: data.page,
          pageSize: data.size,
          rows: data.rows,
          total: data.total,
          totalPage: data.totalPage,
        };
      },
    },
  };
})();
