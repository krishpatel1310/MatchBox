const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  //try

  throw new error("asldjfik");
  res.end("User Data Sent");
  //  } catch (err) {
  //  res.status(500).send("Some Error Contact support team");
  //}
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(1818, () => {
  console.log("Server is successfully listing to port 1818....");
});
