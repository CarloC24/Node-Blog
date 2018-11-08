const express = require('express');
const router = express.Router();
const postF = require('./postFunctions');

router.get('/', postF.get);

router.get('/:id', postF.getPostTags);

router.post('/', postF.insert);

router.put('/:id', postF.update);

router.delete('/:id', postF.delete);

module.exports = router;
