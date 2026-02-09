const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://backend:9VB8x4zoxCOfTQHx@backend.9gcsjfe.mongodb.net/hally"
  );

  console.log("MongoDB connected");
};

module.exports = connectDB;
