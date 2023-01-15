const path = require('path');

const express = require('express');
const app = express();
const port = process.argv[2] || 3000;

app.use("/core/public", express.static(path.join(__dirname, '..', 'public')));


app.listen(port, () => {
  console.log(`STARTUP | Launched by port ${port}`)
})

const getApp = () => {
  return app;
}

module.exports = {
  getApp: getApp
}