const express = require('express');
const { getPostById, createPost } = require('../controllers/postController');

const router = express.Router();

router.get('/:id', getPostById);
router.post('/', createPost);

module.exports = router;