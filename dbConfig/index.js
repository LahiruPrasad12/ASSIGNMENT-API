const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: '../config.env' });

//Configured the database connection
const URL = process.env.DATABASE||'mongodb+srv://LahiruPrasad12:Lahiru12@cluster0.n1wciok.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'));

module.exports = mongoose;