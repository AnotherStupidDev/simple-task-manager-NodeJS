const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     }, 
//     email: {
//         type: String,
//         required: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Wrong email')
//             }

//         }
//     },
//     password: {
//         type: String,
//         required:true,
//         trim:true,
//         minlength: 7,
//         validate(value) {
//             if (validator.contains("password")) {
//                 throw new Error('Password shouldnt contain "password" word!')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value) {
//             if (value < 0 ) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: "Gogi",
//     email: "zhorik@gmail.com",
//     password: "PASS         ",
//     age: 88,
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log("OOPS! We have an error! " +error.message)
// })

const Tasks = mongoose.model('Tasks', {
    description: {
        type: Boolean,
        required:true,
        trim:true
    },
    completed: {
        type: String,
        default: false,
        trim: true
    }
})

const task = new Tasks({
    completed: true
})

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log("Error! " + error.message)
})