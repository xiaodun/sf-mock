[**中文**](https://github.com/xiaodun/sf-mock) | [English](https://github.com/xiaodun/sf-mock/blob/master/README-en.md )


This project is gradually formed in order to weaken the pain caused by calling the interface during front-end development. It can help the front-end to better self-test, better use interface documents to develop in parallel with the back-end, and gradually reduce the time consumption caused by joint debugging.

The ability to visualize sf-mock functions is gradually provided by sf-notes, see: https://github.com/xiaodun/sf-notes/blob/master/manual/1project management/0.projectlist.md,

Support batch generation of mokc files, prompting user experience and development efficiency https://github.com/xiaodun/sf-notes/blob/master/manual/1project management/1.Swagger.md


There are detailed instructions in the tutorial folder

# What is the advantage

- No need to bear any risk of connecting to another computer, running locally without interfering with each other.

- The data can be formulated lightly, which is convenient for self-testing and reproducing problems. For example, if you enter an account password at will, you can have super administrator privileges.

- Separate project, easy to integrate and deploy

- node.js and npm, native JS and third-party packages can be used for easy expansion and debugging.

# use documentation

There are detailed instructions in the tutorial folder

- Section 1-2 explains the value of the mock server, which can make you more accurate and faster, which is equivalent to having an automatic generator and feeling the time
   Double improvement in experience [Read](./tutorial/1. Problems in calling real interfaces.md)

- Section 3 is to use the examples that come with the project to demonstrate the convenience of mock server design, use, and integration [read](./tutorial/3.First experience in use.md)

- Section 4 focuses on how to achieve zero code intrusion through nginx, and the configuration involved in programConfing.js [Read](./tutorial/4.Use .md on the project)

- Section 5 introduces the default mode `useDirMode`, that is, the relevant configuration of each api corresponding to a file [Read](./tutorial/5.Custom mock data.md)

- Section 6 introduces mock's more detailed support for Http requests and returns, such as changing status codes, delaying returns, etc. [Read](./tutorial/6. Other ways of writing paths and more configurations.md)

- Section 7 introduces how the mock service returns dynamic data in the two scenarios of "pagination" and "details" [Read](./tutorial/7.About paging and details.md)

- Section 8 introduces the process of accessing the swagger document, and the return format can be automatically written into the mock file [Read](./tutorial/8. Generate basic data according to the return format of the swagger document.md)

- Section 9 introduces how to integrate WindowTermail, so as to start the project through a bat file [Read](./tutorial/9.Integrate WindowTermail.md)
- Section 10 introduces the implementation details of configuring domain name access for each environment [read](./tutorial/10.Generate the domain name corresponding to the environment.md)

Usually, you can experience the mock server after reading sections 1-3 in six minutes, and you can use it in most scenarios after reading sections 4-5 and integrating them in eight minutes. Sections 6-7 are advanced usage, and sections 8-10 are more user-friendly. Function.

# About the resolution of cross-domain problems

In serviceConfig.js, the values of `remoteOrigin` and `reqHeaders` are given by the program, and theoretically there will be no interception by the "Same Origin Policy"



For every one dollar of your sponsorship, the author who coded late at night will lose a hair.

![](./images/zfb.png)