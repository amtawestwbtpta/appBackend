const mongoose = require('mongoose');
const conn = require('../config/db');

let questionSchema = new mongoose.Schema({
    id: Number,
    school: String,
    udise: {
        type: String,
        unique: true
    },
    cl_pp_student: Number,
    cl_1_student: Number,
    cl_2_student: Number,
    cl_3_student: Number,
    cl_4_student: Number,
    cl_5_student: Number,
    total_student: Number,
    gp: String,
    total_rate: Number,
    payment: String,
    paid: Number,
}, {
    timestamps: true
}
)

let questions = conn.model('question', questionSchema, 'question')

module.exports = questions;