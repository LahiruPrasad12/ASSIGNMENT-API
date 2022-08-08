const User = require('../Models/user_model');
const catchAsync = require('../Utils/catchAsync');

//get all notices
exports.allUsers = catchAsync(async (req, res, next) => {
    let all_users = await User.find()
    res.status(201).json({
        status: "success",
        data: {
            all_users,
        },
    });
});
