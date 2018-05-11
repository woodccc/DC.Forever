const mongoose = require('mongoose')

const rubikCubeSchema = mongoose.Schema({
    dateTime :String,
    time : Number
}, { collection: 'rubikCube'})

const rubikCube = module.exports = mongoose.model('rubikCube',rubikCubeSchema);