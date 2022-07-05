[中文](https://github.com/xiaodun/sf-mock) | [**English**](https://github.com/xiaodun/sf-mock/blob/master/README-en.md)

This project is gradually formed in order to weaken the pain caused by calling the interface during front-end development. It can help the front-end to better self-test, better use the interface documentation to develop in parallel with the back-end, and gradually reduce the time loss caused by joint debugging.

The ability of sf-mock function visualization is gradually provided by sf-notes, see: https://github.com/xiaodun/sf-notes/blob/master/manual/1项目管理/0.项目列表.md,

Support batch generation of mokc files, prompting user experience and development efficiency https://github.com/xiaodun/sf-notes/blob/master/manual/1项目管理/1.Swagger.md


There are detailed instructions in the tutorial folder

# What is the advantage

- Don't take any risk of connecting to another computer, run locally without interfering with each other.

- Lightweight data can be formulated to facilitate self-testing and reproduction of problems. For example, if you enter any account password, you can have the authority of a super administrator.

- Separate project, easy to integrate and deploy

- Node.js and npm, you can use native JS and third-party packages for easy extension and debugging.

# Quick start

It is convenient for the front end to be developed according to the data format. This is an independent project, not an npm package

Clone the project to the local, execute `npm install`, execute `node mockService.js`, you can start a mock server

At this time, the address where the service is started will be output.

"service is running 192.168.10.135:9192"

If the port 9192 is unfortunately occupied, open serviceConfig.js and modify startPort

There is an example project built in, which can be accessed directly in the browser to learn how to use it

E.g:

192.168.10.135:9192/example/api/simple/object

It is recommended to install the Google plugin JSON Viewer for better viewing returns.

Open the file example-mock-api.js, you can change the data format inside, without restarting the service, the request will take effect immediately.

Similarly, if you want to add a "sf-vue" project, you only need to create a new sf-vue folder and create a new sf-vue-mock-api.js file.

# useDirMode

Program default mapping form, which can be turned off in `defaultConfig.js`

Taking '/api/simple/object' as an example, the directory '\api\simple'+object.js will be created

`convertDirModule.js` provides to convert **specific common form** to 'useDirMode' form, the specific situation has been executed and the result will prevail, not listed one by one

# About pagination

It is convenient to test table paging and pull-up loading, and can realize real paging.
Examples are provided in `/api/page`
Need to pay attention to `pageSettings` of `defaultConfig.js`

# Link between structures

For example, viewing the details of a row of data in a table can avoid duplication of data
Examples are provided in `/api/page` and `/api/page/detail`

The name of the structure is managed in `example-name-map.js`
Structures that need to be named pass `name: (nameMaps) => nameMaps.heroPage` , and provide raw data through `getData`

The structure that needs to be injected is passed `inject: (nameMaps) => [nameMaps.heroPage],`

# Automatically create urls that do not exist

Automatic creation requires that the project structure already exists, that is, there is a perfect 'project name-mock-api.js' file
The program will locate the position after the outermost function return statement {, the name getApis is important.
For related configuration, see autoCreateSettings under defaultConfig.js

# Parse Swagger interface to generate default data

Referring to version 2.0, if the parsing fails and 404 automatic creation is turned on, the basic structure will still be generated

## copySwaggerConfig.js

This feature is disabled by default and needs to be manually enabled

````
isOpen:true,
````

- getDocLink swagger document address, the program will first get what groups are there, and then traverse these groups in turn to find the matching url, which is equivalent to congruence
- The url obtained by the getMatchUrl mock server may be different from the swagger address. For example, the latter lacks some common headers. In this case, it needs to be processed manually.
- transformRspData has parsed the data structure, you can do some characterization processing here
- getMockStructure is now ready to be written to the file and can be combined into any data structure supported by the mock server

## ajaxStructureConfigData

It is used to map the interface under the classification on the swagger document to the form on the project, which can be customized according to the annotations in the script.

# Automatic generated

## programConfig.js

just add

````
    example:{}
````

example is the name of the project, running createFileStructure.js will automatically generate example-mock-api.js, example-name-map.js

# Achieve zero intrusion on the code

Through nginx, the request can be forwarded to the mock server without changing the code. After configuring programConfig.js, run
writeNginxConfig.js is enough, there are configuration examples

Start: start nginx.exe

Update: nginx -s reload

stop: nginx -s stop

Note that after executing writeNginxConfig.js, restart nginx to take effect. When the above command does not work,
You can run start killNginx first, then start

# Windows Terminal

Windows Terminal can be simply understood as multiple cmd management tools
Use introduction address: https://juejin.cn/post/6980363931390836749

Execute creatBatForWindowsTerminal.js to generate bat files in batches under the bat file, including the following

- Each project configured in programConfig.js corresponds to a bat file
- Start the bat of the mock server and start the bat of the built-in nginx
- Start the bat of all the above applications, which can be used in scenarios such as computer restart

# About the solution to cross-domain problems

In serviceConfig.js, the values ​​of `remoteOrigin` and `reqHeaders` are given by the program. In theory, there will be no interception by the "Same Origin Policy".


For every dollar you get in sponsorship, the author who is coding late at night loses a hair.

![](./images/zfb.png)
