(function getApis() {
  return {
    "/p/h5/consultcase/doctorinfo": {
      body: {
        status: 200,
        data: {
          // "avatarUrl": "",
          avatarUrl:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          blockCurrentUser: true,
          departId: "",
          departments: "",
          drServiceCard: {
            consult: {
              isFree: true,
              isOpen: true,
              price: 0,
            },
            outpatient: {
              isFree: true,
              isOpen: true,
              price: 0,
            },
            telephone: {
              isFree: true,
              isOpen: true,
              price: 0,
            },
          },
          hospitalLevel: "",
          id: "",
          medicalInstitutions: "北京协和医院",
          realName: "扁鹊",
          titles: "主治医师",
        },
        message: "",
      },
    },
    //
    "/p/h5/consultcase/consultShareInfo": {
      body: {
        status: 200,
        // status: 5908005,
        data: {
          dialogs: [
            {
              content:
                "https://wenwo-audio-bucket-test.oss-cn-beijing.aliyuncs.com/94dddbc53a8079134551098c493844b9",
              picIds: [],
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "2",
              voiceLength: 400,
            },
            {
              content:
                "<a href='http://www.baidu.com'>如何打鸡血</a>医生说的\"话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话医生说的话",
              picIds: [],
              postTime: 1612495440531,
              isQuest: false,
              voiceLength: 0,
            },
            {
              content:
                "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
              picIds: [],
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "1",
              voiceLength: 0,
            },
            {
              content: "医生说的话加上图片",
              picIds: [
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              ],
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "3",
              voiceLength: 0,
            },
            {
              content: "医生发了一张图片",
              picIds: [
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              ],
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "3",
              voiceLength: 0,
            },
            {
              content: "存在隐藏的图片",
              picIds: [
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              ],
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "3",
              picShieldEd: true,
              voiceLength: 0,
            },
            {
              content: "图片都被隐藏了",
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "3",
              picShieldEd: true,

              voiceLength: 0,
            },
            {
              content: "医生发了二张张图片",
              picIds: [
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              ],
              postTime: 1612495440531,
              isQuest: false,
              replyMsgType: "3",
              voiceLength: 0,
            },
            {
              content: "患者的话",
              picIds: [],
              postTime: 1612495440531,
              isQuest: true,
              replyMsgType: "",
              voiceLength: 0,
            },
            {
              content: "患者发了图片",
              picIds: [
                "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
              ],
              postTime: 1612495440531,
              isQuest: true,
              replyMsgType: "3",
              voiceLength: 0,
            },
          ],
          drId: "WQWQEWASSADAS",
          id: "askljdkladjakl",
          needHelp: "",
          postTime: "1612495440531",
          questionId: "",
          seoTitle:
            "您好！“”感谢您的信任及付费咨询！您目前肛周这个问,asd,jhdsajkhkasdhlsakjh",
          needHelp: "您好！感谢您的信任及付费咨询！您目前肛周这个问",
          description:
            "您好！感谢您的信任及付费咨询！您目前肛周这个问,asdjldhjlkashasjkahsdkj",
          questionTitleMosaic: false,
          seoDescription:
            "您好！感谢\"您的信<任及'付费咨询'！<br><br>您目\"前肛周这个问题，要考虑是痔疮，这个并不考虑是尖锐湿疣的。<br><br>虽然说尖锐湿疣也是会长在肛周",
        },
        message: "",
      },
    },
    "/p/h5/consultcase/consultShareHot": {
      body: {
        status: 200,
        // "status": 404,

        data: [
          {
            questionTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsad",
            realName: "杨西川",
            titles: "主任医师",
          },
          {
            questionTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsad1",
            realName: "杨西川",
            titles: "主任医师",
          },
          {
            questionTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsad7",
            realName: "杨西川",
            titles: "主任医师",
          },
          {
            drTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsssad7",
            realName: "杨西川",
            titles: "主任医师",
          },
        ],
        message: "",
      },
    },
    "/p/h5/consultcase/consultShareSimple": {
      body: {
        data: [
          {
            questionTitle:
              "优质案例杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可",
            questionId: "23edwafsad",
            drRealName: "杨西川",
            drTitle: "主任医师",
          },
          {
            questionTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsad1",
            drRealName: "杨西川",
            drTitle: "主任医师",
          },
          {
            questionTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsad2",
            drRealName: "杨西川",
            drTitle: "主任医师",
          },
          {
            questionTitle:
              "杨医生，在您的指导下，孩子服用美能片和擦他克莫司和氢化可的松。已经有四个月了，眼皮上的白斑有了改善。在伦敦皮肤科医生那里做了两次wood灯扫描。对比之后发现白斑的面积和亮度都减少了。脖子上也有一块白斑，但wood灯扫描没有亮白反应，但也使用了同样的药膏。这几天发现嘴角也有一点点白斑，也开始用药膏。我想问问美能片要需要吃嘛？药膏是否仍然接着使用？不知道这个美能片对孩子身体副作用大吗？",
            questionId: "23edwafsad5",
            drRealName: "杨西川",
            drTitle: "主任医师",
          },
        ],
        message: "",
        status: 200,
      },
    },
  };
})();
