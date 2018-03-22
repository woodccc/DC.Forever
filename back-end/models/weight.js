const mongoose = require('mongoose')

const weightSchema = mongoose.Schema({
    tag :String,
    date : String,
    weight : String
}, { collection: 'weight'})

const weight = module.exports = mongoose.model('weight',weightSchema);