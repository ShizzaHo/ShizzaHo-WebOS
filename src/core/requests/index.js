const path = require('path');
const fs = require('fs');
const fileApi = require('./modules/fileapi');
const clc = require("cli-color");

const startRequests = (app) => {
  console.log(`${clc.green("REQUESTS")} | Loading requests...`)

  fileApi.load(app);
};

module.exports = {
  startRequests: startRequests,
}

