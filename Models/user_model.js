const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// const autoIncrement = require("mongoose-auto-increment");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please tell us your first name!']
    },
    last_name: {
        type: String,
        required: [true, 'Please tell us your last name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    DOB: {
        type: Date,
        required: [true, 'Please tell us your birthday!'],
        minlength: 8,
        select: false
    },
    mobile: {
        type: Number,
        required: [true, 'Please tell us your contact number!'],
        minlength: 8,
        select: false
    },
    status: {
        type: Boolean,
        default: true,
        select: false
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    account_type: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
    },
});

// //created id filed with autoincrement by 1
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, {
//     model: "User", // collection or table name in which you want to apply auto increment
//     field: "id", // field of model which you want to auto increment
//     startAt: 0, // start your auto increment value from 1
//     incrementBy: 1, // incremented by 1
// });
// userSchema.index({ name: "text", description: "text" });


/**Middleware */

//This middleware performs encrypt password to save the database
userSchema.pre('save', async function (next) {

    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

/**End of the middleware */


//Check passwords is correct or incorrect
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;