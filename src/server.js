const app = require('./app');

const { PORT } = process.env;

// Server initialization
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
