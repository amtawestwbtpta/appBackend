const mongoose = require("mongoose");
const conn = require("../config/db");

let complainSchema = new mongoose.Schema(
  {
    email: String,
    tname: String,
    school: String,
    sis: String,
    mobile: String,
    complain: String,
    noticed: String,
  },
  {
    timestamps: true,
  }
);

let complain = conn.model("complain", complainSchema, "complain");

module.exports = complain;
