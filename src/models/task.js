const mongoose = require('mongoose')


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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }

})


module.exports = Task

