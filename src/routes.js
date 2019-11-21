const express = require('express');

const ToolController = require('./controllers/ToolController');

const routes = express.Router();

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes;
