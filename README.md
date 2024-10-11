此项目是为了弱化前端开发时调用接口带来的痛楚逐步成形的,能够帮助前端更好的自测,更好的借助接口文档与后端并行开发,逐步减少联调带来的时间耗损

sf-mock 功能可视化的能力由 sf-notes 逐步提供,可参见: https://github.com/xiaodun/sf-notes/blob/master/manual/1项目管理/0.项目列表.md,

支持批量生成 mock 文件,提升使用体验和开发效率 https://github.com/xiaodun/sf-notes/blob/master/manual/1项目管理/1.Swagger.md

tutorial 文件夹下有详细的使用说明

# 优势何在

- 不用承担连接另一台电脑的任何风险，运行在本地，互不干扰。

- 可以轻量的制定数据，方便自测和复现问题，例如随便输入个账号密码，便可以拥有超级管理员的权限。

- 单独项目,集成和部署十分方便

- node.js 和 npm,可以使用原生 JS 和第三方包，方便扩展和调试。

# 使用文档

tutorial 文件夹下有详细的使用说明

- 1-2 节阐述 mock 服务器的价值,它能让你更精准、更快,相当于有了自动发电机,感受时间
  体验上的双重提升 [阅读](./tutorial/1.调用真实接口存在的问题.md)

- 3 节是用项目自带的例子演示 mock 服务器在设计、使用、集成的便捷性 [阅读](./tutorial/3.使用上的初体验.md)

- 4 节重点在于如何通过 nginx 做到代码上的零入侵,以及 programConfing.js 涉及到的配置 [阅读](./tutorial/4.在项目上使用.md)

- 5 节介绍默认模式`useDirMode`即每个 api 对应一个文件的相关配置 [阅读](./tutorial/5.自定义mock数据.md)

- 6 节介绍 mock 对 Http 请求、返回更细腻的支持,比如改变状态码、延迟返回等 [阅读](./tutorial/6.路径其它写法以及更多配置.md)

- 7 节介绍了 mock 服务在"分页"、"详情"两种场景下如何返回动态数据 [阅读](./tutorial/7.关于分页和详情.md)

- 8 节介绍了如何集成 WindowTermail,从而做到通过 bat 文件启动项目 [阅读](./tutorial/8.集成WindowTermail.md)

- 9 节介绍了为每个环境配置域名访问的实现细节 [阅读](./tutorial/9.生成环境对应的域名.md)

通常六分钟阅读完 1-3 节即可体验 mock 服务器,八分钟阅读完 4-5 节并集成即可满足大部分场景的使用,6-7 节是高级用法,8-9 是更加人性化的功能。

# 关于跨域问题的解决

在 serviceConfig.js,`remoteOrigin`和`reqHeaders`的值是程序给的，理论上已不会出现被"同源策略"拦截的情况
