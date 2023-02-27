const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');
const { userExtractor } = require('../middleware');

// login as an existing user
loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  const wasPasswordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordhash);

  if (!(user && wasPasswordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: user.username,
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({ token, username: user.username, email: user.email, id: user.id });
});

// Get currently logged in user's info
loginRouter.post('/me', userExtractor, async (req, res) => {
  const user = req.user;
  res.status(200).send(user);
})

module.exports = loginRouter;
