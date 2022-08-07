const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const app = require('./app');

//linked .env file
dotenv.config({ path: './config.env' });


//Specified the port that application has been run
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});


//Configured the database connection
const URL= process.env.DATABASE;
mongoose
    .connect(URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'));
