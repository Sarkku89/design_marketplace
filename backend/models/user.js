const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordhash;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
