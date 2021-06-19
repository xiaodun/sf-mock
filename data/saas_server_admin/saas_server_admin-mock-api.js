(function getApis() {
  const Mock = require("mockjs");
  const Random = Mock.Random;
  return {
    "/medic-admin/v1/api/medic/manager/message/add": {
      body: {
        status: 200,
        data: {
          id: 161,
        },
      },
    },

    "/medic-admin/v1/api/medic/manager/message/list": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          pageNum: 1,
          totalPage: 6,
          pageSize: 20,
          total: 116,
          rows: [
            {
              id: 160,
              title: "站内信",
              descInfo: "站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-08 18:27:43",
              updateTime: "2021-03-08 18:27:38",
              messageContentData: [
                {
                  id: 182,
                  messageConfigId: 160,
                  contentTitle: "站内信",
                  content: "站内信",
                  messageType: 2,
                  jumpUrl: "https://www.baidu.com/?tn=88093251_41_hao_pg",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 159,
              title: "3.8消息",
              descInfo: "3.8消息",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-08 18:26:35",
              updateTime: "2021-03-08 18:26:30",
              messageContentData: [
                {
                  id: 181,
                  messageConfigId: 159,
                  contentTitle: "3.8消息",
                  content: "3.8消息",
                  messageType: 1,
                  jumpUrl: "https://www.baidu.com/?tn=88093251_41_hao_pg",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 158,
              title: "3.8",
              descInfo: "3.8",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-08 16:43:37",
              updateTime: "2021-03-08 16:43:37",
              messageContentData: [
                {
                  id: 180,
                  messageConfigId: 158,
                  contentTitle: "3.8",
                  content: "3.83.83.83.8",
                  messageType: 1,
                  jumpUrl: "https://www.baidu.com/?tn=88093251_41_hao_pg",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 157,
              title: "消息站内信",
              descInfo: "消息站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-06 15:01:23",
              updateTime: "2021-03-06 15:01:23",
              messageContentData: [
                {
                  id: 178,
                  messageConfigId: 157,
                  contentTitle: "消息站内信",
                  content: "消息站内信",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
                {
                  id: 179,
                  messageConfigId: 157,
                  contentTitle: "消息站内信",
                  content: "消息站内信",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 156,
              title: "站内信",
              descInfo: "站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-06 15:00:45",
              updateTime: "2021-03-06 15:00:45",
              messageContentData: [
                {
                  id: 177,
                  messageConfigId: 156,
                  contentTitle: "站内信",
                  content: "站内信",
                  messageType: 2,
                  jumpUrl: "https://www.baidu.com/?tn=88093251_41_hao_pg",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 155,
              title: "测试爱问大后台消息",
              descInfo: "测试爱问大后台消息",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-06 13:47:47",
              updateTime: "2021-03-06 13:47:47",
              messageContentData: [
                {
                  id: 175,
                  messageConfigId: 155,
                  contentTitle: "测试爱问大后台消息",
                  content: "测试爱问大后台消息",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
                {
                  id: 176,
                  messageConfigId: 155,
                  contentTitle: "测试爱问大后台消息",
                  content: "测试爱问大后台消息",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 154,
              title: "测试爱问大后台消息",
              descInfo: "测试爱问大后台消息",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-03-06 13:46:12",
              updateTime: "2021-03-06 13:46:12",
              messageContentData: [
                {
                  id: 173,
                  messageConfigId: 154,
                  contentTitle: "11111111111111",
                  content: "1111111111",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
                {
                  id: 174,
                  messageConfigId: 154,
                  contentTitle: "11111111",
                  content: "11111111",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 153,
              title: "2.26消息中心push",
              descInfo: "2.26消息中心push",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-02-26 17:06:29",
              updateTime: "2021-02-26 17:06:29",
              messageContentData: [
                {
                  id: 172,
                  messageConfigId: 153,
                  contentTitle: "2.26消息中心push",
                  content:
                    "2.26消息中心push2.26消息中心push2.26消息中心push2.26消息中心push",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 1,
                },
              ],
            },
            {
              id: 152,
              title: "2.26消息中心站内信",
              descInfo: "2.26消息中心站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-02-26 17:05:46",
              updateTime: "2021-02-26 17:05:46",
              messageContentData: [
                {
                  id: 171,
                  messageConfigId: 152,
                  contentTitle: "2.26消息中心站内信",
                  content:
                    "2.26消息中心站内信2.26消息中心站内信2.26消息中心站内信",
                  messageType: 2,
                  jumpUrl: "https://www.baidu.com/?tn=88093251_41_hao_pg",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 151,
              title: "2.25站内信",
              descInfo: "2.25站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-02-25 15:38:17",
              updateTime: "2021-02-25 15:38:17",
              messageContentData: [
                {
                  id: 170,
                  messageConfigId: 151,
                  contentTitle: "消息标题 2.25站内信",
                  content:
                    "消息标题\n2.25站内信\n消息标题\n2.25站内信\n消息标题\n2.25站内信\n消息标题\n2.25站内信\n",
                  messageType: 2,
                  jumpUrl: "https://www.baidu.com/",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 150,
              title: "2.24消息push",
              descInfo: "2.24消息push",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-02-24 10:47:15",
              updateTime: "2021-02-24 10:47:15",
              messageContentData: [
                {
                  id: 169,
                  messageConfigId: 150,
                  contentTitle: "2.24消息push",
                  content: "2.24消息push2.24消息push2.24消息push",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 5,
                },
              ],
            },
            {
              id: 149,
              title: "2.24消息站内信",
              descInfo: "2.24消息站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-02-24 10:46:35",
              updateTime: "2021-02-24 10:46:35",
              messageContentData: [
                {
                  id: 168,
                  messageConfigId: 149,
                  contentTitle: "2.24消息站内信",
                  content:
                    "2.24消息站内信2.24消息站内信2.24消息站内信2.24消息站内信",
                  messageType: 2,
                  jumpUrl: "https://www.baidu.com/",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 148,
              title: "2.22站内信链接",
              descInfo: "2.22站内信链接",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2021-02-22 16:23:43",
              updateTime: "2021-02-22 16:23:43",
              messageContentData: [
                {
                  id: 167,
                  messageConfigId: 148,
                  contentTitle: "2.22站内信链接",
                  content: "2.22站内信链接2.22站内信链接2.22站内信链接",
                  messageType: 2,
                  jumpUrl: "https://www.baidu.com/?tn=88093251_41_hao_pg",
                  jumpType: 6,
                },
              ],
            },
            {
              id: 147,
              title: "1216-14：10双",
              descInfo: "1216-14：10双",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 14:10:02",
              updateTime: "2020-12-16 13:52:15",
              messageContentData: [
                {
                  id: 165,
                  messageConfigId: 147,
                  contentTitle: "1216-14：10双",
                  content: "1216-14：10双",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
                {
                  id: 166,
                  messageConfigId: 147,
                  contentTitle: "1216-14：10双",
                  content: "1216-14：10双",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 146,
              title: "1216-14：10站内信",
              descInfo: "1216-14：10站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 14:10:02",
              updateTime: "2020-12-16 13:51:59",
              messageContentData: [
                {
                  id: 164,
                  messageConfigId: 146,
                  contentTitle: "1216-14：10站内信",
                  content: "1216-14：10站内信",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 145,
              title: "1216-14：10push",
              descInfo: "1216-14：10push",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 14:10:02",
              updateTime: "2020-12-16 13:51:35",
              messageContentData: [
                {
                  id: 163,
                  messageConfigId: 145,
                  contentTitle: "1216-14：10push",
                  content: "1216-14：10push",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 144,
              title: "1216-13：40定时站双",
              descInfo: "1216-13：40定时站双",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 13:40:02",
              updateTime: "2020-12-16 13:36:03",
              messageContentData: [
                {
                  id: 161,
                  messageConfigId: 144,
                  contentTitle: "1216-13：40定时站双",
                  content: "1216-13：40定时站双",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
                {
                  id: 162,
                  messageConfigId: 144,
                  contentTitle: "1216-13：40定时站双",
                  content: "1216-13：40定时站双",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 143,
              title: "1216-13：40定时站内信",
              descInfo: "1216-13：40定时站内信",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 13:40:02",
              updateTime: "2020-12-16 13:35:33",
              messageContentData: [
                {
                  id: 160,
                  messageConfigId: 143,
                  contentTitle: "1216-13：40定时站内信",
                  content: "1216-13：40定时站内信",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 142,
              title: "1216-13：40定时push",
              descInfo: "1216-13：40定时push",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 13:40:02",
              updateTime: "2020-12-16 13:35:14",
              messageContentData: [
                {
                  id: 159,
                  messageConfigId: 142,
                  contentTitle: "1216-13：40定时push",
                  content: "1216-13：40定时push",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
            {
              id: 141,
              title: "1216-1306",
              descInfo: "1216-1306",
              targetPopulation: 0,
              status: 2,
              messageSendTime: "2020-12-16 13:06:00",
              updateTime: "2020-12-16 12:55:24",
              messageContentData: [
                {
                  id: 157,
                  messageConfigId: 141,
                  contentTitle: "1216-13061216-13061216-1306",
                  content: "1216-13061216-13061216-1306",
                  messageType: 1,
                  jumpUrl: "",
                  jumpType: 2,
                },
                {
                  id: 158,
                  messageConfigId: 141,
                  contentTitle: "1216-13061216-1306",
                  content: "1216-1306",
                  messageType: 2,
                  jumpUrl: "",
                  jumpType: 2,
                },
              ],
            },
          ],
          nextPageNum: 2,
        },
      },
    },

    "/api/operate/subject/findSubjectByPage": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/gateway/doctor/d/admin/configure/saveBlackConfigure": {
      body: {
        message: "",
        status: 200,
      },
    },

    "/api/gateway/doctor/d/admin/configure/getBlackListDetails": {
      body: {
        data: {
          business: [
            {
              checked: false,
              name: Random.word(4),
              type: "1",
            },
            {
              checked: false,
              name: Random.word(4),
              type: "2",
            },
          ],
          doctorId: "",
          operatorRecord: [
            {
              content: "",
              createTime: "2020-10-27 01:33",
              operatorName: "",
            },
          ],
        },
        message: "",
        status: 200,
      },
    },

    "/api/gateway/doctor/d/admin/doc/label/saveBlackConfigure": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/gateway/doctor/d/admin/label/deleteProjectLabel": {
      body: {
        // status: 29001,
        status: 200,
        data: {},
        message: "该标签已绑定医生信息，请将医生移出黑名单后再删除标签~",
      },
    },

    "/api/v2/appConfig/getFirstDepartmentList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/userService/banner/getBannerList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/userService/department/getHotDepartmentList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/d/admin/label/saveProjectLabel": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/gateway/doctor/d/admin/doc/label/uploadExcelInfo": {
      body: {
        status: 200,
        data: {
          causeList: [
            {
              cause: "不知到",
              doctorId: "23123321",
              realName: "洒洒水",
            },
          ],
          failNum: 12,
          successNum: 10,
          total: 100,
        },
      },
    },

    "/api/gateway/doctor/d/admin/label/getProjectLabelList": {
      body: {
        status: 200,
        data: [
          {
            createTime: "2019-25-08 12:09:30",
            id: 0,
            name: "乐高",
            remarks: "1221",
            deletable: 0,
          },
          {
            createTime: "2019-25-08 12:09:30",
            id: 1,
            name: "金赛",
            deletable: 1,
            remarks:
              "1213asdasd阿萨，sadness，马上到你们都是，。难道是。，吗122121121212121221211223123",
          },
        ],
      },
    },

    "/api/gateway/doctor/d/admin/doc/label/deleteBlackListByDoctorIds": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/gateway/doctor/d/admin/doc/label/getBlackList": {
      name: (nameMaps) => nameMaps.messageBlockBlackList,
      pageable: true,
      getData() {
        return new Array(100).fill(1).map((item, index) => ({
          id: index,
          doctorId: index,
          labelName: Random.word(4),
          departmentName: "主任科",
          realName: "岳飞",
          status: Math.random() > 0.5 ? 0 : 1,
          updateTime: Random.date("yyyy-mm-dd HH:mm:ss"),
        }));
      },
      body(data) {
        return {
          status: 200,
          data: data.pageInfos.wrapData,
        };
      },
    },

    "/api/gateway/doctor/d/admin/consult/getAppraiseList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/gateway/doctor/d/admin/consult/getModuleListNum": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/doctors/identifyList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/doctors/queryList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/prescription/doctor/findRxDocByPage": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/department/queryList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/weiboReconsitution/apiManage/pageQuery": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/iask/company/pageOrExportCompany": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/iask/dict/getCompanyType": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/iask/dict/getAdminUser": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/iask/dict/getCustomerManagers": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/iask/dict/getIaskProductType": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/userService/channel/channelList": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/saas_doctor/configuration/column/list": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/saas_doctor/contentService/article/list": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/saas_doctor/configuration/department/tree": {
      body: {
        data: [
          {
            deptName: "中医科",
            children: [
              { deptName: "中医科", deptId: "10000" },
              { deptName: "中医儿科", deptId: "10002" },
              { deptName: "中医骨科", deptId: "10003" },
              { deptName: "中医皮肤科", deptId: "10004" },
            ],
            deptId: "10001",
          },
          {
            deptName: "耳鼻咽喉头颈科",
            children: [
              { deptName: "耳鼻咽喉科", deptId: "10102" },
              { deptName: "喉科", deptId: "10103" },
              { deptName: "头颈外科", deptId: "10104" },
              { deptName: "甲状腺门诊", deptId: "10105" },
              { deptName: "鼻科", deptId: "10106" },
              { deptName: "耳科", deptId: "10107" },
            ],
            deptId: "10100",
          },
          {
            deptName: "骨外科",
            children: [
              { deptName: "足踝外科", deptId: "10201" },
              { deptName: "创伤骨科", deptId: "10202" },
              { deptName: "骨关节科", deptId: "10203" },
              { deptName: "矫形骨科", deptId: "10204" },
            ],
            deptId: "10200",
          },
          {
            deptName: "传染病科",
            children: [
              { deptName: "传染科", deptId: "10302" },
              { deptName: "肝病科", deptId: "10303" },
            ],
            deptId: "10300",
          },
          { deptName: "结核病科", children: [], deptId: "10301" },
          {
            deptName: "儿科",
            children: [
              { deptName: "小儿内科", deptId: "10401" },
              { deptName: "小儿外科", deptId: "10402" },
              { deptName: "新生儿科", deptId: "10403" },
              { deptName: "小儿呼吸科", deptId: "10404" },
              { deptName: "小儿营养保健科", deptId: "10405" },
              { deptName: "小儿康复科", deptId: "10406" },
            ],
            deptId: "10400",
          },
          {
            deptName: "内科",
            children: [
              { deptName: "内分泌科", deptId: "10501" },
              { deptName: "呼吸科", deptId: "10502" },
              { deptName: "心血管内科", deptId: "10503" },
              { deptName: "消化内科", deptId: "10504" },
              { deptName: "神经内科", deptId: "10505" },
              { deptName: "肾病内科", deptId: "10506" },
              { deptName: "血液科", deptId: "10507" },
              { deptName: "免疫科", deptId: "10508" },
              { deptName: "普通内科", deptId: "10509" },
              { deptName: "感染内科", deptId: "10510" },
              { deptName: "过敏反应科", deptId: "10511" },
              { deptName: "老年病科", deptId: "10512" },
            ],
            deptId: "10500",
          },
          { deptName: "内分泌代谢科", children: [], deptId: "10513" },
          {
            deptName: "外科",
            children: [
              { deptName: "胸外科", deptId: "10602" },
              { deptName: "泌尿外科", deptId: "10603" },
              { deptName: "肛肠科", deptId: "10604" },
              { deptName: "肝胆外科", deptId: "10605" },
              { deptName: "神经外科", deptId: "10606" },
              { deptName: "心血管外科", deptId: "10607" },
              { deptName: "乳腺外科", deptId: "10608" },
            ],
            deptId: "10600",
          },
          {
            deptName: "眼科",
            children: [
              { deptName: "眼科综合门诊", deptId: "10101" },
              { deptName: "儿童视光门诊", deptId: "10701" },
              { deptName: "儿童眼综合门诊", deptId: "10702" },
              { deptName: "眼底", deptId: "10703" },
              { deptName: "角膜疾病", deptId: "10704" },
              { deptName: "眼肌", deptId: "10705" },
              { deptName: "青光眼 ", deptId: "10706" },
              { deptName: "白内障", deptId: "10707" },
              { deptName: "眼外伤", deptId: "10708" },
              { deptName: "眼肿瘤", deptId: "10709" },
              { deptName: "屈光门诊", deptId: "10710" },
              { deptName: "眼整形", deptId: "10711" },
              { deptName: "眼中医", deptId: "10712" },
            ],
            deptId: "10700",
          },
          {
            deptName: "妇产科",
            children: [
              { deptName: "产科", deptId: "10801" },
              { deptName: "妇科", deptId: "10802" },
            ],
            deptId: "10800",
          },
          {
            deptName: "口腔科",
            children: [
              { deptName: " 颌面外科", deptId: "10901" },
              { deptName: "牙体牙髓科", deptId: "10902" },
              { deptName: "牙周科", deptId: "10903" },
              { deptName: "口腔黏膜科", deptId: "10904" },
              { deptName: "儿童口腔科", deptId: "10905" },
              { deptName: "正畸科", deptId: "10906" },
              { deptName: "口腔门诊", deptId: "11600" },
            ],
            deptId: "10900",
          },
          {
            deptName: "怎么没有",
            children: [
              { deptName: "传染性皮肤病", deptId: "11001" },
              { deptName: "皮肤科门诊", deptId: "11002" },
              { deptName: "免疫性皮肤科", deptId: "11003" },
              { deptName: "过敏性/变态反应科", deptId: "11004" },
            ],
            deptId: "11000",
          },
          {
            deptName: "一百二十二",
            children: [
              { deptName: "精神科", deptId: "11101" },
              { deptName: "心理咨询科", deptId: "11102" },
              { deptName: "司法鉴定科", deptId: "11103" },
              { deptName: "中医精神科", deptId: "11104" },
            ],
            deptId: "11100",
          },
          { deptName: "报错了把", children: [], deptId: "11200" },
          {
            deptName: "萨拉覅金额法律司法到",
            children: [
              { deptName: "疼痛科", deptId: "11301" },
              { deptName: "麻醉科", deptId: "11302" },
            ],
            deptId: "11300",
          },
          { deptName: "新增科室", children: [], deptId: "11400" },
          { deptName: "咳咳咳是", children: [], deptId: "11500" },
          { deptName: "营养科", children: [], deptId: "11700" },
          { deptName: "男科", children: [], deptId: "11800" },
          { deptName: "生殖中心科", children: [], deptId: "11900" },
          {
            deptName: "康复医学科",
            children: [
              { deptName: "康复科", deptId: "12000" },
              { deptName: "理疗科", deptId: "12002" },
            ],
            deptId: "12001",
          },
          {
            deptName: "整形美容科",
            children: [
              { deptName: "整形科", deptId: "10601" },
              { deptName: "美容科", deptId: "12102" },
            ],
            deptId: "12100",
          },
          { deptName: "介入医学科", children: [], deptId: "12200" },
          { deptName: "职业病科", children: [], deptId: "12300" },
          { deptName: "病理科", children: [], deptId: "12500" },
          { deptName: "其他", children: [], deptId: "12600" },
          { deptName: "全科", children: [], deptId: "12700" },
          {
            deptName: "烧伤科",
            children: [{ deptName: "重烧科", deptId: "12801" }],
            deptId: "12800",
          },
          { deptName: "中西医结合科", children: [], deptId: "12900" },
          {
            deptName: "肿瘤科",
            children: [
              { deptName: "肿瘤内科", deptId: "13001" },
              { deptName: "肿瘤外科", deptId: "13002" },
              { deptName: "肿瘤妇科", deptId: "13003" },
              { deptName: "肿瘤放疗科", deptId: "13004" },
              { deptName: "骨肿瘤科", deptId: "13005" },
            ],
            deptId: "13000",
          },
          { deptName: "运动医学科", children: [], deptId: "14000" },
          {
            deptName: "医学影像科",
            children: [
              { deptName: "医学影像科", deptId: "12400" },
              { deptName: "核医学科", deptId: "20001" },
              { deptName: "放射科", deptId: "20002" },
              { deptName: "超声科", deptId: "20003" },
            ],
            deptId: "20000",
          },
        ],
        message: "操作成功!",
        page: 0,
        size: 0,
        status: 200,
        time: 0,
        total: 0,
      },
    },

    "/api/department/pageAllDepartment": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/department/getAllOneLevelDepartment": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/doubleEleven/goods/pageFind": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/medic-admin/v1/api/medic/manager/articles/dataGather/list": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          pageNum: 1,
          totalPage: 80,
          pageSize: 20,
          total: 1594,
          rows: [
            {
              id: "5fb774a23354b46e79a95352",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/a0c87435708ae22ab9d4829a739779ec",
              title:
                "国家卫生健康委能力建设和继续教育肿瘤学专家委员会成立大会在京召开",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=6&sn=59b4272d42a4f20d9a75c8d3d1d16a60&chksm=fdba71b7cacdf8a1362cff47c75cf196bb0fe688a6fdc2ffc26afca7801a3ae6322769144fe4&scene=27#wechat_redirect",
              totalReadCount: 217,
              original: false,
              position: 3,
              publishTime: "2020-10-24 20:20:50",
              platform: "微信",
              collectTime: "2020-10-27 01:33:55",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 1,
              textBlocks: [
                {
                  label: "politics",
                  contexts: ["病，严重威胁人民群众", "，习主席提出建设“健"],
                },
              ],
              textPass: false,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95351",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/9679a939ba5de04bc9d0f3aefdb2f226",
              title: "速来！乳腺癌防治月特别专区，你想知道的这里都有！",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=5&sn=b5657de3ad9331f69dfc884671a66075&chksm=fdba71b7cacdf8a191d7a91e469eb54fae37409574d2a37318aaa4cd1ccdf6fa3e33f6e67290&scene=27#wechat_redirect",
              totalReadCount: 421,
              original: true,
              position: 3,
              publishTime: "2020-10-24 20:20:50",
              platform: "微信",
              collectTime: "2020-10-27 01:33:26",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 1,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95350",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/fbd0a0b73e4b335fa340c2862f917536",
              title:
                "HPV阳性打疫苗还有用吗？关于HPV疫苗的这5个问题你一定要知道！",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=4&sn=e408d4a2dd64a8f7f0bd630eeaca9ac3&chksm=fdba71b7cacdf8a1c67b43f5e3a03573dede068d622390069da4fc204519824ac6c4734ac573&scene=27#wechat_redirect",
              totalReadCount: 503,
              original: false,
              position: 3,
              publishTime: "2020-10-24 20:20:50",
              platform: "微信",
              collectTime: "2020-10-27 01:33:03",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95349",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/966dd5f35b50543de0315382830ccc3a",
              title: "肿瘤微环境的事——没那么简单",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099791&idx=1&sn=cedf1101ac90b65d6c6966e70bb952fb&chksm=bd5cd1c88a2b58de498121358e19278f995230cc72a6b1bb0a7eb17dd7c35ef01967db4b15cd&scene=27#wechat_redirect",
              totalReadCount: 4004,
              original: true,
              position: 1,
              publishTime: "2020-10-24 20:22:20",
              platform: "微信",
              collectTime: "2020-10-27 01:33:00",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 1,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a9534f",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/904ca74a1d20215c8d5a9f1bb79214a9",
              title:
                "10月25日，“重走革命路-肺癌规范化诊疗基层巡讲”徐州站，汇聚菁英，畅谈学术",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=3&sn=8a209b10207cb50a0b05a781e5be2cd8&chksm=fdba71b7cacdf8a1f3fd695a246f7bedd396c02aee6b0c53a0bd753ea5385c6fc68ee7b36e73&scene=27#wechat_redirect",
              totalReadCount: 2583,
              original: false,
              position: 3,
              publishTime: "2020-10-24 20:20:50",
              platform: "微信",
              collectTime: "2020-10-27 01:32:55",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 1,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a9534e",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/9bd62ddcf37660fd8ed4e5893839ca25",
              title: "解密纳米抗体新贵恩沃利单抗的独特之处",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=2&sn=90fb94b73f0630034899cc884406b5f4&chksm=fdba71b7cacdf8a1514c7f3ec0aec4eeef170f353c07197c1de10b56ff9be0911a34808fb172&scene=27#wechat_redirect",
              totalReadCount: 6448,
              original: false,
              position: 2,
              publishTime: "2020-10-24 20:20:50",
              platform: "微信",
              collectTime: "2020-10-27 01:32:30",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a9534d",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/05e9af96d27378d319e587694646e6c5",
              title: "好不容易根除了幽门螺杆菌，吃顿饭又感染上了？",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=1&sn=e09085c8de94710df5c1bf195af802f8&chksm=fdba71b7cacdf8a10ca3b2b80ce1a90b3a1ebd27b93672b881470a6fcf92ee875b4dd3a5dc3e&scene=27#wechat_redirect",
              totalReadCount: 6531,
              original: false,
              position: 1,
              publishTime: "2020-10-24 20:20:50",
              platform: "微信",
              collectTime: "2020-10-27 01:32:15",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: [
                { label: "politics", contexts: ["终于把日本鬼子消灭了，可"] },
              ],
              textPass: false,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95348",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/80634094374e878fb10033cfa727bf9b",
              title:
                "还在为找全文而绞尽脑汁？“叮！文献王通知：全文文件下载完成”",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099793&idx=2&sn=19d0b8412fea30a7f22379e27e838df9&chksm=bd5cd1d68a2b58c0d320d61ddb4269e4a9b64cef23dd0e2f0ddd01e6ff98beee6a72ce11d42d&scene=27#wechat_redirect",
              totalReadCount: 705,
              original: false,
              position: 2,
              publishTime: "2020-10-25 14:33:55",
              platform: "微信",
              collectTime: "2020-10-27 01:31:43",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95347",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/0bdd8a1fca8500df26b1ba7184044e76",
              title: "糖皮质激素在肿瘤治疗中的“多面角色”",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099793&idx=1&sn=e31fb53cfdce2e41e08891f0ca130e62&chksm=bd5cd1d68a2b58c0c770428b4972ab2da9456ae6b216828a8efc07b61ff60f04145df531e849&scene=27#wechat_redirect",
              totalReadCount: 2657,
              original: false,
              position: 1,
              publishTime: "2020-10-25 14:33:55",
              platform: "微信",
              collectTime: "2020-10-27 01:31:27",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: [{ label: "porn", contexts: [] }],
              textPass: false,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a9534c",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/d3f4e2d88a02dc6dd979102e6053cedb",
              title: "原来这些体检项目可以发现癌症，看完又涨知识了！",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525521&idx=3&sn=a2e90ffdfccdcf1d53f870406a80ace3&chksm=fdba7140cacdf8569ac8b5543ecabf9791b0ef62a1a2d1e5b8b29a28223ab4a9e5767482a9d3&scene=27#wechat_redirect",
              totalReadCount: 1473,
              original: false,
              position: 3,
              publishTime: "2020-10-25 20:08:24",
              platform: "微信",
              collectTime: "2020-10-27 01:31:20",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95346",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/03ef41a60528f724e2efc4e1b109af21",
              title: "医脉通app新功能上线--职称考试板块",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099904&idx=4&sn=84ee89aed014840b5952589108a1f0de&chksm=bd5cd0478a2b5951f19544066f10e94885573093f1b5ca16dd587cb8b43cf3e8cd5f3f148f6e&scene=27#wechat_redirect",
              totalReadCount: 39,
              original: false,
              position: 3,
              publishTime: "2020-10-26 18:55:28",
              platform: "微信",
              collectTime: "2020-10-27 01:31:00",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95345",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/3dd9176353be6159bd734f55e25f918a",
              title:
                "胡夕春教授：HER2阳性乳腺癌治疗新星，ADC药物ARX788未来可期！",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099904&idx=3&sn=837ae4e3f9c117b60171e7c8e7e56eab&chksm=bd5cd0478a2b59511e610cc0b2861cdab2412923b3e32e837a31cbbedd293ff3bc29ead641d7&scene=27#wechat_redirect",
              totalReadCount: 250,
              original: true,
              position: 3,
              publishTime: "2020-10-26 18:55:28",
              platform: "微信",
              collectTime: "2020-10-27 01:30:49",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a9534b",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/1803a70bae3d24cdaa5f66fc37c43151",
              title: "这25种黑痣可能癌变，转给所有人！",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525521&idx=2&sn=3b24216c5cf0b7a40d5f0c1401e19293&chksm=fdba7140cacdf8561f51c12549cd791acc35fa1c0b1829eb7a6290426d1e57902df53d989412&scene=27#wechat_redirect",
              totalReadCount: 6604,
              original: false,
              position: 2,
              publishTime: "2020-10-25 20:08:24",
              platform: "微信",
              collectTime: "2020-10-27 01:30:45",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: [{ label: "porn", contexts: [] }],
              textPass: false,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95344",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/2d50307b8105bf5f144c63af1514bdde",
              title: "粉红十月关注乳腺癌丨媒体专家十问十答",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099904&idx=2&sn=13015de68a744b43d3903c152984519e&chksm=bd5cd0478a2b59512d2926c8325b3d26bfed81ce6c3bf63a5cd0a1b539074a863f84ca559ceb&scene=27#wechat_redirect",
              totalReadCount: 329,
              original: false,
              position: 2,
              publishTime: "2020-10-26 18:55:28",
              platform: "微信",
              collectTime: "2020-10-27 01:30:35",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a13354b46e79a9533c",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/1c8841cbbb1c35eed4efefd5f53ed96f",
              title:
                "「今日13:00！」北京癌症防治学会胃癌防治专业委员会成立大会暨2020胃癌诊疗新进展研讨会",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzAwNjAxOTQwOA==&mid=2662631364&idx=1&sn=13a5a3a8cc090e742afba98b7ba5a1d8&chksm=8053e7fbb7246eedd716b404a913c343eac908d2c9f87a336f712500865f7d82288bdfa30063&scene=27#wechat_redirect",
              totalReadCount: 717,
              original: false,
              position: 1,
              publishTime: "2020-10-24 11:00:00",
              platform: "微信",
              collectTime: "2020-10-27 01:30:24",
              crawlSourceName: "北京大学肿瘤医院消化内科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a13354b46e79a95342",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/ae378c7c305312e60fdd3e2d6acb2881",
              title: "乳腺癌常用的免疫组化指标有哪些？",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzA5MjA2NjUwOQ==&mid=2651559302&idx=2&sn=c86d59650c196a975a4b24da9191ba2d&chksm=8b8df224bcfa7b327b42f1d5658e8540c1d0ac0bfec2cdfcf98b6165d5402c567a3d5e631e9d&scene=27#wechat_redirect",
              totalReadCount: 337,
              original: false,
              position: 2,
              publishTime: "2020-10-24 09:50:18",
              platform: "微信",
              collectTime: "2020-10-27 01:30:02",
              crawlSourceName: "肿瘤免疫细胞治疗资讯",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a13354b46e79a95341",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/c7cadc5359f894e13bfdd117edd17b3b",
              title: "图解：常用肿瘤标志物与应用误区",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzA5MjA2NjUwOQ==&mid=2651559302&idx=1&sn=f44a1d643c4df775301d602a030e9619&chksm=8b8df224bcfa7b329d5cf8b20a15dddc915f5740d52dfebf035c37b85ca26777fa691e054def&scene=27#wechat_redirect",
              totalReadCount: 748,
              original: false,
              position: 1,
              publishTime: "2020-10-24 09:50:18",
              platform: "微信",
              collectTime: "2020-10-27 01:29:55",
              crawlSourceName: "肿瘤免疫细胞治疗资讯",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a95343",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/ffe297c8ab45eb8beaefce61f1a4b923",
              title:
                "晚期乳腺癌国际共识指南第五版（ABC5）重磅发布：三大亚型治疗部分更新要点",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MjM5MTAzNjUyMA==&mid=2652099904&idx=1&sn=28d926a1224e69113125a4e6b6526da3&chksm=bd5cd0478a2b5951deff94f694ba497c83bed2f03cb00afd5210dd3aa43127464aaf8cd76334&scene=27#wechat_redirect",
              totalReadCount: 1491,
              original: true,
              position: 1,
              publishTime: "2020-10-26 18:55:28",
              platform: "微信",
              collectTime: "2020-10-27 01:29:51",
              crawlSourceName: "医脉通肿瘤科",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: [{ label: "abuse", contexts: ["im SB, Lin"] }],
              textPass: false,
              imagePass: true,
            },
            {
              id: "5fb774a23354b46e79a9534a",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/e58eaa866b9df318956c6360dddf14df",
              title:
                "“聚沙成塔，未来可期”，王洁教授为您解读2020ESMO肺癌免疫治疗最新进展",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525521&idx=1&sn=6b9afdfbd1760776bcde3a7239834dda&chksm=fdba7140cacdf8563327b07c69e25abbe15a13e4848e9ead586f0323d4f5b7be9a5d7df6d93b&scene=27#wechat_redirect",
              totalReadCount: 3673,
              original: true,
              position: 1,
              publishTime: "2020-10-25 20:08:24",
              platform: "微信",
              collectTime: "2020-10-27 01:29:48",
              crawlSourceName: "医学界肿瘤频道",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
            {
              id: "5fb774a13354b46e79a95340",
              coverUrl:
                "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/58dad2facb7fb08a52a20acd1dcc94c2",
              title: "还在担心穿刺活检会致肿瘤转移？",
              sourceUrl:
                "http://mp.weixin.qq.com/s?__biz=MzA5MjA2NjUwOQ==&mid=2651559314&idx=2&sn=b227681b91c32d5581699326dacc0c0c&chksm=8b8df230bcfa7b26ac91f1ec2f557d2990841136bef71b72aebe6039c5e351aa9b68d3776db4&scene=27#wechat_redirect",
              totalReadCount: 444,
              original: false,
              position: 2,
              publishTime: "2020-10-25 07:00:52",
              platform: "微信",
              collectTime: "2020-10-27 01:29:48",
              crawlSourceName: "肿瘤免疫细胞治疗资讯",
              department: "肿瘤",
              deleted: 0,
              accepted: 0,
              textBlocks: null,
              textPass: true,
              imagePass: true,
            },
          ],
          nextPageNum: 0,
        },
      },
    },

    "/api/redis/getValue": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/welfare/uCustomer/pageCustomer": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/index/findIndexData": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/iask/advertiser/getAdvertiserCount": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/api/gateway/doctor/d/admin/consult/getConsultAssembledStatus": {
      body: {
        status: 200,
        message: "请求成功",
        data: [
          { key: "CANCEL", value: "支付取消" },
          { key: "INIT", value: "待支付" },
          { key: "QUESTION", value: "待首答" },
          { key: "FINISH", value: "待评价" },
          { key: "ANSWER_REQUEST", value: "进行中" },
          { key: "PATIENT_APPRAISE", value: "主动评价" },
          { key: "DEFAULT_APPRAISE", value: "默认好评" },
          { key: "DOCTOR_NON_PROFESSIONAL", value: "医生主动退款" },
          { key: "DOCTOR_ANSWER_TIMEOUT", value: "首答超时" },
          { key: "PATIENT_REFUND_APPEAL_AUDITING", value: "申诉退款中" },
          { key: "PATIENT_REFUND_APPEAL_PASS", value: "退款审核通过" },
          { key: "PATIENT_REFUND_APPEAL_REFUSE", value: "退款审核不通过" },
        ],
      },
    },
    "/api/gateway/doctor/d/admin/consult/getConsults": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          pageNum: 1,
          totalPage: 110,
          pageSize: 10,
          total: 1091,
          rows: [
            {
              consultId: "19xI7zZ56UO",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "hbj微博平台激活专用号",
              departmentName: "小儿营养保健科",
              doctorId: "5fc495a297a1c000067d4560",
              orderPrice: 6.0,
              consultState: "进行中",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-21 10:11:29",
            },
            {
              consultId: "19fogcgw3E6",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "hbj微博平台激活专用号",
              departmentName: "小儿营养保健科",
              doctorId: "5fc495a297a1c000067d4560",
              orderPrice: 0.0,
              consultState: "主动评价",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-21 09:54:22",
            },
            {
              consultId: "196ejBCVJwS",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "宝娟test",
              departmentName: "内分泌科",
              doctorId: "5fb63fce97a1c000066c8606",
              orderPrice: 0.0,
              consultState: "主动评价",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-21 09:53:16",
            },
            {
              consultId: "19BPJUWOrBM",
              patientRealName: "爱问用户397501",
              doctorRealName: "大巧不工",
              departmentName: "骨关节科",
              doctorId: "5fbb806897a1c0000625ae60",
              orderPrice: 0.0,
              consultState: "首答超时",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-21 09:51:53",
            },
            {
              consultId: "19o5E1ILQts",
              patientRealName: "爱问用户397501",
              doctorRealName: "大巧不工",
              departmentName: "骨关节科",
              doctorId: "5fbb806897a1c0000625ae60",
              orderPrice: 0.0,
              consultState: "首答超时",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-20 18:34:40",
            },
            {
              consultId: "19jvDEoTaps",
              patientRealName: "爱问用户397501",
              doctorRealName: "大巧不工",
              departmentName: "骨关节科",
              doctorId: "5fbb806897a1c0000625ae60",
              orderPrice: 0.0,
              consultState: "首答超时",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-20 18:29:21",
            },
            {
              consultId: "19alQQ4J55U",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "宝娟test",
              departmentName: "内分泌科",
              doctorId: "5fb63fce97a1c000066c8606",
              orderPrice: 6.0,
              consultState: "待评价",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-20 16:54:20",
            },
            {
              consultId: "18WBUSNpyoW",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "宝娟test",
              departmentName: "内分泌科",
              doctorId: "5fb63fce97a1c000066c8606",
              orderPrice: 0.0,
              consultState: "待首答",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-20 16:51:52",
            },
            {
              consultId: "19nDctIfkzE",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "宝娟test",
              departmentName: "内分泌科",
              doctorId: "5fb63fce97a1c000066c8606",
              orderPrice: 0.0,
              consultState: "待首答",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-20 16:51:41",
            },
            {
              consultId: "19j3uovD9XQ",
              patientRealName: "04_测试环境_hbj",
              doctorRealName: "宝娟test",
              departmentName: "内分泌科",
              doctorId: "5fb63fce97a1c000066c8606",
              orderPrice: 0.0,
              consultState: "待首答",
              orderSource: "普通问题",
              doctorLevel: null,
              createTime: "2021-04-20 16:51:31",
            },
          ],
          nextPageNum: 0,
        },
      },
    },
    "/api/menu/list": {
      body: {
        status: 200,
      },
    },
    "/medic-admin/v1/api/medic/manager/topic/relation/updateTopicRelationStatus":
      {
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
          url: "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
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
        data: [
          { id: "1", name: "儿科" },
          { id: "2", name: "政策产经" },
          { id: "3", name: "耳鼻喉" },
          { id: "4", name: "风湿免疫" },
          { id: "5", name: "妇产" },
          { id: "6", name: "感染" },
          { id: "7", name: "骨科" },
          { id: "8", name: "呼吸" },
          { id: "9", name: "护理" },
          { id: "10", name: "急诊重症" },
          { id: "11", name: "检验" },
          { id: "12", name: "精神心理" },
          { id: "13", name: "口腔" },
          { id: "14", name: "麻醉" },
          { id: "15", name: "泌尿外" },
          { id: "16", name: "内分泌" },
          { id: "17", name: "皮肤性病" },
          { id: "18", name: "烧伤整形" },
          { id: "19", name: "肾内" },
          { id: "20", name: "神经外" },
          { id: "21", name: "普外" },
          { id: "22", name: "推荐" },
          { id: "23", name: "调研" },
          { id: "24", name: "心胸外" },
          { id: "25", name: "心血管" },
          { id: "26", name: "血液" },
          { id: "27", name: "眼科" },
          { id: "28", name: "药学" },
          { id: "29", name: "营养" },
          { id: "30", name: "影像" },
          { id: "31", name: "肿瘤" },
          { id: "32", name: "神经" },
          { id: "33", name: "消化肝病" },
          { id: "34", name: "医院管理" },
        ],
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
