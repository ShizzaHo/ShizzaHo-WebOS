const path = require('path');
const app = undefined;

const startRoutes = (app) => {
  const routesList = [

    app.get('/', (req, res) => {
      const viewPath = path.join(__dirname, '..', 'public', 'index.html');
      res.status(200).sendFile(viewPath);
    }),

  ]

  return routesList;
};

module.exports = {
  startRoutes: startRoutes,
}

