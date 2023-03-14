require('dotenv').config();

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT,
  ssl: {rejectUnauthorized : false},
  dialectOptions: {
    ssl: true,
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
};