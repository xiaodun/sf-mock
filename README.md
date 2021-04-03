# 快速上手

这是一个独立的项目，而不是一个 npm 包

clone 项目到本地，执行`npm install`,执行`node mockService.js`

这时会输出服务启动的地址

"service is running 192.168.10.135:9192"

如果 9192 这个端口不幸被占用，打开 serviceconfig.js,修改 startPort 即可

内置了一个 example 项目，可以直接在浏览器访问以了解使用方式

例如:192.168.10.135:9192/example/api/simple/object, 建议安装谷歌插件 JSON Viewer ,以便更好的查看返回。

打开 example-mock-api.js 这个文件，可以更改里面的数据格式，无需重启服务，再次请求便可立即生效。

同样，如果您想新增一个"sf-vue"项目，也只需新建一个 sf-vue 文件夹，在新建一个 sf-vue-mock-api.js 的文件即可
