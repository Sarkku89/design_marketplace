const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');

// login as an existing user
loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });
  const wasPasswordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordhash);

  if (!(user && wasPasswordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password',
    });
  }

  const userForToken = {
    username: user.username,
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).send({ token, username: user.username });
});

module.exports = loginRouter;
