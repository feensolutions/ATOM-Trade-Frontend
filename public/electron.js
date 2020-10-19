const{BrowserWindow,app}=require('electron')
const isdev=require('electron-is-dev')
function createWindow(){
    const win=new BrowserWindow()
    win.loadURL(isdev?"http://localhost:3000":`file://${__dirname}/../build/index.html`)

    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
  
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  