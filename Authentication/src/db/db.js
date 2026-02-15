const mongoose = require('mongoose')
const { eventNames } = require('../app')

async function connectDB() {
    try{
    await mongoose.connect(
        process.env.MONGODB_URI
    )
    console.log("Connected to DB")
}
catch(err){
    console.log("Database connection error")
}
}
module.exports = connectDB