const mongoose = require('mongoose')
const mongodbUrl = process.env.MONGODB_URL

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=> {
    console.log('Connected to database!')
}).catch(err => {
    console.log(err.message)
})

