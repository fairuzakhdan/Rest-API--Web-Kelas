const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;
const mongoose = require('mongoose');

const studentRouter = require('./routes/student');
const ErrorHandler = require('./utils/ErrorHandler');

mongoose.connect('mongodb://127.0.0.1:27017/db_kelasc').then(() => {
  console.log('Database connect');
}).catch((err) => {
  console.log('database no Connect', err.message);
});

app.use(morgan('dev'));
app.use(express.json());

app.use('/students', studentRouter);

app.use('/', (req, res) => {
  res.send('welcome to MyApi');
});

app.all('*', (req, res, next) => {
  next(new ErrorHandler('Page Not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  // eslint-disable-next-line no-param-reassign
  if (!err.message) err.message = 'Oh No, Something Went Wrong!';
  res.status(statusCode).json({
    err,
  });
});

app.listen(port, () => {
  console.log(`server is Running in Port:${port}`);
});
