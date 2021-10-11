const { createItem } = require('../../database/queries');

const addItem = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    await createItem({ name, description });
    return res
      .status(201)
      .json({ statusCode: 201, message: 'New Item created successfully' });
  } catch (error) {
    return next(error);
  }
};

module.exports = addItem;
