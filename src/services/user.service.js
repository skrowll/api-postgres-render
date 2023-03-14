const { User } = require('../database/models');
const passwordService = require('../services/password.service');

const createUser = async ({ username, email, password, role }) => {
  const encryptedPassword = passwordService.encryptPassword(password);
  const result = await User.create({ username, email, password: encryptedPassword, role });
  const { password: _, ...userInfo } = result.get();
  return { ...userInfo };
};

const getAllUsers = async () => {
  const result = await User.findAll({attributes: { exclude: ['password'] }});
  return result;
};

const getUserById = async ({ _id }) => {
  const result = await User.findOne({ where: { _id }, attributes: { exclude: ['password'] } })
  return result;
}

const updateUser = async (body, { _id }) => {
  const result = await User.update({ ...body }, { where: { _id } });
  return result;
}

const deleteUser = async ({ _id }) => {
  const result = await User.findOne({ where: { _id }, attributes: { exclude: ['password'] } })
  await result.destroy();
  return result;
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
