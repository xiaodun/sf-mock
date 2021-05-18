(function getApis() {
  return {
    "/p/h5/patient/arrival/createArrivalDialogue": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          id: 989,
          arrivalId: 261,
          dialogueId: 1874,
          createTime: "2021-05-18 09:46:25",
          updateTime: "2021-05-18 09:46:25",
        },
      },
    },

    "/p/h5/patient/arrival/patientUserArrival": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          userId: "609c9fa5c8bfb64fc52378fe",
          avatar:
            "https://pic.wenwo.com/fimg/3ee2c0e21d82fd3c218c61d3bcb3c57c.jpg",
          patientId: "609c9fe4c8bfb64fc52378ff",
          patientTrueName: "测试患者",
          patientAge: 0,
          patientSex: "男",
          descriptive: "122222222222222222222222",
          pictureUrls: ["https://consult-img.wenwo.com/fimg/82473146.jpg"],
          arrivalStatus: "INIT",
          arrivalId: 261,
          followUpVisit: 0,
        },
      },
    },

    "/p/h5/consult/province-city": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/p/h5/personal/isShowOwner": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/p/h5/patient/arrival/getDoctor": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          doctorId: "5c049875b1a9c400086087cc",
          realName: "付万琴",
          title: "住院医师",
          hospitalName: "临沂市第一人民医院",
          departmentName: "小儿营养保健科",
          doctorAvatarUrl:
            "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/e916da37b67d8156bde014a1ada7373f",
        },
      },
    },

    "/p/h5/prescription/getPrescriptionStatusInfos": {
      body: { status: 200, message: "请求成功", data: [] },
    },

    "/p/h5/personal/getPresctiptionReminderStatus": {
      body: { status: 200, message: "请求成功", data: { status: "NOT_EXIST" } },
    },

    "/p/h5/personal/getFamilyMember": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          id: "609c9fe4c8bfb64fc52378ff",
          userId: "609c9fa5c8bfb64fc52378fe",
          phone: null,
          card: null,
          cardType: null,
          trueName: "测试患者",
          sex: "男",
          birth: "2021-05-13",
          provinceId: null,
          provinceName: null,
          cityId: null,
          cityName: null,
          relation: "家庭成员",
          isOwner: false,
          isChecked: null,
          isDeleted: false,
          lastUpdate: "2021-05-13 11:41:24",
          height: "180",
          weight: "79",
          bloodPressure: null,
          bloodType: "B型",
          medicalRecords: "啊世界十大健康哈的会计啊的哈是的就看",
          allergic: "无",
          thirdPatientId: null,
          thirdCompangyId: null,
          thirdPartyHospitalPatientId: null,
          isDefault: false,
          nameCertificationStatus: "I",
        },
      },
    },

    "/p/h5/patient/arrival/getArrivalDialogueList": {
      body: {
        status: 200,
        message: "请求成功",
        data: [
          {
            createTime: 1621299973000,
            content: "医生您好，患者测试患者来报到了，请您接收~",
            fromRole: "PATIENT",
          },
          {
            createTime: 1621299973000,
            content:
              "您好，我已收到您的就诊报到，待我核实信息后，就可以与我对话了，请耐心等待~",
            fromRole: "DOCTOR",
          },
        ],
      },
    },

    "/p/h5/patient/arrival/getArrivalInfo": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          arrivalId: 261,
          remainTime: 1200000,
          remainRound: 3,
          endTime: null,
          pictureUrls: ["https://consult-img.wenwo.com/fimg/82473146.jpg"],
          descriptive: "122222222222222222222222",
          followUpVisit: false,
          userId: "609c9fa5c8bfb64fc52378fe",
          patientId: "609c9fe4c8bfb64fc52378ff",
          patientAvatarUrl:
            "https://pic.wenwo.com/fimg/3ee2c0e21d82fd3c218c61d3bcb3c57c.jpg",
          // 状态(1未接收，2已接收，3已拒绝，4结束 )
          status: 2,
          isShowMyPrescription: true,
        },
      },
    },

    "/p/h5/patient/arrival/getDoctorInfo": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          doctorId: "5c049875b1a9c400086087cc",
          realName: "付万琴",
          titles: "住院医师",
          departmentName: "小儿营养保健科",
          areasOfExpertise: "ರ_ರ 心塞我想要和你一起慢慢变老",
          doctorAvatarUrl:
            "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/e916da37b67d8156bde014a1ada7373f",
          isOpenConsult: true,
          isOpenTelephone: true,
          isOpenOutpatient: true,
          isShowMyPrescription: true,
        },
      },
    },

    "/p/h5/consult/createConsult": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/p/h5/consult/getFamilyMembers": {
      body: {
        status: 200,
        message: "请求成功",
        data: [
          {
            id: "609c9fe4c8bfb64fc52378ff",
            trueName: "测试患者",
            sex: "男",
            birth: "2021-05-13",
            weight: "79",
            select: true,
          },
        ],
      },
    },

    "/p/h5/consult/getConsultDialogues": {
      body: {
        status: 200,
        data: [
          {
            content:
              "医生说的话加上文字，医生说的话加上文字医生说的话加上文字医生说的话加上文字",
            createTime: 0,
            doctorId: "",
            id: "",
            patientId: "",
            pictureUrls: [
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            ],
            quest: false,
            voiceLength: 0,
            voiceUrl: "",
          },
          {
            content: "患者的话",
            createTime: 0,
            doctorId: "",
            id: "",
            patientId: "",
            pictureUrls: [
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            ],
            quest: true,
            voiceLength: 0,
            voiceUrl: "",
          },
          {
            createTime: 0,
            doctorId: "",
            id: "",
            patientId: "",
            pictureUrls: [],
            quest: false,
            voiceLength: 400,
            voiceUrl:
              "https://wenwo-audio-bucket-test.oss-cn-beijing.aliyuncs.com/94dddbc53a8079134551098c493844b9",
          },
          {
            content: "患者语音",
            createTime: 0,
            doctorId: "",
            id: "",
            patientId: "",
            pictureUrls: [],
            quest: true,
            voiceLength: 400,
            voiceUrl:
              "https://wenwo-audio-bucket-test.oss-cn-beijing.aliyuncs.com/94dddbc53a8079134551098c493844b9",
          },
        ],
      },
    },
    "/p/h5/consult/getConsultById": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          appraise: {
            content: "",
            createTime: 0,
            grade: 0,
            id: "",
            tags: [],
            type: "",
          },
          createTime: 0,
          doctorId: "53df5e79e4b04749584a5de1",
          doctorRealName: "",
          finishType: "",
          patientId: "",
          patientRealName: "",
          payStatus: "",
          permitAppraise: true,
          permitRefund: true,
          questionContent: "",
          questionPictureUrls: [],
          questionRequirement: "",
          questionTimeoutSeconds: 0,
          refund: {
            auditTime: 0,
            createTime: 0,
            doctorRefundReason: "",
            id: "",
            refundAuditStatus: "",
            refundDeclineReason: "",
          },
          restTime: true,
          round: 0,
          roundLimitation: 0,
          status: "",
          userMember: {
            birth: "",
            id: "",
            sex: "",
            trueName: "",
          },
        },
      },
    },
    "/p/h5/consult/getConsultDoctor": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          id: "53df5e79e4b04749584a5de1",
          hospitalLevel: "三级甲等",
          realName: "李宏远",
          areasOfExpertise: "",
          avatarUrl: "",
          //被医生屏蔽
          blockCurrentUser: false,
          consultSetting: {
            //开通图文咨询
            enabled: true,
            // 咨询名额
            free: true,
            originalPrice: "",
            showPrice: "",
            //医生休息
            suspend: false,
            suspendEndSeconds: "",
          },
          departments: "营养科",
          medicalInstitutions: "湖南军区机关医院",
          titles: "主任医师",
          workUnit: "工作单位",
        },
      },
    },
    "/p/h5/consult/getRecommendDoctors": {
      body: [
        {
          avatarUrl:
            "https://www.google.com/search?q=%E5%9B%BE%E7%89%87&tbm=isch&source=iu&ictx=1&fir=vQjlM9KtkGsb_M%252CJeaDEV9l4RQZhM%252C_&vet=1&usg=AI4_-kTHQSaEWY8Hyc_KflPp4H67JSU8nA&sa=X&ved=2ahUKEwj9m7KK7ovuAhXDbt4KHQDTA2QQ9QF6BAgPEAE#imgrc=vQjlM9KtkGsb_M",
          departments: "生产部",
          id: "53df5e79e4b04749584a5de1",
          realName: "李宏远",
        },
      ],
    },
    "/p/h5/oss/sensitiveImage": {
      body: {
        status: 200,
        data: {
          id: Math.random() + "",
          url:
            "https://www.google.com/search?q=%E5%9B%BE%E7%89%87&tbm=isch&source=iu&ictx=1&fir=vQjlM9KtkGsb_M%252CJeaDEV9l4RQZhM%252C_&vet=1&usg=AI4_-kTHQSaEWY8Hyc_KflPp4H67JSU8nA&sa=X&ved=2ahUKEwj9m7KK7ovuAhXDbt4KHQDTA2QQ9QF6BAgPEAE#imgrc=vQjlM9KtkGsb_M",
        },
      },
    },
    "/p/h5/consult/getLatestConsult": {
      body: {
        status: 200,
        data: {
          doctorId: "",
          id: "consultId",
          payStatus: "",
          questionContent: "",
          questionPictureUrls: [],
          // "status": "INIT",
          userId: "",
          userMemberId: "",
        },
      },
    },
    "/p/h5/consult/getConsultById": {
      body: {
        status: 200,
        data: {
          doctorId: "",
          id: "",
          payStatus: "",
          questionContent: "",
          questionPictureUrls: [],
          // "status": "INIT",
          userId: "",
          userMemberId: "",
        },
      },
    },
    "/p/h5/consult/getConsultOrder": {
      body: {
        consultCreateTime: 0,
        consultId: "",
        doctorActualPrice: "",
        doctorAvatarUrl: "",
        doctorId: "",
        doctorRealName: "",
        doctorShowPrice: "",
        orderId: "",
        payStatus: "",
        unpaidTimeoutSeconds: 0,
      },
    },
  };
})();
