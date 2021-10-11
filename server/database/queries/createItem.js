const connection = require('../config/connection');

const createItem = ({ name, description }) => {
  const sql = {
    text: 'Insert INTO items (name, description) VALUES ($1, $2)',
    values: [name, description],
  };
  return connection.query(sql);
};

module.exports = createItem;
