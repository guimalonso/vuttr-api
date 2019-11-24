const Yup = require('yup');
const Tool = require('../models/Tool');

const ToolController = {

  // GET /tools[?tag=:tag[&tagSearch=1]]
  async index(req, res) {
    const { tag, tagSearch } = req.query;

    let searchFilter = {};
    if (tag) {
      const tagSearchFilter = { tags: tag };

      if (!tagSearch) {
        searchFilter = {
          $or: [
            tagSearchFilter,
            { title: { '$regex': tag, '$options': 'i' } },
            { description: { '$regex': tag, '$options': 'i' } }
          ]
        };
      } else {
        searchFilter = tagSearchFilter;
      }
    }

    const tools = await Tool.find(searchFilter, 'id title link description tags');

    return res.json(tools);
  },

  // POST /tools
  async store(req, res) {

    // Request Validation
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().url().required(),
      description: Yup.string().required(),
      tags: Yup.array().of(Yup.string())
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Validation failed, please check your data' });
    }

    // Tool title must be unique
    const tool = await Tool.findOne({ title: req.body.title });
    if (tool) {
      return res.status(400).json({ message: 'Tool title is already in use.' });
    }

    try {
      const { _id, title, link, description, tags } = await Tool.create(req.body);

      return res.status(201).json({
        _id,
        title,
        link,
        description,
        tags
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Tool insertion failed, please check your data or try again later.'
      });
    }
  },

  // DELETE /tools/:id
  async delete(req, res) {
    const { id } = req.params;

    try {
      // Check if title with given id exists
      const tool = await Tool.findById(id);
      if (!tool) {
        return res.status(400).json({ message: 'This tool does not exist.' });
      }

      await tool.deleteOne({ _id: tool._id });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ message: 'Tool removal failed, please try again later.' });
    }
  }
};

module.exports = ToolController;
