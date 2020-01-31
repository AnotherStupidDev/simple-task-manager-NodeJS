// CRUD - create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID, below is an equal, destructured version 

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)

// console.log(id.toHexString().length)


MongoClient.connect(connectionURL,{ useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log(error.message)
    } 

    console.log('Connected correctly!')
    const db = client.db(databaseName)

    // const updatePromise = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error)=> {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: "Bahnut gardosa"
    }). then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
 })

