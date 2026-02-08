const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(
        "mongodb+srv://samruddhi:password@backend.rxfkfex.mongodb.net/notes"
    );

    console.log("Connected to DB");
}

module.exports = connectDB;
