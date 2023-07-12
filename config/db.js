const mongoose = require("mongoose");

var uri = `mongodb://westamta:${process.env.PASSWORD}@ac-xgrlcqt-shard-00-00.rvyowx8.mongodb.net:27017,ac-xgrlcqt-shard-00-01.rvyowx8.mongodb.net:27017,ac-xgrlcqt-shard-00-02.rvyowx8.mongodb.net:27017/${process.env.DATABASE}?ssl=true&replicaSet=atlas-10jr6f-shard-0&authSource=admin&retryWrites=true&w=majority`;
var uri = `mongodb://127.0.0.1:27017/awwbtpta`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("Connected To DB"))
  .catch((err) => console.log("error", err));

module.exports = mongoose;
