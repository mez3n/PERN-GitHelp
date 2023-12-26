const { Router } = require('express');
const PostController = require('../controllers/post.controller.js');
const {isOrganizationMiddleware} = require('../middlewares/permissions.middleware.js');
const postRouter = Router();
postRouter.post('/',isOrganizationMiddleware ,PostController.createPost);
postRouter.get('/',PostController.FindAll);
postRouter.get('/:id',PostController.FindOne);
// postRouter.delete('/:id',isHigherMiddleware,PostController.delete);
module.exports = postRouter;