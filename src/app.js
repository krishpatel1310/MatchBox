const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "abc",
    lastName: "xyz",
    emailId: "abc@xyz.com",
    password: "abc@123",
  });

  await user.save();
  res.send("User added Successfully!");
});

connectDB()
  .then(() => {
    console.log("Database Connection established!...");
    app.listen(1818, () => {
      console.log("Server is successfully listing to port 1818....");
    });
  })
  .catch((err) => {
    console.error("Database Connection established!...");
  });
