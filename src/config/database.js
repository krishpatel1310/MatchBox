const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://patelkrish7568:LpcjaRAuwJzY3CDs@hellonode.6yxzt.mongodb.net/MatchBox"
  );
};
module.exports = connectDB;
