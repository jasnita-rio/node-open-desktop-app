const express = require('express')
const { exec } = require('child_process')
const app = express()
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
      res.status(500).send(`Internal Server Error : ${error.message}`);
      return;
    }
    console.log('Script executed successfully');
    res.send('Script executed successfully');
  });
})

app.listen(port, () => {
  console.log(`Node Frista listening on http://localhost:${port}`)
})