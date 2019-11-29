const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://db:27017/vuttr',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
);