# 放弃更新，代码和文档写的都很啰嗦,计划重写(2021-4-2)

sf-mock 等同于"本地 mock 数据解决方案" + 实现,从此告别部署在别人电脑上的后台服务器，想要啥就自己造啥，先解决当前矛盾，再把数据上传共享，为团队做贡献。

实现项目级别的代码零入侵，也就没有了部署和集成上的问题，内置了 nginx 和一个 mock 服务器，它又是轻量级、渐进式的，方便您进行方案落地的本土化，在设计和使用上都很人性化。

- 适用于无法使用 nginx 的情况,做了跨域的处理，结合自动 copy 远程服务器数据到本地的逻辑，也能将就的解决问题
- 实现配置化、模块化,因为 node 环境下，在任何地方您都可以通过 require 的方式扩展能力。
- 分项目进行数据管理,提供文件自动生成目录结构
- 提供文件自动写入 nginx.conf，只需切换端口，即可在本都服务器、远程服务器做切换
- 支持 copy 远程服务的数据到本地(体验不是很好，有待完善)
- mock 数据更改无需重启服务，支持 js 文件、json 文件、函数、对象，正则 url 等，可定义程度高

# 运作原理

现有 sf-notes 一个脚手架项目，项目地值是 http://192.168.10.131:8000， 用 nginx 代理它，代理地址是http://192.168.10.131:9000， 当我通过代理地址访问时，可以让/访问的继续走项目地址，/api 访问的走本地 mock 服务器地址,以/api/notes/getNoteList 为例,映射到http://192.168.10.131:9192/sf-notes/api/notes/getNoteList， mock 服务器会解析为项目:sf-notes,可确认一个映射表，url: api/notes/getNoteList,可得到 mock 数据的格式，解析之后返回。

再换一个端口代理，让/api 访问到远程服务器，就可以做联调了。

# 落地实现

### config/mockConfig

mock 服务器用到的信息,修改 startPort 需要重启服务，其余的配置则不需要，如果您只能在项目上直接访问 mock 服务器，就会产生跨域的问题，可以在这里解决。

${remoteOrigin},访问的地址,会被自动注入,例如:http://10.210.2.133:8085/

### program/progrmConfig.js

key 值是项目名,value 里面的属性在文件里有详细的注释

运行 writeNginxConfig.js 会根据 progrmConfig.js 生成两个 server 配置,nginx.conf 有#program-service-start 和#program-service-end 两个标记，标记之间的内容会被覆盖，需要重启 nginx

运行 createFileStructure.js 会根据 progrmConfig.js 生成目录结构，项目名为文件夹，项目名-mock-api.js 作为映射表

### mockService.js

mock 服务器,响应请求，解析 mock 数据格式

如果项目配置中的 jointCopyConfig.open 为 true,在找不到 mock 数据的情况下，会把请求转发到 jointServiceUrl，得到的结果返回并写入到对应的 mock 映射表，实际使用中，可能需要您在 jointCopyConfig.request 中加入一些数据，列如一些只有登录了才能访问的接口

### utils/commomUtils.js

通用功能的封装

### utils/darkUtils.js

解析带项目名称的 url，整理数据

## mock 数据配置

sf-notes-mock-api.js 映射表为例

更改无需重启，注意 retuen {};中的;是必须的，否则在 copy 远程数据的时候会出现问题

```
    '/api/notes/getNoteList': {
      success: true,
      list: [
        {
          content: '湿热',
          base64: {},
          createTime: 1611667969286,
          updateTime: '',
          title: '',
          id: 1611667969286,
        },
      ],
    },
```

路径名忽略参数，直接返回对象的形式也不在乎请求方法

```
    '/api/name/\\d': {
      supportRegexp: true,
      statusCode: 404,
      get: {
        name: 12,
      },
    },
```

```
    '/api/hero': {
      get: {
        name: '蜘蛛侠',
      },
    },
```

路径名支持正则匹配,supportRegexp: true,是必须的，此时要 get(请求方法) 这种方式指定返回数据，也适用于一个路径做增删改查的...

statusCode: 404, 指定状态码，方便做测试,找不到 mock 数据的时候，也会返回 404

```
'/api/able/file': 12,
'/api/able/file': [1,2,3],
'/api/able/json': "0",
```

直接返回简单数据

```
    '/api/able/func': function ({ req }) {
      return {

      };
    },
```

对 cookie 的支持,仅限返回对象

```
  '/test': {
      cookies:{
        token:"sdkadhjaskhdsakjas"
      },
      get:{
        name: 2,
      }
    },
```

```
  '/test': {

      get:{
        cookies:{
        token:"sdkadhjaskhdsakjas"
      },
        name: 2,
      }
    },
```

程序不会再对函数返回的数据做处理

```
'/api/able/file': './able.js',
'/api/able/json': './able.json',
```

您只需要写相对路径，程序会自动补全,没有会自动创建，js 还会写
入模板

```
'/api/able/file': './able.js',
```

在函数内，可以获得`request`、`response`、`headers`，需要您自定义返回状态

```
    rsp.writeHead(200, headers);
    rsp.end(JSON.stringify( {
        name:12
    }));
```

也可以使用 setTimeout 延迟返回

## 启动过程

- npm install
- program/progrmConfig.js 配置项目信息
- node createFileStructure.js 生成文件目录
- node writeNginxConfig.js 覆盖 nginx.conf 的配置,nginx-1.19.6 下, 运行 start nginx，后续改动只需 nginx -s reload,停止 nginx -s stop
- node mockService.js
