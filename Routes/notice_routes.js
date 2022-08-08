const express = require("express");
const noticeController = require("../Controllers/notice_controller");
const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student
router.route("/")
    .get(authController.protect, authController.restrictTo('student'),noticeController.myAllNotices)
    .post(authController.protect, authController.restrictTo('student'), noticeController.createNotice)
    .patch(authController.protect,  authController.restrictTo('student'),noticeController.updateMyNotice)
    .delete(authController.protect,  authController.restrictTo('student'), noticeController.deleteNotice);
module.exports = router;