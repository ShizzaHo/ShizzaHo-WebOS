const path = require('path');
const clc = require("cli-color");

const startRoutes = (app) => {
  console.log(`${clc.green("ROUTES")} | Loading routes...`)
  app.get('/', (req, res) => {
    console.log(`${clc.green("ROUTES")} ${clc.black.bgWhite("/")} | Someone comes in.`)
    const viewPath = path.join(__dirname, '..', 'public', 'index.html');
    res.status(200).sendFile(viewPath);
  })
  console.log(`${clc.green("ROUTES")} | Routes loaded!`)
};

module.exports = {
  startRoutes: startRoutes,
}

