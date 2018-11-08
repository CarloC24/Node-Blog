const express = require('express');
const path = require('path');
const middlewares = require('./data/middlewares');

const userRoutes = require('./data/userConfig');
const postRoutes = require('./data/postsConfig');

const server = express();

middlewares(server);

function errorHandler(err, req, res, next) {
  console.log(err);

  switch (err.statusCode) {
    case 404:
      res.status(404).json({ message: 'The requested file does not exist' });
      break;

    default:
      res.status(500).json({ message: 'There was no file' });
  }
}

server.get('/download', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, err => {
    if (err) {
      next(err);
    } else {
      console.log('sent data');
    }
  });
});

server.get('/', (req, res) => {
  res.send('sup bro');
});

server.use(errorHandler);

server.use('/users', userRoutes);

server.use('/posts', postRoutes);

//error handling middleware

const port = process.env.PORT || 9000;

server.listen(port, () =>
  console.log(`\n == API Running on Port ${port} == \n`)
);
