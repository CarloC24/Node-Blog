const userF = require('./userFunctions');
const express = require('express');
const router = express.Router();

function uppercase(req, res, next) {
  req.body.name = req.body.name.toUpperCase();
  next();
}

router.get('/', userF.getUsers);

router.get('/:id', userF.getSingleUser);

router.get('/posts/:id', userF.getUserPosts);

router.post('/', uppercase, userF.addUser);

router.put('/:id', uppercase, userF.updateUser);

router.delete('/:id', userF.deleteUser);

module.exports = router;
