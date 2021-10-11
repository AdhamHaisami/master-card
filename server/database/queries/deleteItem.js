const connection = require('../config/connection');

const deleteItem = (id) => {
  const sql = {
    text: 'DELETE FROM items WHERE id=$1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteItem;
