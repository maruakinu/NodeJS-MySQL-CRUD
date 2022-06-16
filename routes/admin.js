const express = require('express');
const adminController = require('../controllers/admin.controller');

const router  = express.Router();

router.post('/sign-up', adminController.signUp);
router.post('/login', adminController.login);

module.exports = router;