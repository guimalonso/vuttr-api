const database = require('../../src/database');

const dropCollection = async () => {
  await database.dropCollection('tools');
};

module.exports = dropCollection;