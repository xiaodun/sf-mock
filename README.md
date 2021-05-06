# 待解决的问题

- （已完成）不存在的路径自动生成基本数据结构，写入到文件里，减少黏贴复制

- 支持运行期间的增加、删除等操作,服务器重启则失效

- 可以使用 chrome 浏览器调试

- 完善自动生成功能，包括项目基础文件结构、nginx 配置内容

- nginx 代理时，上传较大文件容易报 502

- 可以 copy 其他环境上的数据

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

# 关于跨域问题的解决

在 serviceConfig.js,`remoteOrigin`和`reqHeaders`的值是程序给的，理论上已不会出现被"同源策略"拦截的情况
