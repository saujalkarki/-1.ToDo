// requiring packages
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// allowing cross origin resource sharing  CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

// env variables
const port = process.env.PORT;
const Mongo_URI = process.env.MONGO_URI;

//parsing json and url-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to databse
const dbConfig = require("./config/dbConfig");
dbConfig(Mongo_URI);

// setting up authRoutes
const authRoute = require("./route/auth/authRoute");
app.use("/user", authRoute);

// setting up todoRoutes
const todoRoute = require("./route/todoRoute");
app.use("", todoRoute);

// setting up deletingUserRoutes
const userRoute = require("./route/userRoute");
app.use("", userRoute);

// listening to server
app.listen(port, () => {
  console.log(`Server has started at port ${port}.`);
});
