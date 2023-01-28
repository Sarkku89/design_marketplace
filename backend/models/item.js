const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    minlength: 3,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Item', itemSchema);
