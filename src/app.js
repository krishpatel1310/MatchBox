const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  // const user = new User({
  //   firstName: "xyz",
  //   lastName: "ab",
  //   emailId: "xyz@gmail.com",
  //   password: "xyz@123",
  // });

  try {
    await user.save();
    res.send("User added Successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
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
