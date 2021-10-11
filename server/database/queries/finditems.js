const connection = require('../config/connection');

const findItems = () => {
  const sql = {
    text: 'SELECT * FROM items',
  };
  return connection.query(sql);
};

module.exports = findItems;
