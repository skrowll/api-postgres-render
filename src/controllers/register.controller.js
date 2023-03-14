const registerService = require('../services/register.service');

const register = async (req, res) => {
  const result = await registerService.register(req.body);
  return res.status(201).json(result);
};

module.exports = { register };
