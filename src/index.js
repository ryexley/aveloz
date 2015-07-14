var app = require("app");
var path = require("path");
var BrowserWindow = require("browser-window");

require("crash-reporter").start();

var mainWindow = null;

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", function () {
  mainWindow = new BrowserWindow({ height: 480, width: 640 });
  mainWindow.loadUrl("file://" + path.join(__dirname, "index.html"));
  mainWindow.openDevTools();
  mainWindow.on("closed", function () {
    mainWindow = null;
  })
});
