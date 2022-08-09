const User = require('../Models/user_model');
const DB = require('../dbConfig')

const admin = {
    first_name: 'admin',
    last_name: 'user',
    email: 'admin@gmail.com',
    DOB: 1997 / 8 / 9,
    mobile: '08967657890',
    status: true,
    password: 'admin123',
    account_type: 'admin'
}

User.findOne({account_type: 'admin'}).then(async (res) => {
    try {
        if (res) {
            await User.findByIdAndDelete(res._id)
        }
        await User.create(admin)
    } catch (e) {
        console.log(e.message)
    }
    closeDatabase()
})

const closeDatabase = () => {
    DB.disconnect().then(() => {
        console.log('database connection close')
    })
}


