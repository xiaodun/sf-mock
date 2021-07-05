const { random } = require("lodash");

(function getApis() {
  const total = 100;
  const pageSize = 10;
  return {
    "/medic/courseDetail/0.07350550679704582": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/medic/courseDetail/0.4105157329252962": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/medic-h5/v1/api/medic/h5/courses/coursesClickPv": {
      body: {
        status: 200,
        data: {},
      },
    },

    "/medic-h5/v1/api/medic/h5/article/getArticleDetail": {
      body: {
        status: 200,
        message: "请求成功",
        data: {
          id: "606fb1066bff7b4415ff2889",
          title: "速来！乳腺癌防治月特别专区，你想知道的这里都有！",
          cover:
            "https://wenwo-img-bucket-test.oss-cn-beijing.aliyuncs.com/9679a939ba5de04bc9d0f3aefdb2f226",
          state: 127,
          publishTime: "2021-04-09 09:43:10",
          publishDate: "2021-04-09",
          commentNum: 0,
          likeNum: 0,
          articleSource: "医学界肿瘤频道",
          articleUrl: null,
          isLike: null,
          isFavorites: null,
          realReadNum: 54,
          readNum: 171,
          content: `<h1 class="_1RuRku">监听localStorage中值的变化实现跨页面通信</h1><div class="rEsl9f"><div class="_2mYfmT"><a class="_1qp91i _1OhGeD" href="/u/3304849278a2" target="_blank" rel="noopener noreferrer"><img class="_13D2Eh" src="https://upload.jianshu.io/users/upload_avatars/15547376/54a0be00-4def-4d57-8b57-3ef7d2be85f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""></a><div style="margin-left: 8px;"><div class="_3U4Smb"><span class="FxYr8x"><a class="_1OhGeD" href="/u/3304849278a2" target="_blank" rel="noopener noreferrer">坏丶毛病</a></span><button data-locale="zh-CN" type="button" class="_3kba3h _1OyPqC _3Mi9q9 _34692-"><span>关注</span></button></div><div class="s-dsoj"><span class="_3tCVn5"><i aria-label="ic-diamond" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-diamond"></use></svg></i><span>0.818</span></span><time datetime="2021-06-15T15:33:34.000Z">2021.06.15 23:33:34</time><span>字数 479</span><span>阅读 179</span></div></div></div></div><article class="_2rhmJa"><p>本次分享一个之前困扰很久的，跨页面之间的通信方式。</p>
          <p>以前跨页面通信，就拿我们之前vue项目中多页面为例，每个页面都是一个独立的vue实例，通过main.js初始化，各个页面之间的数据不互通，而通信方式最常见的方式是往缓存中存储值，其他需要得到这个值的页面通过定时器去实时查询缓存中该值的变化，然后进行通信。</p>
          <p>但是定时器终究不是一个好的实现方式，而定时器的时间长短设置多少都很有考究，时间太短太耗性能，时间太长的话，又会存在一段时间拿不到最新值的情况。</p>
          <p>现在有一个很方便的方式，那就是 监听，其他页面正常像以前一样往 storage 存储值，如：localStorage.setItem('calling', '55894')，然后需要获取该值的页面可以通过监听storage，就直接拿到变化后的值，示例如下：</p>
          <div class="_2Uzcx_"><button class="VJbwyy" type="button" aria-label="复制代码"><i aria-label="icon: copy" class="anticon anticon-copy"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg></i></button><pre class="line-numbers  language-js"><code class="js  language-js"><span class="token comment">// localhost:8080/pageOne 页面</span>
          localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'calling'</span><span class="token punctuation">,</span> <span class="token string">'55894'</span><span class="token punctuation">)</span>
          <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code></pre></div>
          <div class="_2Uzcx_"><button class="VJbwyy" type="button" aria-label="复制代码"><i aria-label="icon: copy" class="anticon anticon-copy"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg></i></button><pre class="line-numbers  language-js"><code class="js  language-js"><span class="token comment">// localhost:8080/pageTwo 页面</span>
          window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'storage'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'calling'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token function">services</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre></div>
          <p>部分属性介绍如下：</p>
          <ul>
          <li>event.key：属性值为在 sessionStorage 或 localStorage 中被修改/新添加的数据键值；</li>
          <li>event.oldValue：属性值为在 sessionStorage 或 localStorage 中被修改前的值；</li>
          <li>event.newValue：属性值为在 sessionStorage 或 localStorage 中被修改后的值；</li>
          <li>event.url：属性值为修改 sessionStorage 或 localStorage 中值的页面的URL地址，即该值在哪个页面被写入/被修改的；</li>
          </ul>
          <p>tips：只能监听 sessionStorage 或 localStorage 中值的变化，不能监听cookie中值的变化。</p>
          <p>其余属性截图如下：</p>
          <br>
          <div class="image-package">
          <div class="image-container" style="max-width: 700px; max-height: 381px; background-color: transparent;">
          <div class="image-container-fill" style="padding-bottom: 54.36%;"></div>
          <div class="image-view" data-width="1928" data-height="1048"><img data-original-src="//upload-images.jianshu.io/upload_images/15547376-169b64dab9246a28.png" data-original-width="1928" data-original-height="1048" data-original-format="image/jpeg" data-original-filesize="156539" data-image-index="0" style="cursor: zoom-in;" class="" src="//upload-images.jianshu.io/upload_images/15547376-169b64dab9246a28.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"></div>
          </div>
          <div class="image-caption">1.png</div>
          </div>
          <p>好了，以上就是跨页面之间通信的一种方式。</p>
          <p>期待能够对你有所帮助~</p>
          <p>如有问题，请指出，接受批评。</p>
          <div class="image-package">
          <div class="image-container" style="max-width: 240px; max-height: 240px;">
          <div class="image-container-fill" style="padding-bottom: 100.0%;"></div>
          <div class="image-view" data-width="240" data-height="240"><img data-original-src="//upload-images.jianshu.io/upload_images/15547376-ba2868eb6704cbbf.jpg" data-original-width="240" data-original-height="240" data-original-format="image/jpeg" data-original-filesize="9219" data-image-index="1" style="cursor: zoom-in;" class="image-loading"></div>
          </div>
          <div class="image-caption">QQ图片20210615233008.jpg</div>
          </div>
          </article><div></div><div class="_1kCBjS"><div class="_18vaTa"><div class="_3BUZPB"><div class="_2Bo4Th" role="button" tabindex="-1" aria-label="给文章点赞"><i aria-label="ic-like" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-like"></use></svg></i></div><span class="_1LOh_5" role="button" tabindex="-1" aria-label="查看点赞列表">4人点赞<i aria-label="icon: right" class="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></span></div><div class="_3BUZPB"><div class="_2Bo4Th" role="button" tabindex="-1"><i aria-label="ic-dislike" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-dislike"></use></svg></i></div></div></div><div class="_18vaTa"><a class="_3BUZPB _1x1ok9 _1OhGeD" href="/nb/41884648" target="_blank" rel="noopener noreferrer"><i aria-label="ic-notebook" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-notebook"></use></svg></i><span>JavaScript-成长之路</span></a><div class="_3BUZPB ant-dropdown-trigger"><div class="_2Bo4Th"><i aria-label="ic-others" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-others"></use></svg></i></div></div></div></div><div class="_19DgIp" style="margin-top:24px;margin-bottom:24px"></div><div class="_13lIbp"><div class="_16AzcO">更多精彩内容，就在简书APP</div><div class="_6S_NkV"><canvas height="242" width="242" style="height: 110px; width: 110px;"></canvas><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABacAAAWnCAMAAABgpz87AAAAh1BMVEX////aZWf45eL99/bcb2788O3ijojeeXf0083vwLnprKbghIDstq/no5zxysT33NjkmJL++vraZ2jklI7ffnv88/HbbGzbaWnoqKH+/f366ebmnJX119LddnPccnH44NzrsaruvLbii4b77evzzsjwx8D22tXhh4PnoJntubLww7z449/deHYjPTZEAAAwHklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWEPDgQAAAAAgPxfG0FVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVdiDAwEAAAAAIP/XRlBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFfbgQAAAAAAAyP+1EVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhT04EAAAAAAA8n9tBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYQ8OBAAAAACA/F8bQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV2IMDAQAAAAAg/9dGUFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUV9uCQAAAAAEDQ/9dusAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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" style="display: none;"></div><div class="l8ZVfE"></div><div class="_191KSt">"如果有幸文章对您有帮助，就请作者喝杯咖啡吧。"</div><button type="button" class="_1OyPqC _3Mi9q9 _2WY0RL _1YbC5u"><span>赞赏支持</span></button><span class="_3zdmIj">还没有人赞赏，支持一下</span></div><div class="d0hShY"><a class="_1bPVBH _1OhGeD" href="/u/3304849278a2" target="_blank" rel="noopener noreferrer"><img class="_27NmgV" src="https://upload.jianshu.io/users/upload_avatars/15547376/54a0be00-4def-4d57-8b57-3ef7d2be85f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp" alt="  "></a><div class="Uz-vZq"><div class="Cqpr1X"><a class="HC3FFO _1OhGeD" href="/u/3304849278a2" title="坏丶毛病" target="_blank" rel="noopener noreferrer">坏丶毛病</a><span class="_2WEj6j" title="一只90后前端小菜鸟。<br><br>生而为人，喜丧并存。">一只90后前端小菜鸟。&lt;br&gt;&lt;br&gt;生而为人，喜丧并存。</span></div><div class="lJvI3S"><span>总资产9 (约0.61元)</span><span>共写了4.0W字</span><span>获得117个赞</span><span>共34个粉丝</span></div></div><button data-locale="zh-CN" type="button" class="_1OyPqC _3Mi9q9"><span>关注</span></button></div>`,
          subjectNameList: ["肿瘤"],
          showContent: "大蛇兜噶十多个的撒啊飒飒飒飒",
          logoUrl: "http:bai",
          originalLink:
            "http://mp.weixin.qq.com/s?__biz=MzU4MjQzNjAzMA==&mid=2247525478&idx=5&sn=b5657de3ad9331f69dfc884671a66075&chksm=fdba71b7cacdf8a191d7a91e469eb54fae37409574d2a37318aaa4cd1ccdf6fa3e33f6e67290&scene=27#wechat_redirect",
        },
      },
    },
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
              url: "http://ncme.test.wenwo.com/medic/topic/courses/24",
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
              url: "http://ncme.test.wenwo.com/medic/topic/live/2",
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
              url: "http://10.210.2.133:8085/medic/topic/courses/1",
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
              url: "http://10.210.2.133:8085/medic/topic/courses/1",
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
            addressUrl: "/medic/courseDetail/34?coursesType=1",
            coverUrl:
              "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
            id: 1,
            secondIntroduce: "",
            title: "标题",
          },
          {
            addressUrl: "/medic/courseDetail/34?coursesType=1",
            coverUrl:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg",
            id: 2,
            secondIntroduce: "",
            title: "标题",
          },
          {
            addressUrl: "/medic/courseDetail/34?coursesType=1",
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
          cover:
            "https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp",
          hasFavorites: true,
          // hasSubscribe: false,
          hasSubscribe: false,
          hdAccountId: "121212",
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
                "这是啊快点哈可是就喝点酒啊上\n课哈了空间很大空间爱上加上大\n家快来打进来卡的时间",
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
          status: 5,
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
        status: 401,
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
