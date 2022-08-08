const User = require('../Models/user_model');
const catchAsync = require('../Utils/catchAsync');
const Filter = require('../Utils/Fliters')

//get all notices
exports.allUsers = catchAsync(async (req, res, next) => {
    const Respond = new Filter(User.find(), req.query).filter().sort().limitFields().paginate();

    const users = await Respond.query;

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});
