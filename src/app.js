const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the dashboard!");
});

app.use("/hello", (req, res) => {
  res.send("Hello!");
});

app.use("/test", (req, res) => {
  res.send("Hello From the Server!");
});

app.listen(1818, () => {
  console.log("Server is successfully listing to port 1818....");
});
