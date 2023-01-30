const itemRouter = require('express').Router();
const { response } = require('express');
const Item = require('../models/item');

// Middleware for extracting user information of a request
const userExtractor = async (req, res, next) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }

  const user = await User.findById(decodedToken.id);
  req.user = user;

  next();
};

// Get all items on sale
itemRouter.get('/', async (req, res) => {
  const items = await Item.find({}).populate('seller', { username: 1, email: 1, id: 1 });
  res.json(items);
});

// Add new item on sale
itemRouter.post('/', userExtractor, async (req, res) => {
  const body = req.body;
  const user = req.user;

  const item = new Item({
    name: body.name,
    description: body.description,
    category: body.category,
    price: body.price,
    seller: user._id,
  });

  if (body.name && body.description && body.category && body.price) {
    const savedItem = await item.save();
    user.items = user.items.concat(savedItem._id);
    await user.save();

    response.status(201).json(savedItem.toJSON());
  } else {
    response.status(400).end();
  }
});

itemRouter.delete('/:id', userExtractor, async (req, res) => {
  const itemToBeDeleted = await Item.findById(req.params.id);

  if (itemToBeDeleted.user.toString() === req.user.id) {
    await itemToBeDeleted.remove();
    res.status(204).end();
  } else {
    return res.status(401).json({
      error: 'Logged in user ID does not match the ID of the seller',
    });
  }
});

module.exports = itemRouter;
