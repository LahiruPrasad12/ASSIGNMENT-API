const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
// const autoIncrement = require("mongoose-auto-increment");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
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
    },
    mobile: {
        type: Number,
    },
    status: {
        type: Boolean,
        default: false,
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