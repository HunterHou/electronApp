const {app,BrowserWindow } = require("electron")

function createWindow(){
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width:1200,
        height:800,
        webPreferences:{
            nodeIntegration:true
        }
    })
    // 加载 index.html 文件
    win.loadFile("index.html")
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

