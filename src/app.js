require("express-async-errors");
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/models');

const routers = require('./routers');

const errorHandler = require('./middlewares/error.middleware')

const app = express();

app.use(express.json());
app.use(cors());

app.use(routers);

app.use(errorHandler);

sequelize.sync().then(() => {
  console.log('Connected to database');
});

module.exports = app;