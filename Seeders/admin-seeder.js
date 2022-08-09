const User = require('../Models/user_model');
const DB = require('../databse/index')

const admin = new User({
    first_name:'admin',
    last_name:'user',
    email:'admin@gmail.com',
    DOB:1997/8/9,
    mobile:'08967657890',
    status:true,
    password:'admin123',
    account_type:'admin'
})

admin.save().then(()=>{
    DB.disconnect();
}).catch((e)=>{
    console.log(e)
})

