const connection = require('../config/connection');

const findItemById = (id) => {
  const sql = {
    text: 'SELECT * from items WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = findItemById;
