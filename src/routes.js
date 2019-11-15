const express = require('express');

const ToolController = require('./controllers/ToolController');
const UserController = require('./controllers/UserController');
const UserToolController = require('./controllers/UserToolController');
const SessionController = require('./controllers/SessionController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/tools', ToolController.index);

// Routes placed below this line will only work with user authentication
routes.use(authMiddleware);

routes.get('/users/tools', UserToolController.index);

routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes;
