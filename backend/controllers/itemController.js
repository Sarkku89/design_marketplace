const itemRouter = require("express").Router();
const { response } = require("express");
const Item = require("../models/item");
const { userExtractor } = require("../middleware");

// Get all items on sale
itemRouter.get("/", async (req, res) => {
  const items = await Item.find({}).populate("seller", {
    username: 1,
    email: 1,
    id: 1,
  });
  res.json(items);
});

// Get items of logged in user
itemRouter.get('/myitems', userExtractor, async (req, res) => {
  const user = req.user;

  const items = await Item.find({}).populate('seller', {
    username: 1,
    email: 1,
    id: 1,
  });

  const myItems = items.filter((item) => item.seller.username === user.username);

  res.json(myItems);
});

// Add new item on sale
itemRouter.post("/", userExtractor, async (req, res) => {
  const body = req.body;
  const user = req.user;

  const item = new Item({
    name: body.name,
    description: body.description,
    category: body.category,
    price: body.price,
    imgurl: body.imgurl,
    seller: user._id,
  });

  if (body.name && body.description && body.category && body.price && body.imgurl) {
    const savedItem = await item.save();
    user.items.concat(savedItem._id);
    await user.save();

    res.status(201).json(savedItem.toJSON());
  } else {
    res.status(400).end();
  }
});

itemRouter.delete("/:id", userExtractor, async (req, res) => {
  const itemToBeDeleted = await Item.findById(req.params.id);

  await itemToBeDeleted.remove();
    res.status(204).end();

});

module.exports = itemRouter;
