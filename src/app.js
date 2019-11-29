const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const notFoundMiddleware = require('./middlewares/notFound');

// Connection to MongoDB
require('./database');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(notFoundMiddleware);

module.exports = app;
