const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const app = require('./app');

//linked .env file
dotenv.config({ path: './config.env' });


// Configure the cors
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));


//Specified the port that application has been run
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
    require('./databse')
});



