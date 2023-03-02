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
  imgurl: {
    type: String,
    minlength: 10,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  messages: [
    {
      senderEmail: { type: String, required: true },
      text: { type: String, required: true },
    },
  ],
});

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Item', itemSchema);
