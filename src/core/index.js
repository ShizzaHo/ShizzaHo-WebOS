const startup = require('./startup');
const routes = require('./routes');
const requests = require('./requests');

const app = startup.getApp();

routes.startRoutes(app);
requests.startRequests(app);
