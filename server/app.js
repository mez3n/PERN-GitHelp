const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth.route.js');
const authMiddleware = require('./middlewares/auth.middleware.js');
const userRouter = require('./routes/user.route.js');
const postRouter = require('./routes/post.route.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, err => {
  if (err) return console.error(err);
  console.log(`Server started listening at port ${PORT}`);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/user',authMiddleware,userRouter);
app.use('/post',authMiddleware,postRouter);
app.get('/', (req, res) => {
res.send('Hello World!');});
