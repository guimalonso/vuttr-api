require('dotenv/config');

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const notFoundMiddleware = require('./middlewares/notFound');

const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);

app.use(express.json());
app.use(routes);
app.use(notFoundMiddleware);

module.exports = app;
