const { findItems } = require('../../database/queries');

const getItems = async (req, res, next) => {
  try {
    const { limit, skip } = req.query;

    const { rows } = await findItems(limit, skip);
    return res.status(200).json({ statusCode: 200, data: rows });
  } catch (error) {
    return next(error);
  }
};

module.exports = getItems;
