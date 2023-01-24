require('dotenv').config();
const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const cors = require('cors');
const userRouter = require('./controllers/userController');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOURI);
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to database');
});

app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(cors());
app.use(express.json());

// Routers
app.use('/api/users', userRouter);

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});

module.exports = app;
