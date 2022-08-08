const express = require('express');
const authController = require('../Controllers/auth_controller');
const router = express.Router();

router.post('/create-student', authController.signup);
router.post('/signing', authController.login);

// router.patch('/update-password', authController.protect, authController.updatePassword);
// router.get('/logout', authController.protect, authController.logout);

module.exports = router;