# 优势何在

- 不用承担连接另一台电脑的任何风险，运行在本地，互不干扰。

- 可以轻量的制定数据，方便自测和复现问题，例如随便输入个账号密码，便可以拥有超级管理员的权限。

- VS code 便是最好的界面工具

- git 做代码管理，方便单兵作战以及团队协作。

- node.js 和 npm,可以使用原生 JS 和第三方包，方便扩展和调试。

# 快速上手

方便前端依照数据格式进行开发,这是一个独立的项目，而不是一个 npm 包

clone 项目到本地，执行`npm install`,执行`node mockService.js`,即可启动一个 mock 服务器

这时会输出服务启动的地址

"service is running 192.168.10.135:9192"

如果 9192 这个端口不幸被占用，打开 serviceConfig.js,修改 startPort 即可

内置了一个 example 项目，可以直接在浏览器访问以了解使用方式

例如:

192.168.10.135:9192/example/api/simple/object

建议安装谷歌插件 JSON Viewer ,以便更好的查看返回。

打开 example-mock-api.js 这个文件，可以更改里面的数据格式，无需重启服务，再次请求便可立即生效。

同样，如果您想新增一个"sf-vue"项目，也只需新建一个 sf-vue 文件夹，在新建一个 sf-vue-mock-api.js 的文件即可

# 关于分页

方便测试表格分页和上拉加载,能够实现真正的分页。
example 中提供了例子 `/api/page`
需要关注 `defaultConfig.js`的`pageSettings`

# 结构体之间的联动

比如查看表格中一行数据的详情，可以避免数据的重复
example 中提供了例子 `/api/page` 和 `/api/page/detail`

结构体的名字在`example-name-map.js`中管理
需要具名的结构体通过`name: (nameMaps) => nameMaps.heroPage` ,并且通过`getData`提供原始数据

需要注入的结构体通过`inject: (nameMaps) => [nameMaps.heroPage],`

# 不存在的 url 自动创建

自动创建需要项目结构已存在的前提下，即存在完善的'项目名-mock-api.js' 文件
程序会定位到最外层函数 return 语句{后面的位置,getApis 这个名字是重要的。
相关配置见 defaultConfig.js 下的 autoCreateSettings

# 解析 Swagger 接口生成默认数据

参照的是 2.0 版本，如果解析失败且开启了 404 自动创建，还是会生成基本结构

## copySwaggerConfig.js

该功能默认关闭，需要手动开启

```
isOpen:true,
```

- getDocLink swagger 文档地址，程序会先获取有哪些组，然后依次遍历这些组去寻找匹配的 url,相当于全等
- getMatchUrl mock 服务器获得的 url 可能与 swagger 地址存在差异，比如后者缺少一些共有头部，这时就需要手动处理下
- transformRspData 已经解析完成的数据结构，在这里可以做一些特性化处理
- getMockStructure 这时已经准备写入到文件里，可以组合成 mock 服务器支持的任意数据结构

# 自动生成

## programConfig.js

只需新增

```
    example:{}
```

example 是项目的名字，运行 createFileStructure.js 就会自动生成 example-mock-api.js、example-name-map.js

# 实现代码上的零入侵

通过 nginx，可以实现不更改代码的情况下将请求转发到 mock 服务器，配置好 programConfig.js 后,运行
writeNginxConfig.js 即可，有配置示例

启动: start nginx.exe

更新: nginx -s reload

停止: nginx -s stop

注意执行 writeNginxConfig.js 后要重启 nginx 才能生效，当上述命令无法奏效时，
可以先运行 start killNginx,再启动

# Windows Terminal

Windows Terminal 可以简单理解为多个 cmd 管理工具
使用介绍地址: https://juejin.cn/post/6980363931390836749

执行 creatBatForWindowsTerminal.js 会在 bat 文件下批量生成 bat 文件，包含如下

- programConfig.js 里已配置的每个项目对应一个 bat 文件
- 启动 mock 服务器的 bat,启动自带的 nginx 的 bat
- 启动上述所有应用的 bat,可用于电脑重启等场景

# 关于跨域问题的解决

在 serviceConfig.js,`remoteOrigin`和`reqHeaders`的值是程序给的，理论上已不会出现被"同源策略"拦截的情况
