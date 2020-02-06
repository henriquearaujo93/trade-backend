const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    paper: String,
    entryDate: String,
    endDate: String,
    openDays: String,
    entryValue: String,
    exitValue: String,
    diference: String,
    madeProfit: String,
});

module.exports = mongoose.model('Trade', TradeSchema);