
const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    countries: {}
});

module.exports = mongoose.model('Statmod', stationSchema)