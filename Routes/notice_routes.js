const express = require("express");
const noticeController = require("../Controllers/notice_controller");
const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student
router.route("/notices")
    .get(authController.protect, noticeController.myAllNotices)
    .post(authController.protect, noticeController.createNotice)
    .patch(authController.protect, noticeController.updateMyNotice)
    .delete(authController.protect, noticeController.deleteNotice);
module.exports = router;