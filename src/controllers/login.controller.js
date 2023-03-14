const loginService = require('../services/login.service');

const login = async (req, res) => {
  const result = await loginService.login(req.body);
  return res.status(200).json(result);
};

module.exports = { login };
