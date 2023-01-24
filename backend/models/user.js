const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    unique: true,
    required: true,
  },
  passwordhash: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
