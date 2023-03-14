const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { createValidate } = require('../middlewares/validation.middleware')

const router = Router();

router.post('/user', createValidate, userController.createUser)
router.get('/user', userController.getAllUsers)
router.get('/user/:_id', userController.getUserById)
router.put('/user/:_id', userController.updateUser)
router.delete('/user/:_id', userController.deleteUser)

module.exports = router;
