const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User = require('../models/user');
const { response } = require('../server');

// Get all users
userRouter.get('/', async (req, res) => {
  const users = await User.find({});
  response.json(users);
});

// Create new user
userRouter.post('/', async (req, res) => {
  const { username, password } = request.body;

  if (password === undefined) {
    return (
      response.status(400),
      json({
        error: 'password is required',
      })
    );
  } else if (username === undefined) {
    return response.status(400).json({
      error: 'username is required',
    });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: 'username must be unique',
    });
  }

  // Hash the password before saving into database
  const saltRounds = 10;
  const passwordhash = await bcrypt.hash(password, saltRounds);

  const user = new User({ username, passwordhash });

  const savedUser = await user.save();
  response.status(201).json(savedUser);
});

module.exports = userRouter;
