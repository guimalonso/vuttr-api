const Tool = require('../models/Tool');

const ToolController = {
  async index(req, res) {
    const { tag } = req.query;

    let searchObj = {};
    if (tag) {
      searchObj = { tags: tag };
    }

    const tools = await Tool.find(searchObj, 'id title link description tags');

    return res.json(tools);
  },

  async store(req, res) {
    try {
      const { _id, title, link, description, tags } = await Tool.create({
        ...req.body,
        userId: req.userId
      });

      return res.status(201).json({
        _id,
        title,
        link,
        description,
        tags
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const tool = await Tool.findById(id);
      if (req.userId !== tool.userId) {
        return res.status(401).json({ error: 'You do not have permission to delete this item.' });
      }

      await tool.deleteOne({ _id: tool._id });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

module.exports = ToolController;
