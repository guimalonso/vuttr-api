require('dotenv/config');

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const notFoundMiddleware = require('./middlewares/notFound');

// Connection to MongoDB
require('./database');

const app = express();

const origin = process.env.APP_URL || 'http://localhost:3001';

// Middlewares
app.use(cors({ origin }));
app.use(express.json());
app.use(routes);
app.use(notFoundMiddleware);

module.exports = app;
