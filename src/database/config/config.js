require('dotenv').config();

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
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