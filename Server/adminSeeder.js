const User = require("./model/userModel");
const bcrypt = require("bcryptjs");

async function adminSeeder() {
  const adminExist = await User.findOne({ userEmail: "admin@gmail.com" });

  if (adminExist) {
    return console.log("Admin seeded Already.");
  }

  await User.create({
    userName: "admin",
    userEmail: "admin@gmail.com",
    userPassword: bcrypt.hashSync("admin123", 10),
    role: "Admin",
  });

  console.log("admin seeded successfully.");
}

module.exports = adminSeeder;
