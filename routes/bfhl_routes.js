
const express = require('express');
const router = express.Router();

const bfhlController = require('../controllers/bfhl_controller');

router.post('/bfhl', bfhlController.processData);

module.exports = router;