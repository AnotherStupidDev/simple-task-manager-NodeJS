const mongoose = require('mongoose')
const validator = require('validator')

const Task = new mongoose.model('Task', {
    description: {
        required:true,
        type: String,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false,
        trim:true
    }

})


module.exports = Task

