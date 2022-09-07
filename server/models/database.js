const mongoose = require("mongoose");

mongooose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedToplogy: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connecton error;"));
db.once("open", function () {
  console.log("Connection Successfull");
});

//Models
require("./Category");
