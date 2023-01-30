require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const http = require("http");
const cors = require("cors");
const userRouter = require("./controllers/userController");
const loginRouter = require("./controllers/loginController");
const itemRouter = require("./controllers/itemController");
const { tokenExtractor } = require("./middleware");

const app = express();

mongoose.connect(process.env.MONGOURI);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to database");
});

app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(tokenExtractor);

// Routers
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/items", itemRouter);

const server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

module.exports = app;
