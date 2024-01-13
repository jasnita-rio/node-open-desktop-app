const service = require('node-windows').Service;

const svc = new service({
    name: "nodeFristaOpener",
    description: "This script is to run node service to open Frista app",
    script: "C:\\laragon\\www\\node-frista\\app.js"
})

// Install node windows
// svc.on('install', function() {
//     svc.start()
// })
// svc.install()

// Uninstall node windows
// svc.on('uninstall', function() {
//     console.log('Service unistalled')
// })
// svc.uninstall()