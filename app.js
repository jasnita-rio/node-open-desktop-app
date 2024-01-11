const express = require('express')
const app = express()
const { exec } = require('child_process');
const port = 3000

app.get('/open-app', (req, res) => {
  // Extract the parameter from the query string, defaulting to 'notepad' if not provided
  const nik = req.query.nik || null;

  // Run openApp.js script with the provided parameter
  const command = `node openApp.js ${nik}`;

  // Run openApp.js script
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing openApp.js: ${error.message}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Script executed successfully');
    res.send('Script executed successfully');
    // res.send(`
    // <script>
    //   const newTab = window.open('', '_blank');
    //   newTab.document.write('<html><head><title>Closing Tab</title></head><body><p>Opening frista...</p></body></html>');
    //   newTab.setTimeout(() => { newTab.close(); }, 2500);
    //   window.close();
    // </script>
    // `);  
  });
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})