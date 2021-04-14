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
        /**
         * 用于将请求中的参数转换为mock服务器内部使用的参数
         */
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
              /**
               * 仅限于1或者0  表示第一页的起始数
               * 这个值会参与分页数据的截取 如果defaultValue的为1,将会对客户端传来的页数减一，为0则不作处理
               */
              defaultValue: 1,
            },
          ],
        ]);
      },
      getWrapContext(data) {
        /**
         * 包裹成客户端需要的分页格式
         */
        return {
          nextPageNum: data.nextPage || null,
          pageNum: data.page,
          pageSize: data.size,
          rows: data.rows || [],
          total: data.total,
          totalPage: data.totalPage,
        };
      },
    },
  };
})();
