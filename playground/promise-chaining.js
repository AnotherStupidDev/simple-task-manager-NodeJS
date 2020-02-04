require('../src/db/mongoose')
const  User = require('../src/models/user')

//5e32e2a068240d3330827249

// User.findByIdAndUpdate("5e32e2a068240d3330827249", {age: 4}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 4})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e32e2a068240d3330827249', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})