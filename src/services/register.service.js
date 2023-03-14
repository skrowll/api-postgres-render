const { User } = require('../database/models');
const passwordService = require('../services/password.service');

const register = async ({ username, email, password, role }) => {
  const encryptedPassword = passwordService.encryptPassword(password);
  const result = await User.create({ username, email, password: encryptedPassword, role });
  const { password: _, ...userInfo } = result.get();
  return { ...userInfo };
};

module.exports = { register };