const mongoose = require("mongoose");
const User = require("../model/userModel");

// connecting to database
try {
  dbConfig = async (URI) => {
    await mongoose.connect(URI);
    console.log("Database connected successfully.");

    const adminExist = User.findOne({ userEmail: "admin@gmail.com" });

    if (adminExist) {
      return console.log("Admin seeded Already.");
    }

    await User.create({
      userName: "admin",
      userEmail: "admin@gmail.com",
      userPassword: "admin123",
      role: "Admin",
    });

    console.log("admin seeded successfully.");
  };
} catch (err) {
  console.log(err);
}

module.exports = dbConfig;
