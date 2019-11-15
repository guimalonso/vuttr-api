const Tool = require('../models/Tool');

const UserToolController = {
  async index(req, res) {
    const { tag } = req.query;

    let searchObj = { userId: req.userId };
    if (tag) {
      searchObj = {
        ...searchObj,
        tags: tag
      };
    }

    const tools = await Tool.find(searchObj, 'id title link description tags');

    return res.json(tools);
  }
}

module.exports = UserToolController;
