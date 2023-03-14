const { User } = require('../database/models');
const passwordService = require('../services/password.service');

const login = async ({ username, password }) => {
  const user = await User.findOne({ where: { username }});
  const passwordValidate = passwordService.checkPassword(password, user.password);
  if (passwordValidate) {
    const { password: _, ...userInfo } = user.get();
    return userInfo;
  }
};

module.exports = { login };
