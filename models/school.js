const mongoose = require('mongoose');
const conn = require('../config/db');

let schoolSchema = new mongoose.Schema({
    id: Number,
    school: String,
    udise: {
        type: String,
        unique: true
    },
    gp: String,
    student: Number,
    pp: Number,
    i: Number,
    ii: Number,
    iii: Number,
    iv: Number,
    v: Number,
    total_student: Number,
}, {
    timestamps: true
}
)

let schools = conn.model('school', schoolSchema, 'school')

module.exports = schools;