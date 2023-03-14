const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const { loginValidate } = require('../middlewares/validation.middleware')

const router = Router();

router.get('/login', loginValidate, loginController.login)

module.exports = router;