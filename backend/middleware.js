const jwt = require("jsonwebtoken");
const User = require("./models/user");

// Middleware for extracting token from header
const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    req.token = authorization.substring(7);
  }
  next();
};

// Middleware for extracting user information of a request
const userExtractor = async (req, res, next) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);
  req.user = user;

  next();
};

module.exports = { tokenExtractor, userExtractor };
