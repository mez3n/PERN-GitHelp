const { Router } = require('express');
const userController = require('../controllers/user.controller.js');
const { isOrganizationMiddleware } = require('../middlewares/permissions.middleware.js');

const userRouter = Router();
userRouter.get('/',userController.findAll);
userRouter.get('/:id' ,userController.findOne);
// userRouter.delete('/:id' ,userController.delete);
module.exports = userRouter;