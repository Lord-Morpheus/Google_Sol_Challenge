const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const { auth } = require('firebase-admin');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/auth',authRouter);

app.listen(4000, () => console.log('Server running on port 4000'));