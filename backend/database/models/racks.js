const mongoose = require('mongoose')

const RackSchema = new mongoose.Schema({
    code: {
        type: Number,
        trim: true,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        min: 1,
        max: 99,
        required: true
    },
    isdefault: {
        type: String,
        default: false
    },
    inactive: {
        type: String,
        default: false
    }
})

const Rack = mongoose.model('Rack', RackSchema)

module.exports = Rack