
(function getApis() {
  return {
    "/p/h5/consult/getConsultDialogues": {
      status: 200,
      data: [
        {
          "content": "医生说的话加上文字，医生说的话加上文字医生说的话加上文字医生说的话加上文字",
          "createTime": 0,
          "doctorId": "",
          "id": "",
          "patientId": "",
          "pictureUrls": ["https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp"],
          "quest": false,
          "voiceLength": 0,
          "voiceUrl": ""
        },
        {
          "content": "患者的话",
          "createTime": 0,
          "doctorId": "",
          "id": "",
          "patientId": "",
          "pictureUrls": ["https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp"],
          "quest": true,
          "voiceLength": 0,
          "voiceUrl": ""
        }, {
          "createTime": 0,
          "doctorId": "",
          "id": "",
          "patientId": "",
          "pictureUrls": [],
          "quest": false,
          "voiceLength": 400,
          "voiceUrl": "https://wenwo-audio-bucket-test.oss-cn-beijing.aliyuncs.com/94dddbc53a8079134551098c493844b9"
        }, {
          "content": "患者语音",
          "createTime": 0,
          "doctorId": "",
          "id": "",
          "patientId": "",
          "pictureUrls": [],
          "quest": true,
          "voiceLength": 400,
          "voiceUrl": "https://wenwo-audio-bucket-test.oss-cn-beijing.aliyuncs.com/94dddbc53a8079134551098c493844b9"
        }]
    },
    "/p/h5/consult/getConsultById": {
      status: 200,
      message: '请求成功',
      data: {
        "appraise": {
          "content": "",
          "createTime": 0,
          "grade": 0,
          "id": "",
          "tags": [],
          "type": ""
        },
        "createTime": 0,
        "doctorId": "53df5e79e4b04749584a5de1",
        "doctorRealName": "",
        "finishType": "",
        "patientId": "",
        "patientRealName": "",
        "payStatus": "",
        "permitAppraise": true,
        "permitRefund": true,
        "questionContent": "",
        "questionPictureUrls": [],
        "questionRequirement": "",
        "questionTimeoutSeconds": 0,
        "refund": {
          "auditTime": 0,
          "createTime": 0,
          "doctorRefundReason": "",
          "id": "",
          "refundAuditStatus": "",
          "refundDeclineReason": ""
        },
        "restTime": true,
        "round": 0,
        "roundLimitation": 0,
        "status": "",
        "userMember": {
          "birth": "",
          "id": "",
          "sex": "",
          "trueName": ""
        }
      }
    },
    '/p/h5/consult/getConsultDoctor': {
      status: 200,
      message: '请求成功',
      data: {
        id: '53df5e79e4b04749584a5de1',
        hospitalLevel: "三级甲等",
        realName: '李宏远',
        areasOfExpertise: '',
        avatarUrl: '',
        //被医生屏蔽
        blockCurrentUser: false,
        consultSetting: {
          //开通图文咨询
          enabled: true,
          // 咨询名额
          free: true,
          originalPrice: '',
          showPrice: '',
          //医生休息
          suspend: false,
          suspendEndSeconds: '',
        },
        departments: '营养科',
        medicalInstitutions: '湖南军区机关医院',
        titles: '主任医师',
        workUnit: '工作单位',
      },
    },
    '/p/h5/consult/getRecommendDoctors': [
      {
        avatarUrl:
          'https://www.google.com/search?q=%E5%9B%BE%E7%89%87&tbm=isch&source=iu&ictx=1&fir=vQjlM9KtkGsb_M%252CJeaDEV9l4RQZhM%252C_&vet=1&usg=AI4_-kTHQSaEWY8Hyc_KflPp4H67JSU8nA&sa=X&ved=2ahUKEwj9m7KK7ovuAhXDbt4KHQDTA2QQ9QF6BAgPEAE#imgrc=vQjlM9KtkGsb_M',
        departments: '生产部',
        id: '53df5e79e4b04749584a5de1',
        realName: '李宏远',
      },
    ],
    '/p/h5/oss/sensitiveImage': {
      status: 200,
      data: {

        id: Math.random() + "",
        url: "https://www.google.com/search?q=%E5%9B%BE%E7%89%87&tbm=isch&source=iu&ictx=1&fir=vQjlM9KtkGsb_M%252CJeaDEV9l4RQZhM%252C_&vet=1&usg=AI4_-kTHQSaEWY8Hyc_KflPp4H67JSU8nA&sa=X&ved=2ahUKEwj9m7KK7ovuAhXDbt4KHQDTA2QQ9QF6BAgPEAE#imgrc=vQjlM9KtkGsb_M"
      }
    },
    '/p/h5/consult/getLatestConsult': {
      status: 200,
      data: {
        "doctorId": "",
        "id": "consultId",
        "payStatus": "",
        "questionContent": "",
        "questionPictureUrls": [],
        // "status": "INIT",
        "userId": "",
        "userMemberId": ""
      }
    },
    '/p/h5/consult/getConsultById': {
      status: 200,
      data: {
        "doctorId": "",
        "id": "",
        "payStatus": "",
        "questionContent": "",
        "questionPictureUrls": [],
        // "status": "INIT",
        "userId": "",
        "userMemberId": ""
      }
    },
    "/p/h5/consult/getConsultOrder": {
      consultCreateTime: 0,
      "consultId": "",
      "doctorActualPrice": "",
      "doctorAvatarUrl": "",
      "doctorId": "",
      "doctorRealName": "",
      "doctorShowPrice": "",
      "orderId": "",
      "payStatus": "",
      "unpaidTimeoutSeconds": 0
    },
  }
})();

