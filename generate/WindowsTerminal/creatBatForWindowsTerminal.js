/**
 * 根据项目生成对应的bat文件，用于便捷接入到 Windows Terminal中
 * 包含一次启动所有项目,以及单独项目的启动
 */

const fs = require("fs");
const path = require("path");
const programConfig = eval(
  fs.readFileSync(
    path.resolve(__dirname, "../../config/programConfig.js"),
    "utf-8"
  )
);

const batPath = path.resolve(__dirname, "../../bat");
//加入程序自身的
programConfig["sf-mock"] = {
  WindowsTerminal: {
    isOpen: true,
    tabList: [
      {
        address: path.resolve(__dirname, "../../"),
        startCommad: "node mockService.js",
        isSelf: true,
      },
      {
        address: path.resolve(__dirname, "../../nginx-1.19.6"),
        startCommad: "start nginx",
        titleName: "nginx-1.19.6",
      },
    ],
  },
};
//生成每个项目自己的启动命令
const singleTabCommandList = [];
for (const programName in programConfig) {
  const configs = programConfig[programName];
  const wT = configs["WindowsTerminal"];
  if (wT && wT.isOpen) {
    wT.tabList.forEach((tabs) => {
      let titleName = tabs.isSelf ? programName : tabs.titleName;
      const singleTabCommand = `nt --title ${titleName} -d ${tabs.address} cmd /k ${tabs.startCommad}`;
      let batContent = `wt -w 0 ${singleTabCommand}`;
      singleTabCommandList.push(singleTabCommand);
      fs.writeFileSync(path.resolve(batPath, `${titleName}.bat`), batContent);
    });
  }
}
// 生成启动全部以配置项目的命令,适用于电脑重启等场景

const allStartProgramContent = `wt -w 0 ${singleTabCommandList.join(";")}`;

fs.writeFileSync(
  path.resolve(batPath, `allStartProgram.bat`),
  allStartProgramContent
);
