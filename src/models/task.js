const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
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

},  {timestamps:true})


const Task = new mongoose.model('Task', TaskSchema)


module.exports = Task

