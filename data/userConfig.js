const userF = require('./userFunctions');
const express = require('express');
const router = express.Router();

router.get('/', userF.getUsers);

router.get('/:id', userF.getSingleUser);

router.get('/posts/:id', userF.getUserPosts);

router.post('/', userF.addUser);

router.put('/:id', userF.updateUser);

router.delete('/:id', userF.deleteUser);

module.exports = router;
