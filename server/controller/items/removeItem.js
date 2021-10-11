const { deleteItem } = require('../../database/queries');

const removeItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteItem(id);
    const { rows } = await deleteItem(id);

    return res.json({
      status: 200,
      message: 'Item deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = removeItem;
