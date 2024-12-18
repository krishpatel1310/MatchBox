const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling on the route");
    next();
  },
  (req, res, next) => {
    console.log("Handling on the route user 2");
    // res.send("Response 2!");
    next();
  },
  (req, res, next) => {
    console.log("Handling on the route user 3");
    // res.send("Response 3!");
    next();
  },
  (req, res, next) => {
    console.log("Handling on the route user 4");
    res.send("Response 4!");
  }
);

app.listen(1818, () => {
  console.log("Server is successfully listing to port 1818....");
});
