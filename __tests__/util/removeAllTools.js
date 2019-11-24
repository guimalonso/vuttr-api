const Tool = require('../../src/models/Tool');

const removeAllTools = async () => {
  await Tool.deleteMany();
};

module.exports = removeAllTools;