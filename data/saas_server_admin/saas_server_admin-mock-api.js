(function getApis() {
  const Mock = require("mockjs");
  const Random = Mock.Random;
  return {
    "/api/gateway/doctor/d/admin/configure/getBlackListDetails": {
      body: {
        data: {
          business: [
            {
              checked: false,
              name: "",
              type: "",
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
          },
          {
            createTime: "2019-25-08 12:09:30",
            id: 1,
            name: "金赛",
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
        data: {},
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
