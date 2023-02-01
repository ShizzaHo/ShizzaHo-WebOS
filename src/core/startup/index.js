const path = require('path');
const clc = require("cli-color");

const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use("/core/public", express.static(path.join(__dirname, '..', 'public')));


app.listen(port, (err) => {
  console.log(`${clc.green("STARTUP")} | Launched by ${clc.yellow.underline("http://localhost:"+port)}`)
})

const getApp = () => {
  return app;
}

module.exports = {
  getApp: getApp
}