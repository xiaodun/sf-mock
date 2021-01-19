(function getApis() {
  return {
    '/api/hero/list': '../json/heroList.json',
    '/api/hero/\\d+': {
      supportRegexp: true,
      get: {
        success: true,
        data: {
          name: "klo"
        }
      }
    },
    '/api/hero': {
      get: {
        success: true,
        code: '200',
        message: '',
        data: [],
      },
      post: {
        success: true,
        code: '200',
        message: '',
        data: {
          name:
        },
      },
    },
    '/api/hero/history': {
      success: true,
      code: '200',
      message: '',
      data: {
        time: "",
        content: ""
      },
    }
  };
})();
