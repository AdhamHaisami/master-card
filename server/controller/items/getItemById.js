const { findItemById } = require('../../database/queries');

const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await findItemById(id);

    if (!rows.length) {
      throw (500, 'Something went wrong!');
    }
    return res.json({ statusCode: 200, data: rows[0] });
  } catch (error) {
    return next(error);
  }
};

module.exports = getItemById;
