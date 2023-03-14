const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  return res.status(201).json(result);
}

const getAllUsers = async (_req, res) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result);
}

const getUserById = async (req, res) => {
  const result = await userService.getUserById(req.params);
  return res.status(201).json(result);
}

const updateUser = async (req, res) => {
  const result = await userService.updateUser(req.body, req.params);
  return res.status(200).json(result);
}

const deleteUser = async (req, res) => {
  const result = await userService.deleteUser(req.params);
  return res.status(200).json(result);
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
