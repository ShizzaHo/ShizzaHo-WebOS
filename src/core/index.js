const startup = require('./startup');
const routes = require('./routes');
const requests = require('./requests');
const clc = require("cli-color");

console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);

console.log(`${clc.green("CORE")} | The system starts booting up...`)

const app = startup.getApp();

requests.startRequests(app);
routes.startRoutes(app);

console.log(`${clc.green("CORE")} | The system is loaded!`)
