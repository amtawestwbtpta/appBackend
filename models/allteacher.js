const mongoose = require("mongoose");
const conn = require("../config/db");

let allteacherSchema = new mongoose.Schema(
  {
    sl: String,
    school: String,
    udise: String,
    tsname: String,
    tname: String,
    desig: String,
    disability: String,
    gp: String,
    association: String,
    phone: String,
    email: String,
    empid: String,
    training: String,
    pan: String,
    address: String,
    basi: Number,
    mbasic: Number,
    addl: Number,
    ma: Number,
    gpfm: Number,
    gsli: Number,
    fname: String,
    hoi: String,
  },
  {
    timestamps: true,
  }
);

let allteacher = conn.model("allteacher", allteacherSchema, "allteacher");

module.exports = allteacher;
