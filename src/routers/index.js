const { Router } = require('express');

const routers = Router();

const userRouter = require('./user.router');
const loginRouter = require('./login.router');
const registerRouter = require('./register.router');

routers.use(userRouter);
routers.use(loginRouter);
routers.use(registerRouter);

module.exports = routers;
