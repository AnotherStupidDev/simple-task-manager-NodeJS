require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e32de12f3f94d07fc629676').then((task) => {
//     console.log(task + ' Succesfully removed!')
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5e33204a43a4013f3c429847').then((count) => {
    console.log('Succesfully deleted!' + count)
}).catch((error) => {
    console.log('No, shit' + error)
})