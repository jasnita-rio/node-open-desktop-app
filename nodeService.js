const service = require('node-windows').Service;

const svc = new service({
    name: "nodeOpenFrista",
    description: "This script is to run node service to open Frista app",
    script: "C:\\laragon\\www\\node-frista\\app.js"
})

// svc.on('install', function() {
//     svc.start()
// })

// svc.install()


svc.on('uninstall', function() {
    console.log('Service unistalled')
})

svc.uninstall()