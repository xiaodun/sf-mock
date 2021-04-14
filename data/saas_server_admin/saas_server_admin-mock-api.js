(function getApis() {
  return {
    "/api/menu/list": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/relation/updateTopicRelationStatus": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/relation/updateTopicRelation": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/relation/findTopicRelationPage": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              businessId: "业务id",
              businessTypeName: "单课程",
              contentType: 1,
              createTime: "2020-10-29 17:10:25",
              id: 1,
              operationalLabelNames: "运营标签1,运营标签2",
              putTime: "2020-10-29 17:10:25",
              speakerNames: "讲者1,讲者2",
              statusName: "已上架",
              subjectLabelNames: "学科标签1,学科标签2",
              title: "业务标题",
              topicId: 1,
              top: true,
              updateTime: "2020-10-29 17:10:25",
            },
            {
              businessId: "业务id",
              businessTypeName: "单课程",
              contentType: 1,
              createTime: "2020-10-29 17:10:25",
              id: 1,
              operationalLabelNames: "运营标签1,运营标签2",
              putTime: "2020-10-29 17:10:25",
              speakerNames: "讲者1,讲者2",
              statusName: "已上架",
              subjectLabelNames: "学科标签1,学科标签2",
              title: "业务标题",
              topicId: 1,
              top: false,
              updateTime: "2020-10-29 17:10:25",
            },
          ],
          total: 100,
          totalPage: 0,
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/config/updateTopicConfigStatus": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/config/updateTopicConfig": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/config/findTopicConfig": {
      body: {
        status: 200,
        data: {
          contentType: 3,
          createTime: "2020-10-29 17:10:25",
          id: 1,
          linkAddressUrl: "https//www.wenwo.com",
          prefectureId: 1,
          title: "专题配置标题",
          updateTime: "2020-10-29 17:10:25",
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/config/findTopicConfigPage": {
      body: {
        status: 200,
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              contentType: 1,
              createTime: "2020-10-29 17:10:25",
              id: 1,
              linkAddressUrl: "https//www.wenwo.com",
              prefectureId: 1,
              title: "专题配置标题",
              updateTime: "2020-10-29 17:10:25",
            },
            {
              contentType: 2,
              createTime: "2020-10-29 17:10:25",
              id: 2,
              linkAddressUrl: "https//www.wenwo.com",
              prefectureId: 2,
              title: "专题配置标题",
              updateTime: "2020-10-29 17:10:25",
            },
            {
              contentType: 3,
              createTime: "2020-10-29 17:10:25",
              id: 3,
              linkAddressUrl: "https//www.wenwo.com",
              prefectureId: 3,
              title: "专题配置标题",
              updateTime: "2020-10-29 17:10:25",
            },
          ],
          total: 100,
          totalPage: 0,
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/prefecture/findPrefectureInfo": {
      body: {
        status: 200,
        data: {
          coverUrl:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          createTime: "2020-10-29 17:10:25",
          customerType: 1,
          deleteTime: "2020-12-17 19:08:50",
          id: 1,
          introduce: "专区介绍",
          isCommercialContent: true,
          linkAddressUrl: "https//www.wenwo.com",
          name: "专区名称",
          putTime: "2020-12-17 19:08:50",
          updateTime: "2020-10-29 17:10:25",
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/prefecture/updatePrefectureStatus": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/prefecture/updatePrefecture": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/prefecture/findPrefecturePage": {
      body: {
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              customerType: 1,
              deleteTime: "2020-12-17 19:08:50",
              id: 1,
              introduce: "专区介绍",
              isCommercialContent: true,
              linkAddressUrl: "https//www.wenwo.com",
              name: "专区名称",
              status: 0,
              putTime: "2020-12-17 19:08:50",
              updateTime: "2020-10-29 17:10:25",
            },
            {
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              customerType: 2,
              deleteTime: "2020-12-17 19:08:50",
              id: 2,
              introduce: "专区介绍",
              isCommercialContent: false,
              linkAddressUrl: "https//www.wenwo.com",
              name: "专区名称",
              status: 1,
              putTime: "2020-12-17 19:08:50",
              updateTime: "2020-10-29 17:10:25",
            },
            {
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              customerType: 3,
              deleteTime: "2020-12-17 19:08:50",
              id: 3,
              introduce: "专区介绍",
              isCommercialContent: true,
              linkAddressUrl: "https//www.wenwo.com",
              name: "专区名称",
              status: 2,
              putTime: "2020-12-17 19:08:50",
              updateTime: "2020-10-29 17:10:25",
            },
            {
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              customerType: 4,
              deleteTime: "2020-12-17 19:08:50",
              id: 4,
              introduce: "专区介绍",
              isCommercialContent: true,
              linkAddressUrl: "https//www.wenwo.com",
              name: "专区名称",
              putTime: "2020-12-17 19:08:50",
              updateTime: "2020-10-29 17:10:25",
            },
            {
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              customerType: 99,
              deleteTime: "2020-12-17 19:08:50",
              id: 5,
              introduce: "专区介绍",
              isCommercialContent: true,
              linkAddressUrl: "https//www.wenwo.com",
              name: "专区名称",
              putTime: "2020-12-17 19:08:50",
              updateTime: "2020-10-29 17:10:25",
            },
          ],
          total: 100,
          totalPage: 0,
        },
        status: 200,
        message: "",
      },
    },
    "/medic-admin/v1/api/medic/manager/courses/liveConversionCourses": {
      body: {
        // status: 200,
        status: 500,
        message: "还没有形成直播回放，不可转",
      },
    },
    "/medic-admin/v1/api/medic/manager/recommend/findConfigureList": {
      body: {
        data: [
          {
            coursesId: 0,
            coursesType: 1,
            createTime: "",
            id: 0,
            operationalLabelIdList: [],
            operationalLabelNames: "运营标签1,运营标签2",
            putTime: "2020-12-17 19:08:50",
            sortValue: 0,
            speakerIdList: [],
            speakerNames: "讲者1,讲者2,讲者1,讲者2讲者1,讲者2",
            status: 1,
            subjectLabelIdList: [],
            subjectLabelNames: "学科标签1,学科标签2",
            title: "课程标题",
            type: 0,
            updateTime: "",
          },
          {
            coursesId: 2,
            coursesType: 2,
            createTime: "",
            id: 2,
            operationalLabelIdList: [],
            operationalLabelNames: "运营标签1,运营标签2",
            putTime: "2020-12-17 19:08:50",
            sortValue: 1,
            speakerIdList: [],
            speakerNames: "讲者1,讲者2,讲者1,讲者2讲者1,讲者2",
            status: 1,
            subjectLabelIdList: [],
            subjectLabelNames: "学科标签1,学科标签2",
            title: "课程标题",
            type: 0,
            updateTime: "",
          },
          {
            coursesId: 2,
            coursesType: 2,
            createTime: "",
            id: 3,
            operationalLabelIdList: [],
            operationalLabelNames: "运营标签1,运营标签2",
            putTime: "2020-12-17 19:08:50",
            sortValue: 1,
            speakerIdList: [],
            speakerNames: "讲者1,讲者2,讲者1,讲者2讲者1,讲者2",
            status: 1,
            subjectLabelIdList: [],
            subjectLabelNames: "学科标签1,学科标签2",
            title: "课程标题",
            type: 0,
            updateTime: "",
          },
        ],
        status: 200,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/recommend/findCoursesAggregationList": {
      body: {
        status: 200,
        message: "请求成功",
        data: [
          {
            coursesType: 0,
            id: 0,
            title: "课程",
          },
          {
            coursesType: 0,
            id: 1,
            title: "课1程",
          },
          {
            coursesType: 0,
            id: 2,
            title: "课程2",
          },
        ],
      },
      "/medic-admin/v1/api/medic/manager/recommend/updateCoursesConfig": {
        status: 200,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/recommend/deleteCoursesConfig": {
      body: {
        status: 200,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/recommend/addCoursesConfig": {
      body: {
        // status: 200,
        status: 400,
        message: "此课程已存在!",
      },
    },
    "/medic-admin/v1/api/medic/manager/series/saveOrUpdateSeries": {
      body: {
        status: 200,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/video/uploadVideoInit": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          fileId: "ASSDSD",
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/video/uploadVideo": {
      body: {
        status: 200,
        message: "请求成功",
        data: null,
      },
    },
    "/medic-admin/v1/api/medic/manager/courses/saveOrUpdateCourses": {
      body: {
        status: 200,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/series/findSeriesInfo": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          contentType: 1,
          courseIdList: [1, 2],
          coverUrl:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          createTime: "2020-10-29 17:10:25",
          deleteStatus: false,
          courseIdList: [1, 2],
          id: 1,
          introduce: "系列课介绍",
          isCommercialContent: false,
          liveSpeakerIntroduce: "直播列表讲者介绍",
          operationalLabelNames: "运营标签1,运营标签2",
          putTime: "2020-12-17 19:08:50",
          speakerNames: "讲者1,讲者2",
          subjectLabelIdList: ["0"],
          operationalLabelIdList: [0],
          speakerIdList: [1, 2],
          status: 1,
          studyNumber: 1,
          subjectLabelNames: "学科标签1,学科标签2",
          suitableForReading: 1,
          title: "系列课标题",
          updateTime: "2020-10-29 17:10:25",
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/series/updateSeriesStatus": {
      body: {
        status: 200,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/series/findSeriesInfoPage": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              contentType: 1,
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              deleteStatus: false,
              id: Math.random(),
              classHour: 12,
              introduce: "系列课介绍",
              isCommercialContent: false,
              liveSpeakerIntroduce: "直播列表讲者介绍",
              operationalLabelNames: "运营标签1,运营标签2。,运营标签2",
              putTime: "2020-12-17 19:08:50",
              speakerNames: "讲者1,讲者2，讲者1,讲者2讲者1,讲者2",
              status: 1,
              studyNumber: 1,
              subjectLabelNames: "学科标签1,学科标签2，,学科标签2",
              suitableForReading: 1,
              title: "已上架",
              linkAddressUrl: "https://www.baidu.com/",

              updateTime: "2020-10-29 17:10:25",
            },
            {
              contentType: 1,
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-10-29 17:10:25",
              deleteStatus: false,
              id: 2,
              classHour: 12,
              introduce: "系列课介绍",
              isCommercialContent: false,
              liveSpeakerIntroduce: "直播列表讲者介绍",
              operationalLabelNames: "运营标签1,运营标签2",
              putTime: "2020-12-17 19:08:50",
              speakerNames: "讲者1,讲者2",
              linkAddressUrl: "https://www.baidu.com/",
              status: 2,
              studyNumber: 1,
              subjectLabelNames: "学科标签1,学科标签2",
              suitableForReading: 1,
              title: "已下架",
              updateTime: "2020-10-29 17:10:25",
            },
          ],
          total: 100,
          totalPage: 0,
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/courses/findCoursesInfo": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          id: 31,
          title: "已上架",
          introduce: "课程介绍123",
          subjectLabelIdList: ["1", "2"],
          speakerIdList: [0, 1],
          operationalLabelIdList: [0, 1],
          coverUrl:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          suitableForReading: 1,
          contentType: 1,
          isCommercialContent: true,
          speakerNames: "阿斯顿,詹姆斯,霍华德",
          subjectLabelNames: "标签1,标签2，标签1,标签2标签1,标签2",
          operationalLabelNames:
            "运营标签1，运营标签2，运营标签1，运营标签2运营标签1，运营标签2",

          // 视频来源(1:第三方链接,2:本地上传,3:直播回放)
          videoSource: 2,
          videoName: "上传视频",
          videoConfigTitle: "视频配置标题",
          videoConfigUrl:
            "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
          videoFormat: "viode/mp4",
          videoConfigSize: 1024 * 1024 * 3,
          videoFileId: "123123132",
          // 1上传中  2已上传  3上传错误
          videoStatus: 1,
          deleteStatus: null,
          putTime: "2021-03-15 11:18:31",
          seriesId: 2,
          studyNumber: null,
          studioId: null,
          thirdStudioId: null,
          createTime: "2021-03-13 13:58:56",
          updateTime: "2021-03-15 11:18:35",
          liveSpeakerIntroduce: "直播列表讲者介绍",
          linkAddressUrl: "https://www.baidu.com/",
          watchPv: 1000,
          coursesType: 1,
          coursesSort: 0,
          //已上架
          status: 1,
        },
      },
    },
    "/medic-admin/v1/api/medic/manager/courses/updateCoursesStatus": {
      body: {
        // status: 200,
        status: 30102100,
        message: "请求成功",
      },
    },
    "/medic-admin/v1/api/medic/manager/courses/findCoursesInfoPage": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          pageNum: 1,
          totalPage: 1,
          pageSize: 50,
          total: 100,
          rows: [
            {
              id: Math.random(),
              title: "已上架",
              introduce: "课程介绍123",
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              suitableForReading: 1,
              contentType: 1,
              isCommercialContent: true,
              speakerNames: "阿斯顿,詹姆斯,霍华德",
              subjectLabelNames: "标签1,标签2标签1,标签2标签1,标签2",
              operationalLabelNames: "运营标签1，运营标签运营标签1，运营标签2",
              videoSource: 1,
              videoTitle: "视频配置标题",
              videoUrl: "1",
              videoFormat: null,
              videoSize: 1024,
              deleteStatus: null,
              putTime: "2021-03-15 11:18:31",
              seriesId: 1,
              studyNumber: null,
              studioId: null,
              thirdStudioId: null,
              createTime: "2021-03-13 13:58:56",
              updateTime: "2021-03-15 11:18:35",
              liveSpeakerIntroduce: "直播列表讲者介绍",
              linkAddressUrl: "https://www.baidu.com/",
              watchPv: 1000,
              coursesType: 1,
              coursesSort: 0,
              //已上架
              status: 1,
            },
            {
              id: 32,
              title: "已下架",
              introduce: "课程介绍123",
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              suitableForReading: 1,
              contentType: 1,
              isCommercialContent: true,
              speakerNames: "阿斯顿,詹姆斯,霍华德",
              subjectLabelNames: "标签1,标签2",
              operationalLabelNames: "运营标签1，运营标签2",
              videoSource: 1,
              videoTitle: "视频配置标题",
              videoUrl: "1",
              videoFormat: null,
              videoSize: 1024,
              deleteStatus: null,
              putTime: "2021-03-15 11:18:31",
              seriesId: 1,
              studyNumber: null,
              studioId: null,
              thirdStudioId: null,
              createTime: "2021-03-13 13:58:56",
              updateTime: "2021-03-15 11:18:35",
              liveSpeakerIntroduce: "直播列表讲者介绍",
              watchPv: 1000,
              coursesType: 1,
              coursesSort: 0,
              linkAddressUrl: "https://www.baidu.com/",
              //已下架
              status: 2,
            },
            {
              id: 33,
              title: "直播回放",
              introduce: "课程介绍123",
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              suitableForReading: 1,
              contentType: 1,
              isCommercialContent: true,
              speakerNames: "阿斯顿,詹姆斯,霍华德",
              subjectLabelNames: "标签1,标签2",
              operationalLabelNames: "运营标签1，运营标签2",
              videoSource: 3,
              videoTitle: "视频配置标题",
              videoUrl: "1",
              videoFormat: null,
              videoSize: 1024 * 1024 * 3,
              deleteStatus: null,
              putTime: "2021-03-15 11:18:31",
              seriesId: 1,
              studyNumber: null,
              studioId: null,
              thirdStudioId: null,
              createTime: "2021-03-13 13:58:56",
              updateTime: "2021-03-15 11:18:35",
              liveSpeakerIntroduce: "直播列表讲者介绍",
              watchPv: 1000,
              coursesType: 1,
              coursesSort: 0,
              linkAddressUrl: "https://www.baidu.com/",
              //已下架
              status: 2,
            },
            {
              id: 34,
              title: "关联系列课删除",
              introduce: "课程介绍123",
              coverUrl:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              suitableForReading: 1,
              contentType: 2,
              isCommercialContent: true,
              speakerNames: "阿斯顿,詹姆斯,霍华德",
              subjectLabelNames: "标签1,标签2",
              operationalLabelNames: "运营标签1，运营标签2",
              videoSource: 3,
              videoTitle: "视频配置标题",
              videoUrl: "1",
              videoFormat: null,
              videoSize: 1024,
              deleteStatus: null,
              putTime: "2021-03-15 11:18:31",
              seriesId: 1,
              studyNumber: null,
              studioId: null,
              thirdStudioId: null,
              createTime: "2021-03-13 13:58:56",
              updateTime: "2021-03-15 11:18:35",
              liveSpeakerIntroduce: "直播列表讲者介绍",
              watchPv: 1000,
              coursesType: 2,
              coursesSort: 0,
              linkAddressUrl: "https://www.baidu.com/",
              //已下架
              status: 2,
            },
          ],
          nextPageNum: -1,
        },
      },
    },
    "/medic-admin/v1/api/medic/live/manager/getCcLiveRoomInfo": {
      body: {
        data: {
          background:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          liveStartTime: "2020-02:12 8:12:00",
          roomDesc: ``,
          roomId: "assaddsasdsda",
          roomName: "漩涡鸣人的直播间",
        },
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/speaker/manager/addOrUpdate": {
      body: {
        data: {
          id: 1,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/live/manager/putOnOff": {
      body: {
        data: "",
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/live/manager/addOrUpdate": {
      body: {
        data: {
          id: 1,
        },
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/live/manager/detail": {
      inject: (nameMaps) => [nameMaps.liveManageList],
      body(data) {
        const id = data.params.liveRoomList[0].id;
        const details = data.inject.liveManageList.find(
          (item) => item.id == id
        );
        return {
          data: [details],
          message: "",
          status: 200,
        };
      },
    },
    "/medic-admin/v1/api/medic/live/manager/delete": {
      body: {
        data: "",
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/speaker/manager/delete": {
      body: {
        data: "",
        message: "出错了",
        // status: 200,
        status: 591803006,
      },
    },
    "/medic-admin/v1/api/medic/speaker/manager/detail": {
      body: {
        data: {
          createTime: "2020-09-16",
          heardImg:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          hospitalName: "协和",
          id: 0,
          speakerIntroduce: "一个讲师",
          speakerName: "张三",
          speakerTitles: "主任",
        },
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/speaker/manager/getOperateLabels": {
      body: {
        data: [
          {
            code: 0,
            name: "运营标签0",
          },
          {
            code: 1,
            name: "运营标签1",
          },
        ],
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/live/manager/preview": {
      body: {
        data: {
          heardImg: "",
          hospitalName: "",
          id: 0,
          introduce: "",
          liveUrl: "",
          name: "",
          speakerIntroduce: "",
          speakerName: "",
          speakerTitles: "",
          startTime: "",
        },
        message: "",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/live/manager/list": {
      name: (nameMaps) => nameMaps.liveManageList,
      pageable: true,
      getData() {
        return [
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 1,
            thirdRoomId: "801A792A6D2EEB939C33DC59013074611",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: "2021-03-22 21:30:00",
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 0,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 1,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 2,
            thirdRoomId: "801A792A6D2EEB939C33DC59013074612",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 1,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 1,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 3,
            thirdRoomId: "801A792A6D2EEB939C33DC59013074613",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 2,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 1,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 21,
            thirdRoomId: "801A792A6D2EEB939C33DC5901307461121",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 0,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 0,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 22,
            thirdRoomId: "801A792A6D2EEB939C33DC5901307461122",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 1,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 0,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 23,
            thirdRoomId: "801A792A6D2EEB939C33DC5901307461123",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 2,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 0,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 24,
            thirdRoomId: "801A792A6D2EEB939C33DC5901307461124",
            roomName: "大话医疗姊妹篇",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 3,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 0,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 212,
            thirdRoomId: "801A792A6D2EEB939C33DC59013074611241221s",
            roomName: "学科标签，运营标签超出10个",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel:
              "男科,男科,男科,男科,男科,男科,男科,男科,男科,男科,11男科",
            operateLabel:
              "精彩指南,精彩指南,精彩指南,精彩指南,精彩指南,精彩指南,精彩指南,精彩指南,精彩指南,精彩指南,11精彩指南",
            liveStatus: 3,
            speakerList: Array(11)
              .fill(1)
              .map((item, index) => ({
                id: index,
                speakerName: index + 1 + "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              })),
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 0,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
          {
            roomDesc: "描述",
            liveType: 1,
            properPerson: 1,
            commerceFlag: 1,
            id: 213321,
            coursesId: 12,
            thirdRoomId: "801A792A是SSASA",
            roomName: "已转换为系列课",
            liveStartTime: "2021-03-22 21:30:00",
            liveEndTime: null,
            onShelfTime: null,
            subjectLabel: "男科",
            operateLabel: "精彩指南",
            liveStatus: 0,
            speakerList: [
              {
                id: 1,
                speakerName: "阿斯顿",
                speakerTitles: "主任医师1",
                hospitalName: "南山医院1",
                heardImg:
                  "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
                speakerIntroduce: "1从业40年，技术精湛，妙手回春",
              },
            ],
            speakerIntroduce: "7列表页讲者描述列表页讲者描述",
            secondIntroduce: "7列表页二级描述列表页二",
            onShelfStatus: 1,
            background:
              "https://wenwo-img-bucket-dev.oss-cn-beijing.aliyuncs.com/0067ae18a6f33489ee40e6bcc427277f",
            viewUrl:
              "https://view.csslcloud.net/api/view/index?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lectureUrl:
              "https://view.csslcloud.net/api/view/lecturer?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            assistantUrl:
              "https://view.csslcloud.net/api/view/assistant?userid=C2DF142473187DD0&roomid=801A792A6D2EEB939C33DC5901307461",
            lecturePass: "12345",
            assistantPass: "12345",
            viewerPass: "",
            viewerCount: null,
            learnCount: null,
          },
        ];
      },
      body(data) {
        return {
          data: data.pageInfos.wrapData,
          message: "",
          status: 200,
        };
      },
    },
    "/medic-admin/v1/api/medic/speaker/manager/getSubjectLabels": {
      body: {
        data: [
          {
            id: "1",
            subjectLabel: "语文",
          },
          {
            id: "2",
            subjectLabel: "数学",
          },
        ],
        message: "操作成功!",
        status: 200,
      },
    },
    "/api/file/uploadImg": {
      body: {
        data: {
          id: Math.random() + "",
          url:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
        },
        message: "操作成功!",
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/speaker/manager/list": {
      body: {
        data: {
          nextPageNum: 0,
          pageNum: 0,
          pageSize: 0,
          rows: [
            {
              createTime: "2020-02-13",
              hospitalName: "北京人和",
              id: 0,
              heardImg:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              speakerName: "小吴",
              speakerTitles: "大师",
            },
            {
              createTime: "2020-02-13",
              heardImg:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              hospitalName:
                "北京人和北京人和北京人和北京人和北京人和北京人和北京人和北京人和",
              id: 1,
              speakerName: "小六",
              speakerTitles: "大师",
            },
            {
              heardImg:
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              createTime: "2020-02-13",
              hospitalName: "北京人和",
              id: 2,
              speakerName: "小七",
              speakerTitles: "大师",
            },
          ],
          total: 100,
          totalPage: 0,
        },
        message: "操作成功!",
        status: 200,
      },
    },
    "/api/account/login": {
      body: {
        data: {
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTM5NzU3ODI3NzcsInBheWxvYWQiOiJcImhhbmJhb2p1YW5cIiJ9.C3Kqsnbc-FT4dLg5_VL9DEzRK_qjH4DrkX8w6rsXg6A",
        },
        message: "操作成功!",
        status: 200,
        time: 0,
      },
    },
    "/medic-admin/v1/api/medic/manager/articles/list": {
      body: "managerArticlesList.js",
    },

    "/medic-admin/v1/api/medic/manager/articles/dataGather/deptTag": {
      body: {
        status: 200,
        message: "请求成功",
        data: [],
      },
    },
    "/medic-admin/v1/api/medic/manager/articles/medicOperateTag": {
      body: "./articlesDataGatherMedicOperateTag.js",
    },

    "/api/account/getSelfUserInfo": {
      body: "accountGetSelfUserInfo.js",
    },
  };
})();
