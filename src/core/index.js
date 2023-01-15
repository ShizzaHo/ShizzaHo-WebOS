const startup = require('./startup');
const routes = require('./routes');

const app = startup.getApp();

routes.startRoutes(app);
