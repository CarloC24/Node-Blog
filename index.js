const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const userF = require('./data/userFunctions');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());

server.get('/users', userF.getUsers);

server.get('/users/:id', userF.getSingleUser);

server.get('/users/posts/:id', userF.getUserPosts);

server.post('/users', userF.addUser);

server.put('/users/:id', userF.updateUser);

server.delete('/users/:id', userF.deleteUser);

server.listen(9000, () => console.log('\n == API Running on Port 9K == \n'));
