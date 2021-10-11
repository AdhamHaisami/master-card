const router = require('express').Router();
const {
  getItems,
  getItemById,
  addItem,
  removeItem,
} = require('../controller/items/');

router.get('/item', getItems);
router.get('/item/:id', getItemById);
router.post('/item', addItem);
router.delete('/item/:id', removeItem);

module.exports = router;
