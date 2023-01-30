const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User = require('../models/user');

// Get all users
userRouter.get('/', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Create new user
userRouter.post('/', async (req, res) => {
  const { username, password, email } = req.body;

  if (password === undefined) {
    return res.status(400).json({
      error: 'password is required',
    });
  } else if (username === undefined) {
    return res.status(400).json({
      error: 'username is required',
    });
  } else if (email === undefined) {
    return res.status(400).json({
      error: 'email is required',
    });
  }

  const existingUserName = await User.findOne({ username });
  if (existingUserName) {
    return res.status(400).json({
      error: 'username must be unique',
    });
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({
      error: 'email must be unique',
    });
  }

  // Hash the password before saving into database
  const saltRounds = 10;
  const passwordhash = await bcrypt.hash(password, saltRounds);

  const user = new User({ username, passwordhash, email });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

module.exports = userRouter;
