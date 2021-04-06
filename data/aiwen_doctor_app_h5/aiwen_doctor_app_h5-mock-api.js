
(function getApis() {
  return {
    "/api/doctor/application/h5/area/getAllArea": {
      status: 200,
      data: [
        {
          "dictValue": "北京",
          "dictDesc": "北京",
          "dictCode": "110000",
          "dictId": 1,
          "list": [
            {
              "dictValue": "北京市",
              "dictDesc": "北京市",
              "dictCode": "110100",
              "dictId": 37,
              "list": [
                {
                  "dictValue": "东城区",
                  "dictDesc": "北京市,东城区",
                  "dictCode": "110101",
                  "dictId": 410,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "西城区",
                  "dictDesc": "北京市,西城区",
                  "dictCode": "110102",
                  "dictId": 411,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "朝阳区",
                  "dictDesc": "北京市,朝阳区",
                  "dictCode": "110105",
                  "dictId": 412,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "丰台区",
                  "dictDesc": "北京市,丰台区",
                  "dictCode": "110106",
                  "dictId": 413,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "石景山区",
                  "dictDesc": "北京市,石景山区",
                  "dictCode": "110107",
                  "dictId": 414,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "海淀区",
                  "dictDesc": "北京市,海淀区",
                  "dictCode": "110108",
                  "dictId": 415,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "门头沟区",
                  "dictDesc": "北京市,门头沟区",
                  "dictCode": "110109",
                  "dictId": 416,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "房山区",
                  "dictDesc": "北京市,房山区",
                  "dictCode": "110111",
                  "dictId": 417,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "通州区",
                  "dictDesc": "北京市,通州区",
                  "dictCode": "110112",
                  "dictId": 418,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "顺义区",
                  "dictDesc": "北京市,顺义区",
                  "dictCode": "110113",
                  "dictId": 419,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "昌平区",
                  "dictDesc": "北京市,昌平区",
                  "dictCode": "110114",
                  "dictId": 420,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "大兴区",
                  "dictDesc": "北京市,大兴区",
                  "dictCode": "110115",
                  "dictId": 421,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "怀柔区",
                  "dictDesc": "北京市,怀柔区",
                  "dictCode": "110116",
                  "dictId": 422,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "平谷区",
                  "dictDesc": "北京市,平谷区",
                  "dictCode": "110117",
                  "dictId": 423,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "密云县",
                  "dictDesc": "北京市,密云县",
                  "dictCode": "110228",
                  "dictId": 424,
                  "list": [],
                  "dictLevel": 3
                },
                {
                  "dictValue": "延庆县",
                  "dictDesc": "北京市,延庆县",
                  "dictCode": "110229",
                  "dictId": 425,
                  "list": [],
                  "dictLevel": 3
                }
              ],
              "dictLevel": 2
            }
          ],
          "dictLevel": 1
        },
      ]
    },
    "/api/doctor/application/h5/code/checkIdCardFormat": {
      status: 200
    },
    "/api/doctor/application/h5/file/uploadImg": {
      status: 200,
      data: {
        id: Math.random() + "",
        url: "https://pic.wenwo.com/fimg/996e6cbdefc0312c8d5cce885a4dd8c2.jpg"
      }

    }
  };
})();

