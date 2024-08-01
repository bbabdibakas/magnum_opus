const express = require('express');
const { getPostById } = require('../controllers/postController');

const router = express.Router();

router.get('/:id', getPostById);

module.exports = router;