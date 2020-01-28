// CRUD - create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useUnifiedTopology: true, useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    } 

    console.log('Connected correctly!')
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Zhorik',
    //     age: '27'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany ([
    //     {  
    //         name: 'Jen',
    //         age:28
    //     }, {
    //         name: 'Gogi',
    //         age: 33
    //     }
    // ], (error,result) => {
    //     if (error) {
    //         console.log('Unable to insert documents')
    //     }

    //     console.log
    // })
    
    db.collection('tasks').insertMany([
        {
            description: 'Uchitsya kagdii den',
            completed: true
        }, {
            description:'Nuhat koksik',
            completed: false
        }, {
            description: 'Bahnut gardosa',
            completed: false
        }
    ], (error,result) => {
        if (error) {
            console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })
})

