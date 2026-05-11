const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load the query page directly
  win.loadFile('query-page.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


const { app, BrowserWindow } = require('electron')

function createWindow() {

  const win = new BrowserWindow({
    kiosk: true,
    fullscreen: true,
    autoHideMenuBar: true
  })

  win.loadURL('https://full-screen-cyan.vercel.app/query-page.html')
}

app.whenReady().then(createWindow)