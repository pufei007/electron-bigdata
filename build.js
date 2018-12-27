var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./helloApp/electron-bigdata-win32-x64'),
    outputDirectory: path.join('./tmp/build/installer64'),
    authors: 'pf',
    exe: 'electron-bigdata.exe',
	noMsi: true,
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));