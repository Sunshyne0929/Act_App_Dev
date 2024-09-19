const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', Controller.index);
router.get('/Aking', Controller.index);
router.get('/test', Controller.test);

module.exports = router;