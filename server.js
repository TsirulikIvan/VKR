const express = require('express')
const { exec } = require('child_process')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    exec("python --version", (error, stdout, stderr) => {
        if (error) {
            console.log(error.message)
            res.send(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(stderr)
            res.send(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout)
        res.send(`stdout: ${stdout}`);
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })