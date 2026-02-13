const mongoose = require('mongoose')

const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connection is successful");
    })
    .catch(() => {
        console.log('Something went wrong');
    })
}

module.exports = mongoDB;