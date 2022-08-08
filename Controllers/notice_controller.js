const Notice = require("../Models/notice_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createNotice = catchAsync(async (req, res, next) => {
    req.body.user = req.user
   let added_notice = await Notice.create(req.body)
    res.status(201).json({
        status: "success",
        data: {
            added_notice,
        },
    });
});


//get all notices
exports.myAllNotices = catchAsync(async (req, res, next) => {
    let all_notices = await Notice.find({user:req.user})
    res.status(201).json({
        status: "success",
        data: {
            all_notices,
        },
    });
});


//update notices
exports.updateMyNotice = catchAsync(async (req, res, next) => {
    req.body.user = req.user
    let all_notices = await Notice.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json({
        status: "success",
        data: {
            all_notices,
        },
    });
});


//delete notice
exports.deleteNotice = catchAsync(async (req, res, next) => {
    let deletedNotice = await Notice.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "success",
        data: {
            deletedNotice,
        },
    });
});