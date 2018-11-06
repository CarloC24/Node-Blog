const express = require('express');
const middlewares = require('./data/middlewares');

const userRoutes = require('./data/userConfig');

const server = express();

middlewares(server);

server.use('/users', userRoutes);

server.listen(9000, () => console.log('\n == API Running on Port 9K == \n'));
