const connection = require('../config/connection');

const findItems = (limit = 10, skip = 0) => {
  const sql = {
    text: 'SELECT * FROM items  LIMIT $1 OFFSET $2',
    values: [limit, skip],
  };
  return connection.query(sql);
};

module.exports = findItems;
