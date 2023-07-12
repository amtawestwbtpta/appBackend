const mongoose = require('mongoose');
const conn = require('../config/db');

let questionRateSchema = new mongoose.Schema({
    id: Number,
    pp_rate: Number,
    i_rate: Number,
    ii_rate: Number,
    iii_rate: Number,
    iv_rate: Number,
    v_rate: Number,
}, {
    timestamps: true
}
)

let question_rates = conn.model('question_rate', questionRateSchema, 'question_rate')

module.exports = question_rates;