(function () {
  return (data) => {
    console.log(data.params);
    if (data.params.code == "6009") {

      return {
        "success": true,
        "data": {
          "time": "2026-03-21 12:00:00",
          "date": "2026-03-21",
          "code": "6001",
          "homeTeam": "布里斯班",
          "visitingTeam": "惠灵顿",
          "openVictory": false,
          "handicapCount": -1,
          "oddsInfos": {
            "singleVictory": {
              "win": "1.85",
              "draw": "3.40",
              "lose": "3.40"
            },
            "handicapVictory": {
              "win": "3.66",
              "draw": "3.55",
              "lose": "1.74"
            },
            "score": {
              "winList": [
                {
                  "home": 1,
                  "visiting": 0,
                  "odd": "7.25"
                },
                {
                  "home": 2,
                  "visiting": 0,
                  "odd": "9.25"
                },
                {
                  "home": 2,
                  "visiting": 1,
                  "odd": "7.25"
                },
                {
                  "home": 3,
                  "visiting": 0,
                  "odd": "16.00"
                },
                {
                  "home": 3,
                  "visiting": 1,
                  "odd": "14.00"
                },
                {
                  "home": 3,
                  "visiting": 2,
                  "odd": "22.00"
                },
                {
                  "home": 4,
                  "visiting": 0,
                  "odd": "40.00"
                },
                {
                  "home": 4,
                  "visiting": 1,
                  "odd": "34.00"
                },
                {
                  "home": 4,
                  "visiting": 2,
                  "odd": "55.00"
                },
                {
                  "home": 5,
                  "visiting": 0,
                  "odd": "95.00"
                },
                {
                  "home": 5,
                  "visiting": 1,
                  "odd": "90.00"
                },
                {
                  "home": 5,
                  "visiting": 2,
                  "odd": "150.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "胜其它",
                  "odd": "50.00"
                }
              ],
              "drawList": [
                {
                  "home": 0,
                  "visiting": 0,
                  "odd": "12.50"
                },
                {
                  "home": 1,
                  "visiting": 1,
                  "odd": "6.25"
                },
                {
                  "home": 2,
                  "visiting": 2,
                  "odd": "12.00"
                },
                {
                  "home": 3,
                  "visiting": 3,
                  "odd": "55.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "平其他",
                  "odd": "150.00"
                }
              ],
              "loseList": [
                {
                  "home": 0,
                  "visiting": 1,
                  "odd": "11.00"
                },
                {
                  "home": 0,
                  "visiting": 2,
                  "odd": "19.00"
                },
                {
                  "home": 1,
                  "visiting": 2,
                  "odd": "10.50"
                },
                {
                  "home": 0,
                  "visiting": 3,
                  "odd": "50.00"
                },
                {
                  "home": 1,
                  "visiting": 3,
                  "odd": "28.00"
                },
                {
                  "home": 2,
                  "visiting": 3,
                  "odd": "30.00"
                },
                {
                  "home": 0,
                  "visiting": 4,
                  "odd": "125.00"
                },
                {
                  "home": 1,
                  "visiting": 4,
                  "odd": "85.00"
                },
                {
                  "home": 2,
                  "visiting": 4,
                  "odd": "90.00"
                },
                {
                  "home": 0,
                  "visiting": 5,
                  "odd": "400.00"
                },
                {
                  "home": 1,
                  "visiting": 5,
                  "odd": "300.00"
                },
                {
                  "home": 2,
                  "visiting": 5,
                  "odd": "400.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "负其它",
                  "odd": "100.00"
                }
              ]
            },
            "goalList": [
              {
                "count": 0,
                "desc": "0球",
                "odd": "12.50"
              },
              {
                "count": 1,
                "desc": "1球",
                "odd": "4.95"
              },
              {
                "count": 2,
                "desc": "2球",
                "odd": "3.55"
              },
              {
                "count": 3,
                "desc": "3球",
                "odd": "3.50"
              },
              {
                "count": 4,
                "desc": "4球",
                "odd": "5.15"
              },
              {
                "count": 5,
                "desc": "5球",
                "odd": "9.50"
              },
              {
                "count": 6,
                "desc": "6球",
                "odd": "16.00"
              },
              {
                "count": null,
                "desc": "7+",
                "isOther": true,
                "odd": "23.00"
              }
            ],
            "halfVictoryList": [
              {
                "home": "胜",
                "visiting": "胜",
                "odd": "3.00"
              },
              {
                "home": "胜",
                "visiting": "平",
                "odd": "14.00"
              },
              {
                "home": "胜",
                "visiting": "负",
                "odd": "27.00"
              },
              {
                "home": "平",
                "visiting": "胜",
                "odd": "4.70"
              },
              {
                "home": "平",
                "visiting": "平",
                "odd": "5.70"
              },
              {
                "home": "平",
                "visiting": "负",
                "odd": "7.75"
              },
              {
                "home": "负",
                "visiting": "胜",
                "odd": "20.00"
              },
              {
                "home": "负",
                "visiting": "平",
                "odd": "14.00"
              },
              {
                "home": "负",
                "visiting": "负",
                "odd": "5.75"
              }
            ]
          }
        }
      }
    }
    else if (data.params.code == "6011") {
      return {
        "success": true,
        "data": {
          "time": "2026-03-21 13:00:00",
          "date": "2026-03-21",
          "code": "6002",
          "homeTeam": "大田市民",
          "visitingTeam": "全北现代",
          "openVictory": true,
          "handicapCount": 1,
          "oddsInfos": {
            "singleVictory": {
              "win": "2.79",
              "draw": "3.15",
              "lose": "2.21"
            },
            "handicapVictory": {
              "win": "1.50",
              "draw": "3.85",
              "lose": "4.95"
            },
            "score": {
              "winList": [
                {
                  "home": 1,
                  "visiting": 0,
                  "odd": "9.50"
                },
                {
                  "home": 2,
                  "visiting": 0,
                  "odd": "13.50"
                },
                {
                  "home": 2,
                  "visiting": 1,
                  "odd": "8.80"
                },
                {
                  "home": 3,
                  "visiting": 0,
                  "odd": "30.00"
                },
                {
                  "home": 3,
                  "visiting": 1,
                  "odd": "22.00"
                },
                {
                  "home": 3,
                  "visiting": 2,
                  "odd": "29.00"
                },
                {
                  "home": 4,
                  "visiting": 0,
                  "odd": "100.00"
                },
                {
                  "home": 4,
                  "visiting": 1,
                  "odd": "70.00"
                },
                {
                  "home": 4,
                  "visiting": 2,
                  "odd": "100.00"
                },
                {
                  "home": 5,
                  "visiting": 0,
                  "odd": "350.00"
                },
                {
                  "home": 5,
                  "visiting": 1,
                  "odd": "300.00"
                },
                {
                  "home": 5,
                  "visiting": 2,
                  "odd": "350.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "胜其它",
                  "odd": "100.00"
                }
              ],
              "drawList": [
                {
                  "home": 0,
                  "visiting": 0,
                  "odd": "11.00"
                },
                {
                  "home": 1,
                  "visiting": 1,
                  "odd": "6.00"
                },
                {
                  "home": 2,
                  "visiting": 2,
                  "odd": "11.50"
                },
                {
                  "home": 3,
                  "visiting": 3,
                  "odd": "50.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "平其他",
                  "odd": "400.00"
                }
              ],
              "loseList": [
                {
                  "home": 0,
                  "visiting": 1,
                  "odd": "8.00"
                },
                {
                  "home": 0,
                  "visiting": 2,
                  "odd": "10.50"
                },
                {
                  "home": 1,
                  "visiting": 2,
                  "odd": "7.75"
                },
                {
                  "home": 0,
                  "visiting": 3,
                  "odd": "21.00"
                },
                {
                  "home": 1,
                  "visiting": 3,
                  "odd": "16.00"
                },
                {
                  "home": 2,
                  "visiting": 3,
                  "odd": "25.00"
                },
                {
                  "home": 0,
                  "visiting": 4,
                  "odd": "60.00"
                },
                {
                  "home": 1,
                  "visiting": 4,
                  "odd": "50.00"
                },
                {
                  "home": 2,
                  "visiting": 4,
                  "odd": "75.00"
                },
                {
                  "home": 0,
                  "visiting": 5,
                  "odd": "200.00"
                },
                {
                  "home": 1,
                  "visiting": 5,
                  "odd": "150.00"
                },
                {
                  "home": 2,
                  "visiting": 5,
                  "odd": "250.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "负其它",
                  "odd": "70.00"
                }
              ]
            },
            "goalList": [
              {
                "count": 0,
                "desc": "0球",
                "odd": "11.00"
              },
              {
                "count": 1,
                "desc": "1球",
                "odd": "4.70"
              },
              {
                "count": 2,
                "desc": "2球",
                "odd": "3.30"
              },
              {
                "count": 3,
                "desc": "3球",
                "odd": "3.55"
              },
              {
                "count": 4,
                "desc": "4球",
                "odd": "5.50"
              },
              {
                "count": 5,
                "desc": "5球",
                "odd": "10.50"
              },
              {
                "count": 6,
                "desc": "6球",
                "odd": "19.00"
              },
              {
                "count": null,
                "desc": "7+",
                "isOther": true,
                "odd": "28.00"
              }
            ],
            "halfVictoryList": [
              {
                "home": "胜",
                "visiting": "胜",
                "odd": "4.60"
              },
              {
                "home": "胜",
                "visiting": "平",
                "odd": "14.00"
              },
              {
                "home": "胜",
                "visiting": "负",
                "odd": "24.00"
              },
              {
                "home": "平",
                "visiting": "胜",
                "odd": "6.50"
              },
              {
                "home": "平",
                "visiting": "平",
                "odd": "5.20"
              },
              {
                "home": "平",
                "visiting": "负",
                "odd": "5.30"
              },
              {
                "home": "负",
                "visiting": "胜",
                "odd": "26.00"
              },
              {
                "home": "负",
                "visiting": "平",
                "odd": "14.00"
              },
              {
                "home": "负",
                "visiting": "负",
                "odd": "3.60"
              }
            ]
          }
        }
      }
    }
    else if (data.params.code == "6016") {
      return {
        "success": true,
        "data": {
          "time": "2026-03-21 13:30:00",
          "date": "2026-03-21",
          "code": "6003",
          "homeTeam": "福冈黄蜂",
          "visitingTeam": "大阪钢巴",
          "openVictory": false,
          "handicapCount": 1,
          "oddsInfos": {
            "singleVictory": {
              "win": "3.20",
              "draw": "3.15",
              "lose": "2.01"
            },
            "handicapVictory": {
              "win": "1.61",
              "draw": "3.55",
              "lose": "4.45"
            },
            "score": {
              "winList": [
                {
                  "home": 1,
                  "visiting": 0,
                  "odd": "8.00"
                },
                {
                  "home": 2,
                  "visiting": 0,
                  "odd": "16.00"
                },
                {
                  "home": 2,
                  "visiting": 1,
                  "odd": "10.00"
                },
                {
                  "home": 3,
                  "visiting": 0,
                  "odd": "48.00"
                },
                {
                  "home": 3,
                  "visiting": 1,
                  "odd": "29.00"
                },
                {
                  "home": 3,
                  "visiting": 2,
                  "odd": "35.00"
                },
                {
                  "home": 4,
                  "visiting": 0,
                  "odd": "150.00"
                },
                {
                  "home": 4,
                  "visiting": 1,
                  "odd": "100.00"
                },
                {
                  "home": 4,
                  "visiting": 2,
                  "odd": "150.00"
                },
                {
                  "home": 5,
                  "visiting": 0,
                  "odd": "500.00"
                },
                {
                  "home": 5,
                  "visiting": 1,
                  "odd": "400.00"
                },
                {
                  "home": 5,
                  "visiting": 2,
                  "odd": "500.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "胜其它",
                  "odd": "200.00"
                }
              ],
              "drawList": [
                {
                  "home": 0,
                  "visiting": 0,
                  "odd": "9.50"
                },
                {
                  "home": 1,
                  "visiting": 1,
                  "odd": "6.00"
                },
                {
                  "home": 2,
                  "visiting": 2,
                  "odd": "14.00"
                },
                {
                  "home": 3,
                  "visiting": 3,
                  "odd": "80.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "平其他",
                  "odd": "500.00"
                }
              ],
              "loseList": [
                {
                  "home": 0,
                  "visiting": 1,
                  "odd": "6.25"
                },
                {
                  "home": 0,
                  "visiting": 2,
                  "odd": "9.00"
                },
                {
                  "home": 1,
                  "visiting": 2,
                  "odd": "7.00"
                },
                {
                  "home": 0,
                  "visiting": 3,
                  "odd": "19.00"
                },
                {
                  "home": 1,
                  "visiting": 3,
                  "odd": "16.00"
                },
                {
                  "home": 2,
                  "visiting": 3,
                  "odd": "29.00"
                },
                {
                  "home": 0,
                  "visiting": 4,
                  "odd": "50.00"
                },
                {
                  "home": 1,
                  "visiting": 4,
                  "odd": "45.00"
                },
                {
                  "home": 2,
                  "visiting": 4,
                  "odd": "90.00"
                },
                {
                  "home": 0,
                  "visiting": 5,
                  "odd": "150.00"
                },
                {
                  "home": 1,
                  "visiting": 5,
                  "odd": "150.00"
                },
                {
                  "home": 2,
                  "visiting": 5,
                  "odd": "300.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "负其它",
                  "odd": "90.00"
                }
              ]
            },
            "goalList": [
              {
                "count": 0,
                "desc": "0球",
                "odd": "9.50"
              },
              {
                "count": 1,
                "desc": "1球",
                "odd": "4.05"
              },
              {
                "count": 2,
                "desc": "2球",
                "odd": "3.20"
              },
              {
                "count": 3,
                "desc": "3球",
                "odd": "3.60"
              },
              {
                "count": 4,
                "desc": "4球",
                "odd": "6.30"
              },
              {
                "count": 5,
                "desc": "5球",
                "odd": "12.00"
              },
              {
                "count": 6,
                "desc": "6球",
                "odd": "23.00"
              },
              {
                "count": null,
                "desc": "7+",
                "isOther": true,
                "odd": "38.00"
              }
            ],
            "halfVictoryList": [
              {
                "home": "胜",
                "visiting": "胜",
                "odd": "5.60"
              },
              {
                "home": "胜",
                "visiting": "平",
                "odd": "14.50"
              },
              {
                "home": "胜",
                "visiting": "负",
                "odd": "23.00"
              },
              {
                "home": "平",
                "visiting": "胜",
                "odd": "7.25"
              },
              {
                "home": "平",
                "visiting": "平",
                "odd": "5.05"
              },
              {
                "home": "平",
                "visiting": "负",
                "odd": "4.75"
              },
              {
                "home": "负",
                "visiting": "胜",
                "odd": "28.00"
              },
              {
                "home": "负",
                "visiting": "平",
                "odd": "14.50"
              },
              {
                "home": "负",
                "visiting": "负",
                "odd": "3.20"
              }
            ]
          }
        }
      }

    }
    else if (data.params.code == "7020") {
      return {
        "success": true,
        "data": {
          "time": "2026-03-21 14:10:00",
          "date": "2026-03-21",
          "code": "6004",
          "homeTeam": "墨胜利",
          "visitingTeam": "中央海岸",
          "openVictory": true,
          "handicapCount": -1,
          "oddsInfos": {
            "singleVictory": {
              "win": "1.35",
              "draw": "4.50",
              "lose": "6.00"
            },
            "handicapVictory": {
              "win": "2.05",
              "draw": "3.70",
              "lose": "2.69"
            },
            "score": {
              "winList": [
                {
                  "home": 1,
                  "visiting": 0,
                  "odd": "8.00"
                },
                {
                  "home": 2,
                  "visiting": 0,
                  "odd": "7.50"
                },
                {
                  "home": 2,
                  "visiting": 1,
                  "odd": "7.00"
                },
                {
                  "home": 3,
                  "visiting": 0,
                  "odd": "9.50"
                },
                {
                  "home": 3,
                  "visiting": 1,
                  "odd": "9.50"
                },
                {
                  "home": 3,
                  "visiting": 2,
                  "odd": "18.00"
                },
                {
                  "home": 4,
                  "visiting": 0,
                  "odd": "16.00"
                },
                {
                  "home": 4,
                  "visiting": 1,
                  "odd": "17.00"
                },
                {
                  "home": 4,
                  "visiting": 2,
                  "odd": "35.00"
                },
                {
                  "home": 5,
                  "visiting": 0,
                  "odd": "35.00"
                },
                {
                  "home": 5,
                  "visiting": 1,
                  "odd": "36.00"
                },
                {
                  "home": 5,
                  "visiting": 2,
                  "odd": "75.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "胜其它",
                  "odd": "19.00"
                }
              ],
              "drawList": [
                {
                  "home": 0,
                  "visiting": 0,
                  "odd": "19.00"
                },
                {
                  "home": 1,
                  "visiting": 1,
                  "odd": "9.00"
                },
                {
                  "home": 2,
                  "visiting": 2,
                  "odd": "14.00"
                },
                {
                  "home": 3,
                  "visiting": 3,
                  "odd": "50.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "平其他",
                  "odd": "150.00"
                }
              ],
              "loseList": [
                {
                  "home": 0,
                  "visiting": 1,
                  "odd": "20.00"
                },
                {
                  "home": 0,
                  "visiting": 2,
                  "odd": "40.00"
                },
                {
                  "home": 1,
                  "visiting": 2,
                  "odd": "18.00"
                },
                {
                  "home": 0,
                  "visiting": 3,
                  "odd": "100.00"
                },
                {
                  "home": 1,
                  "visiting": 3,
                  "odd": "55.00"
                },
                {
                  "home": 2,
                  "visiting": 3,
                  "odd": "45.00"
                },
                {
                  "home": 0,
                  "visiting": 4,
                  "odd": "400.00"
                },
                {
                  "home": 1,
                  "visiting": 4,
                  "odd": "175.00"
                },
                {
                  "home": 2,
                  "visiting": 4,
                  "odd": "150.00"
                },
                {
                  "home": 0,
                  "visiting": 5,
                  "odd": "800.00"
                },
                {
                  "home": 1,
                  "visiting": 5,
                  "odd": "500.00"
                },
                {
                  "home": 2,
                  "visiting": 5,
                  "odd": "500.00"
                },
                {
                  "home": null,
                  "visiting": null,
                  "isOther": true,
                  "otherDesc": "负其它",
                  "odd": "150.00"
                }
              ]
            },
            "goalList": [
              {
                "count": 0,
                "desc": "0球",
                "odd": "19.00"
              },
              {
                "count": 1,
                "desc": "1球",
                "odd": "6.75"
              },
              {
                "count": 2,
                "desc": "2球",
                "odd": "4.10"
              },
              {
                "count": 3,
                "desc": "3球",
                "odd": "3.50"
              },
              {
                "count": 4,
                "desc": "4球",
                "odd": "4.40"
              },
              {
                "count": 5,
                "desc": "5球",
                "odd": "7.00"
              },
              {
                "count": 6,
                "desc": "6球",
                "odd": "11.50"
              },
              {
                "count": null,
                "desc": "7+",
                "isOther": true,
                "odd": "15.00"
              }
            ],
            "halfVictoryList": [
              {
                "home": "胜",
                "visiting": "胜",
                "odd": "1.86"
              },
              {
                "home": "胜",
                "visiting": "平",
                "odd": "18.00"
              },
              {
                "home": "胜",
                "visiting": "负",
                "odd": "45.00"
              },
              {
                "home": "平",
                "visiting": "胜",
                "odd": "4.05"
              },
              {
                "home": "平",
                "visiting": "平",
                "odd": "7.85"
              },
              {
                "home": "平",
                "visiting": "负",
                "odd": "14.50"
              },
              {
                "home": "负",
                "visiting": "胜",
                "odd": "22.00"
              },
              {
                "home": "负",
                "visiting": "平",
                "odd": "18.00"
              },
              {
                "home": "负",
                "visiting": "负",
                "odd": "10.50"
              }
            ]
          }
        }
      }
    }
  }
})();
