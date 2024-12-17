const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Krish", lastName: "Patel" });
});

app.listen(1818, () => {
  console.log("Server is successfully listing to port 1818....");
});
