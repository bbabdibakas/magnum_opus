const express = require('express');
const { getProfileById } = require('../controllers/profileController');

const router = express.Router();

router.get('/:id', getProfileById);

module.exports = router;