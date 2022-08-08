const express = require('express');
const authController = require('../Controllers/auth_controller');
const router = express.Router();

router.post('/create-student',authController.protect, authController.restrictTo('admin'), authController.createStudent);
router.post('/signing', authController.login);
router.patch('/update-account',authController.protect, authController.updatePassword);
router.get('/logout', authController.protect, authController.logout);

module.exports = router;