const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("HEyyaAa");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Krish", lastName: "Patel" });
});

app.post("/user", (req, res) => {
  res.send("Data Successfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted Successfully");
});

app.use("/test", (req, res) => {
  res.send("Hello From the Server!");
});

app.listen(1818, () => {
  console.log("Server is successfully listing to port 1818....");
});
