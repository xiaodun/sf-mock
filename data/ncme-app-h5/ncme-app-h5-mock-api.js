const { random } = require("lodash");

(function getApis() {
  const total = 100;
  const pageSize = 10;
  return {
    "/medic-h5/v1/api/medic/h5/prefecture/prefectureShareConfig": {
      body: {
        data: [
          {
            desc: "简介",
            footDesc: "下部的文字说明",
            iconUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            logoUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            shareLink: "下部的文字说明",
            sharePlatform: "weChat",
            sharePlatformIcon:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            sharePlatformName: "",
            title: "clakjhsal",
          },
        ],
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getTopicDetails": {
      body: {
        data: {
          contentType: 0,
          id: 0,
          title: "说大话卡戴珊",
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getTopicCoursesList": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize,
          rows: [
            ...Array(pageSize)
              .fill(1)
              .map((item, index) => ({
                classHour: 10,
                coursesType: 1,
                coverUrl:
                  "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                id: Math.random(),
                linkUrl: 123,
                speakerIntroduce: "直播列表讲者介绍",
                status: 1,
                studyNumber: 1,
                title: "课程标题",
                videoDuration: 0,
                videoSource: 1,
              })),
          ],
          total,
          totalPage: 0,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getTopicArticleList": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize,
          rows: [
            ...Array(pageSize)
              .fill(1)
              .map((item, index) => ({
                articleSource: 8,
                articleUrl: "https://www.wenwo.com",
                commentNum: 1,
                content: "内容",
                cover:
                  "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                id: Math.random(),
                isLike: true,
                likeNum: 1,
                linkUrl: "",
                logoUrl: "",
                publishDate: "2020-10-15 07:03",
                publishTime: "2020-10-15 07:03:37",
                readNum: 0,
                realReadNum: 0,
                showContent: "",
                state: 127,
                subjectNameList: [],
                title: "标题",
              })),
          ],
          total,
          totalPage: 0,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getTopicLiveList": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize,
          rows: [
            ...Array(pageSize)
              .fill(1)
              .map((item, index) => ({
                cover:
                  "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                id: Math.random(),
                roomId: "132321",
                secondIntroduce: "建立军事打击和",
                speakerDic: "assault",
                hasSubscribe: Math.random() > 0.5 ? true : false,
                speakerList: [
                  {
                    heardImg:
                      "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                    hospitalName: "协和",
                    id: 0,
                    speakerIntroduce: "测试",
                    speakerName: "王大船",
                    speakerTitles: "主任",
                  },
                ],
                startTime: 0,
                studyNum: 0,
                title: "标题",
              })),
          ],
          total,
          totalPage: 0,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getNewestArticleList": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            ...Array(1)
              .fill(1)
              .map(() => ({
                articleSource: 8,
                articleUrl: "https://www.wenwo.com",
                commentNum: 1,
                content: "内容",
                cover:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
                id: 1,
                isFavorites: true,
                isLike: true,
                likeNum: 1,
                logoUrl: "",
                publishDate: "2020-10-15 07:03",
                publishTime: "2020-10-15 07:03:37",
                readNum: 0,
                realReadNum: 0,
                showContent: "",
                state: 127,
                subjectNameList: [],
                title: "标题",
              })),
          ],
          total: 0,
          totalPage: 0,
        },
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getNewestCoursesList": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            ...Array(1)
              .fill(1)
              .map(() => ({
                classHour: 0,
                coursesType: 1,
                coverUrl:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
                id: 1,
                introduce: "课程介绍",
                linkUrl: 123,
                speakerIntroduce: "直播列表讲者介绍",
                status: 1,
                studyNumber: 1,
                title: "课程标题",
                videoDuration: 0,
                videoSource: 1,
              })),
          ],
          total: 0,
          totalPage: 0,
        },
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getNewestLiveList": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              cover:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              hasSubscribe: true,
              id: 21332,
              linkUrl: "",
              liveStatus: 6,
              roomId: "2123123",
              secondIntroduce: "二九五七零九二五六块钱2",
              speakerDic: "",
              speakerList: [
                {
                  heardImg: "",
                  hospitalName: "主任",
                  id: 0,
                  speakerIntroduce: "按时到货就卡死的活动撒看见",
                  speakerName: "罗永浩",
                  speakerTitles: "",
                },
              ],
              startTime: 0,
              studyNum: 100,
              title: "回放",
            },
            ...Array(1)
              .fill(1)
              .map(() => ({
                cover:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
                id: 1,
                roomId: "21213",
                secondIntroduce: "",
                hasSubscribe: false,
                speakerDic: "",
                speakerList: [
                  {
                    heardImg: "",
                    hospitalName: "",
                    id: 0,
                    speakerIntroduce: "",
                    speakerName: "",
                    speakerTitles: "",
                  },
                ],
                startTime: 0,
                studyNum: 0,
                title: "标题",
              })),
          ],
          total: 0,
          totalPage: 0,
        },
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/prefectureBannerIcon": {
      body: {
        status: 200,
        message: "",
        data: {
          bannerTabContentInfos: [
            {
              id: 1091,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/78e899d7191a03715b6bfc2cd72ccc35",
              url: "https://www.baidu.com/?tn=88093251_41_hao_pg",
              name: "",
              type: "",
              sort: 1,
              time: 3,
              skip: false,
            },
            {
              id: 1092,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/8e55bacf1dc21b656b836f34e22426b4",
              url: "https://www.sina.com",
              name: "",
              type: "",
              sort: 2,
              time: 3,
              skip: false,
            },
            {
              id: 1093,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/8a902e7a8df14cc17619a2b410097d72",
              url: "https://www.hao123.com",
              name: "",
              type: "",
              sort: 3,
              time: 3,
              skip: false,
            },
            {
              id: 1094,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/ee0ceaf867c58e879973503d5e404f3a",
              url: "https://www.51cto.com",
              name: "",
              type: "",
              sort: 4,
              time: 3,
              skip: false,
            },
            {
              id: 1095,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/8486d1ea204cf14d01588013688be7cb",
              url: "https://www.pypypy.cn",
              name: "",
              type: "",
              sort: 5,
              time: 3,
              skip: false,
            },
          ],
          iconTabContentInfos: [
            {
              id: 1097,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/b9ceb3115e1cba2e9fd483d97bb201c6",
              url: "http://ncme.test.wenwo.com/h5/topic/courses/24",
              name: "专区课程",
              type: "",
              sort: 1,
              time: 3,
              skip: false,
            },
            {
              id: 1098,
              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/b9ceb3115e1cba2e9fd483d97bb201c6",
              url: "http://ncme.test.wenwo.com/h5/topic/live/2",
              name: "专区直播",
              type: "",
              sort: 2,
              time: 3,
              skip: false,
            },
            {
              id: 3,
              // image:
              //   "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",

              image:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/8e55bacf1dc21b656b836f34e22426b4",
              url: "http://10.210.2.133:8085/h5/topic/courses/1",
              name: "课程3",
              type: "",
              sort: 3,
              time: 3,
              skip: false,

              // id: 1099,
              // image:
              //   "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/8e55bacf1dc21b656b836f34e22426b4",
              // url: "http://ncme.test.wenwo.com/h5/topic/article/5",
              // name: "专区文章",
              // type: "",
              // sort: 3,
              // time: 3,
              // skip: false,
            },
            {
              id: 4,
              image:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              name: "课程",
              skip: true,
              sort: 1,
              time: 1,
              type: "ios_1x",
              url: "http://10.210.2.133:8085/h5/topic/courses/1",
              // id: 1100,
              // image:
              //   "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/04a73b8b26f90f09d5b28144de220761",
              // url: "https://www.baidu.com/?tn=88093251_41_hao_pg",
              // name: "icon四",
              // type: "",
              // sort: 4,
              // time: 3,
              // skip: true,
            },
            // {
            //   id: 16,
            //   image:
            //     "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
            //   name: "课程",
            //   skip: true,
            //   sort: 1,
            //   time: 1,
            //   type: "ios_1x",
            //   url: "http://10.210.2.133:8085/h5/topic/courses/1",
            // },
          ],
        },

        // data: {
        //   bannerTabContentInfos: [
        //     {
        //       id: 1,
        //       image:
        //         "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
        //       url: "https://www.wenwo.com",
        //       name: "名称",
        //       type: "ios_1x",
        //       sort: 1,
        //       time: 1,
        //       skip: true,
        //     },
        //     {
        //       id: 2,
        //       image:
        //         "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
        //       name: "名称",
        //       skip: true,
        //       sort: 1,
        //       time: 1,
        //       type: "ios_1x",
        //       url: "https://www.wenwo.com",
        //     },
        //   ],
        //   iconTabContentInfos: [
        //     {
        //       id: 1,
        //       image:
        //         "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
        //       url: "http://10.210.2.133:8085/h5/topic/article/1",
        //       name: "咨询",
        //       type: "ios_1x",
        //       sort: 1,
        //       time: 1,
        //       skip: true,
        //     },
        //     {
        //       id: 2,
        //       image:
        //         "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
        //       name: "直播",
        //       skip: true,
        //       sort: 1,
        //       time: 1,
        //       type: "ios_1x",
        //       url: "http://10.210.2.133:8085/h5/topic/live/1",
        //     },
        //     {
        //       id: 3,
        //       image:
        //         "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
        //       name: "课程",
        //       skip: true,
        //       sort: 1,
        //       time: 1,
        //       type: "ios_1x",
        //       url: "http://10.210.2.133:8085/h5/topic/courses/1",
        //     },
        //     {
        //       id: 4,
        //       image:
        //         "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
        //       name: "课程",
        //       skip: true,
        //       sort: 1,
        //       time: 1,
        //       type: "ios_1x",
        //       url: "http://10.210.2.133:8085/h5/topic/courses/1",
        //     },
        //   ],
        // },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/prefecture/getPrefectureDetails": {
      body: {
        data: {
          coverUrl:
            "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
          deleteTime: "",
          id: 0,
          introduce:
            "qweeeeeeeeee请问呃13爱的大神速度撒旦2爱上大大地上qweeeeeeeeee请问呃13爱的大神速度撒旦2爱上大大地上qweeeeeeeeee请问呃13爱的大神速度撒旦2爱上大大地上",
          name: "中文标题",
          putTime: "2020-03-22",
          status: 1,
        },
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/courses/moreCoursesListPage": {
      pageable: true,
      getData() {
        return Array(51)
          .fill(1)
          .map((item, index) => ({
            classHour: 10,
            coursesType: 1,
            coverUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            id: index,
            introduce: `课程介绍课程介绍课程介绍课程介绍课程介绍`,
            liveSpeakerIntroduce: `${index}直播列表讲者介绍`,
            status: 1,
            studyNumber: 1200001,
            title: "课程标题课程标题课程标题课程标题课程标题",
          }));
      },
      body(data) {
        return {
          data: data.pageInfos.wrapData,
          message: "",
          status: 200,
        };
      },
    },
    "/medic-h5/v1/api/medic/h5/weixin/getWeiXinJsApiConfig": {
      body: {
        data: {
          appId: "ddaadsads",
          nonceStr: "sdadasa",
          signature: "asdsdaasdas",
          timestamp: 0,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/courses/getCoursesBannerList": {
      body: {
        data: [
          {
            addressUrl: "/h5/courseDetail/34?coursesType=1",
            coverUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            id: 1,
            secondIntroduce: "",
            title: "标题",
          },
          {
            addressUrl: "/h5/courseDetail/34?coursesType=1",
            coverUrl:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg",
            id: 2,
            secondIntroduce: "",
            title: "标题",
          },
          {
            addressUrl: "/h5/courseDetail/34?coursesType=1",
            coverUrl:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F41%2F37%2F01300000169980121904374291568.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618984585&t=5bf40c2187407ef06610ee9c20937f99",
            id: 3,
            secondIntroduce: "",
            title: "标题",
          },
        ],
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/courses/recommendCoursesList": {
      body: {
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            ...Array(10)
              .fill(1)
              .map((item) => ({
                classHour: 10,
                coursesType: 1,
                coverUrl:
                  "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                id: Math.random(),
                introduce: `${item}课程介绍课程介绍课程介绍课程介绍课程介绍`,
                liveSpeakerIntroduce: "直播列表讲者介绍",
                status: 1,
                studyNumber: 1200001,
                title: "课程标题课程标题课程标题课程标题课程标题",
              })),
          ],
          total: 100,
          totalPage: 0,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/courses/coursesList": {
      body: {
        data: {
          nextPageNum: 0,
          pageNum: 1,
          pageSize: 20,
          rows: Array(20)
            .fill(1)
            .map((item) => ({
              classHour: 0,
              coursesType: 1,
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              id: Math.random(),
              introduce: "课程介绍",
              liveSpeakerIntroduce: "直播列表讲者介绍",
              seriesId: 1,
              status: 1,
              studioId: 1,
              studyNumber: 1,
              thirdStudioId: "60418c9373fb104ee4bb4a4d",
              title: "课程标题",
              videoDuration: 0,
              videoSource: 1,
            })),
          total: 100,
          totalPage: 0,
        },
        message: "",
        status: 200,
      },
    },

    "/medic-h5/v1/api/v1/api/medic/h5/courses/recommendCoursesList": {
      body: {
        status: 200,

        nextPageNum: 0,
        pageNum: 0,
        pageSize: 0,
        rows: [
          {
            classHour: 0,
            coursesType: 1,
            coverUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            id: Math.random(),
            introduce: "课程介绍",
            speakerIntroduce: "讲者介绍",
            status: 1,
            studyNumber: 1,
            title: "课程标题",
          },
          ...Array((Math.random() * 5) | 0).map((item) => ({
            classHour: 0,
            coursesType: 1,
            coverUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            id: Math.random(),
            introduce: "课程介绍",
            speakerIntroduce: "讲者介绍",
            status: 1,
            studyNumber: 1,
            title: "课程标题",
          })),
        ],
        total: 0,
        totalPage: 0,
      },
    },
    "/medic-h5/v1/api/medic/h5/courses/getCoursesTypeList": {
      body: {
        data: [
          {
            id: 1,
            name: "web前端",
          },
          {
            id: 2,
            name: "java",
          },
        ],
        message: "",
        status: 200,
      },
    },

    "/medic-h5/v1/api/medic/h5/courses/getSubjectList": {
      body: {
        data: [
          {
            id: 1,
            name: "语文",
          },
          {
            id: 2,
            name: "数学",
          },
          {
            id: 3,
            name: "长课程",
          },
          {
            id: 4,
            name: "按时间",
          },
          {
            id: 5,
            name: "语文",
          },
          {
            id: 6,
            name: "数学",
          },
          {
            id: 7,
            name: "语文",
          },
          {
            id: 8,
            name: "数学",
          },
          ...Array(40)
            .fill(1)
            .map((item, index) => ({
              id: Math.random(),
              name: "数学",
            })),
        ],
        message: "",
        status: 200,
      },
    },

    "/medic-h5/v1/api/medic/h5/courses/coursesDetail": {
      body: {
        data: {
          classHour: 0,
          coursesCatalog: [
            {
              id: 212,
              status: 1,
              studyNumber: 119,
              title: "分析使用支持密码感觉设计.",
              videoDuration: 0,
              videoFormat: null,
              videoSize: null,
              videoSource: 1,
              videoUrl:
                "http://dev-v.wenwo.com/18705112/18705112/9274cc242e1fc6c94466ae00ebd11fc2.mp4",
            },
          ],
          coursesType: 1,
          coverUrl:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          hasFavorites: true,
          id: 1,
          introduce: "课程介绍",
          speakerList: "讲者介绍",
          studyNumber: 1,
          title: "课程标题",
          videoFormat: "mp4",
          videoSize: 1024,
          videoSource: 1,
          videoTitle: "视频配置标题",
          videoUrl: 1,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/user/getUserInfo": {
      body: {
        data: {
          account: 15112308250,
          avatar:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          createTime: "2020-11-18 15:28:00",
          email: "923711111@qq.com",
          id: "5cd943b5efe6c60008412a99",
          phone: 15112308250,
          realName: "朱智鹏",
          registerFrom: 5,
          registerType: "phone",
          sex: 1,
          status: "Y",
          updateTime: "2020-11-18 15:28:00",
          userName: "朱智鹏",
          userType: "medic",
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/live/getLiveDetail": {
      body: {
        data: {
          hasFavorites: true,
          // hasSubscribe: false,
          hasSubscribe: false,
          hdAccountId: "",
          id: 1,
          introduce: `<!DOCTYPE html><html><head></head><body><p>12121212</p> <img  src="https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp"/><img  src="https://pics6.baidu.com/feed/314e251f95cad1c8da54bd8de07b4e01c83d517e.jpeg?token=fc619c19266488e267b659b1aa33ca50"/>   </body></html>`,
          liveUrl: "",
          replayId: "",
          roomId: "",
          roomPassword: "",
          shareCover: "",
          shareIntroduce: "",
          shareTitle: "",
          shareUrl: "",
          speakerList: [
            {
              heardImg:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              hospitalName: "北京协和",
              id: 0,
              speakerIntroduce:
                "这是啊快点哈可是就喝点酒啊上课哈了空间很大空间爱上加上大家快来打进来卡的时间",
              speakerName: "小吴",
              speakerTitles: "大师",
            },
            {
              heardImg:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              hospitalName: "北京协和",
              id: 1,
              speakerIntroduce:
                "这是啊快点哈可是就喝点酒啊上课哈了空间很大空间爱上加上大家快来打进来卡的时间",
              speakerName: "小刘",
              speakerTitles: "大师",
            },
          ],
          startTime: 11615534975910,
          status: 1,
          thirdLiveId: "",
          title: "直播标题",
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/live/getPlayLiveList": {
      body: {
        data: [
          {
            banner: {
              addressUrl: "",
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              id: 1321,
              secondIntroduce: "",
              title: "标题",
            },
            live: {
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              id: 231,
              peopleNum: 12121,
              roomId: "adasd",
              secondIntroduce: "",
              speakerList: [
                {
                  heardImg:
                    "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                  hospitalName: "北京协和",
                  id: 0,
                  speakerIntroduce: "介绍",
                  speakerName: "佐助",
                  speakerTitles: "A",
                },
              ],
              studyNum: 0,
              title: "标题",
            },
            type: 1,
          },
          {
            banner: {
              addressUrl: "",
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              id: 1321,
              secondIntroduce: "",
              title: "标题",
            },
            live: {
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              id: 231,
              peopleNum: 12121,
              roomId: "adasd",
              secondIntroduce: "",
              speakerList: [
                {
                  heardImg:
                    "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                  hospitalName: "北京协和",
                  id: 0,
                  speakerIntroduce: "介绍",
                  speakerName: "佐助",
                  speakerTitles: "A",
                },
              ],
              studyNum: 0,
              title: "标题",
            },
            type: 1,
          },
          {
            banner: {
              addressUrl: "",
              cover:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fuserup%2F0909%2F2Z64022L38.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616828581&t=3d925561d70d9cdaff49eac57b427a11",
              id: 3,
              secondIntroduce: "大大的直播间",
              title: "标题",
            },
            live: {
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              id: 16,
              peopleNum: 12121,
              roomId: "adasd",
              secondIntroduce: "",
              speakerList: [
                {
                  heardImg:
                    "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                  hospitalName: "北京协和",
                  id: 0,
                  speakerIntroduce: "介绍",
                  speakerName: "佐助",
                  speakerTitles: "A",
                },
              ],
              studyNum: 10,
              title: "标题",
            },
            type: 2,
          },
        ],
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/live/getPageByLive": {
      body: {
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              hasSubscribe: true,
              id: 1,
              roomId: "asdas",
              secondIntroduce: "主要是买菜的",
              speakerDic: "他还是个孩子",
              speakerList: [
                {
                  heardImg:
                    "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                  hospitalName: "北京协和",
                  id: 0,
                  speakerIntroduce: "介绍",
                  speakerName: "佐助",
                  speakerTitles: "A",
                },
              ],
              startTime: 1614787200,
              studyNum: 0,
              title: "标题",
            },
            {
              cover:
                "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
              hasSubscribe: false,
              id: 2,
              roomId: "asdas",
              secondIntroduce: "主要是买菜的",
              speakerDic: "他还是个孩子",
              speakerList: [
                {
                  heardImg:
                    "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                  hospitalName: "北京协和",
                  id: 0,
                  speakerIntroduce: "介绍",
                  speakerName: "佐助",
                  speakerTitles: "A",
                },
              ],
              startTime: 1614787200,
              studyNum: 10,
              title: "标题",
            },
            ...Array(10)
              .fill(1)
              .map((item) => ({
                cover:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/cec8fe7bde3e2458df0e3af744ed301c",
                hasSubscribe: false,
                id: Math.random(),
                roomId: "asdas",
                secondIntroduce: "主要是买菜的",
                speakerDic: "他还是个孩子",
                speakerList: [
                  {
                    heardImg:
                      "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                    hospitalName: "北京协和",
                    id: 0,
                    speakerIntroduce: "介绍",
                    speakerName: "佐助",
                    speakerTitles: "A",
                  },
                ],
                startTime: 1614787200,
                studyNum: 10,
                title: "标题",
              })),
          ],
          total: 1,
          totalPage: 0,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/live/subscribe": {
      body: {
        message: "",
        status: 200,
      },
    },
    "/medic-h5/v1/api/medic/h5/user/login/verification": {
      response: {
        getCookies(data = {}) {
          return {
            "ncme-token": "ncme-token",
          };
        },
      },
      body: {
        data: {
          avatar:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          deadLine: "2020-12-02 19:08:50",
          expire: 1296000000,
          hasAgreeNcme: true,
          hasSelectIdentity: true,
          hasSelectSubject: true,
          identity: "医生",
          phone: 15112308250,
          refreshDeadLine: "2020-12-17 19:08:50",
          refreshExpire: 2591999999,
          refreshToken: "d2b6887b-45f7-440f-bd2d-f3f92ec90272",
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDY5MDczMzA5NzUsInBheWxvYWQiOiJcIjE1MTEyMzA4MjUwXCIifQ.q1vxK-bxMwS8UMco3mOpbfkMuaGWXltXZbBpd79ec_0",
          userId: "5cd943b5efe6c60008412a99",
          userName: "朱智鹏",
          userType: "doctor/user/business/community/medic",
        },
        message: "",
        status: 200,
      },
    },
  };
})();
