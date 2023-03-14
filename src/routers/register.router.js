const { Router } = require('express');
const registerController = require('../controllers/register.controller');
const { createValidate, registerPasswordValidate } = require('../middlewares/validation.middleware')

const router = Router();

router.post('/register', createValidate, registerPasswordValidate, registerController.register)

module.exports = router;