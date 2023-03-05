// electron 모듈 추가
const { app, BrowserWindow } = require('electron')
// preload 추가하기 위한 path 모듈 추가
const path = require('path')


// 실행함수 정의
const createWindow = () => {
    const win = new BrowserWindow({
        width:1600,
        hegiht:1200,
        // preload 스크립트 추가
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        //frame:false,
        //titleBarStyle:'hidden',
        //titleBarOverlay: {
        //    color: '#2f3241',
        //    symbolColor: '#74b1be',
        //    height: 60
        //  },
    })

    win.loadFile('./contents/html/index.html')
}


// ready 이벤트
app.whenReady().then(() => {
    // 실행
    createWindow()
})

// close 이벤트
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})