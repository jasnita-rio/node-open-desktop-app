const { keyboard, Key, clipboard } = require("@nut-tree/nut-js");

(async () => {
    // Extract the application name from the command line arguments
    const nik = process.argv[2];

    // Add NIK to clipboard 
    await clipboard.setContent(nik);
    
    // ALT + TAB
    await keyboard.pressKey(Key.LeftAlt, Key.Tab);
    await keyboard.releaseKey(Key.LeftAlt, Key.Tab);
})();