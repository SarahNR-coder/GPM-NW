const express = require('express');
const router = express.Router();
const usesCtrl = require('../controllers/uses');
const auth = require ('../middleware/auth');

router.post('/write', auth, usesCtrl.write);
router.get('/get/recent', usesCtrl.getRecent);

module.exports = router;