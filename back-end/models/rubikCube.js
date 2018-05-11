const mongoose = require('mongoose')

const rubikCubeSchema = mongoose.Schema({
    dateTime :String,
    time : String
}, { collection: 'rubikCube'})

const rubikCube = module.exports = mongoose.model('rubikCube',rubikCubeSchema);