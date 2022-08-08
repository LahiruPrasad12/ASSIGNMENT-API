const express = require("express");
const userController = require("../Controllers/user_controller");
const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student
router.route("/")
    .get(authController.protect, authController.restrictTo('admin'),userController.allUsers)

module.exports = router;