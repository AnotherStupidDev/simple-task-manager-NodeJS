const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const passw = "kkkkk"
//     const hashedPas = await bcrypt.hash(passw, 8)
   
//     console.log(passw)
//     console.log(hashedPas)

//     const isMatch = await bcrypt.compare(passw, hashedPas)
//     console.log(isMatch)
// }

// myFunction()