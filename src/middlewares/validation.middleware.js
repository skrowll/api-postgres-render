const { User } = require('../database/models');

const validations = {
  createValidate: async (req, _res, next) => {
    const { username, email, password, role } = req.body
    if (!username || !email || !password || !role) {
      const error = new Error('All fields must be filled');
      error.code = 'BadRequest';
      throw error;
    }
    if (username.length < 3) {
      const error = new Error('Username must have minimun 3 characters');
      error.code = 'BadRequest';
      throw error;
    }
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      const error = new Error('E-mail must have a valid format');
      error.code = 'BadRequest';
      throw error;
    }
    if (password.length < 6) {
      const error = new Error('Password must have minimun 6 characters');
      error.code = 'BadRequest';
      throw error;
    }
    const findEmail = await User.findOne({ where: { email } });
    if (findEmail) {
      const error = new Error('Email already registered');
      error.code = 'Conflict';
      throw error;
    }
    const findUsername = await User.findOne({ where: { username } });
    if (findUsername) {
      const error = new Error('Username already registered');
      error.code = 'Conflict';
      throw error;
    }
    next();
  },
  loginValidate: async (req, _res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
      const error = new Error('All fields must be filled');
      error.code = 'BadRequest';
      throw error;
    }
    const user = await User.findOne({ where: { username } });
    if (!user) {
      const error = new Error('Invalid username');
      error.code = 'NotFound';
      throw error;
    }
    next();
  },
  registerPasswordValidate: async (req, _res, next) => {
    const { password, password2 } = req.body
    if (!password || !password2) {
      const error = new Error('All fields must be filled');
      error.code = 'BadRequest';
      throw error;
    }
    if (password !== password2) {
      const error = new Error('Passwords do not match');
      error.code = 'BadRequest';
      throw error;
    }
    next();
  },
};

module.exports = validations;