const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/userRouter');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

app.listen(4000, () => console.log('Server running on port 4000'));