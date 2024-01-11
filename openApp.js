const { keyboard, Key, clipboard } = require("@nut-tree/nut-js");

(async () => {
    // Extract the application name from the command line arguments
    const nik = process.argv[2];

    // Add NIK to clipboard 
    await clipboard.setContent(nik);
    
    // ALT + TAB
    await keyboard.pressKey(Key.LeftAlt, Key.Tab);
    await keyboard.releaseKey(Key.LeftAlt, Key.Tab);

    // Open notepad app from windoows search

    // Press windows button
    // await keyboard.pressKey(Key.LeftSuper);
    // await keyboard.releaseKey(Key.LeftSuper);

    // Type "notepad"
    // await keyboard.type('notepad');

    // Enter to open notepad 
    // await keyboard.pressKey(Key.Enter);
    // await keyboard.releaseKey(Key.Enter);

    // Type NIK
    // await keyboard.type(nik);

    // Minimize the window using robotjs
    // await keyboard.pressKey(Key.LeftSuper, Key.Down);
    // await keyboard.releaseKey(Key.LeftSuper, Key.Down);

    
})();