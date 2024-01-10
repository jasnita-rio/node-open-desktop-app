const { keyboard, Key } = require("@nut-tree/nut-js");

(async () => {
    // ALT + TAB
    // await keyboard.pressKey(Key.LeftAlt, Key.Tab);
    // await keyboard.releaseKey(Key.LeftAlt, Key.Tab);

    await keyboard.pressKey(Key.LeftSuper);
    await keyboard.releaseKey(Key.LeftSuper);

    await keyboard.type('notepad');

    await keyboard.pressKey(Key.Enter);
    await keyboard.releaseKey(Key.Enter);

    // Extract the application name from the command line arguments
    const nik = process.argv[2] || '123456';
    await keyboard.type(nik);

    // Minimize the window using robotjs
    await keyboard.pressKey(Key.LeftSuper, Key.Down);
    await keyboard.releaseKey(Key.LeftSuper, Key.Down);
})();