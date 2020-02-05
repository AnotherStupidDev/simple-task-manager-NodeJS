const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req,res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    
    try { 
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/tasks', auth, async (req,res) => {

    try {
        // Alternative: await req.user.populate('tasks').execPopulate()
        const tasks = await Task.find({owner: req.user._id})
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/tasks/:id', auth, async (req,res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id})

        if(!task) {
            return res.status(404).send("Incorrect user!")
        } 

        res.send(task)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.patch('/tasks/:id', auth, async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed','description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid parameter. Cannot be updated!"})
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})
        
        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/tasks/:id', auth, async (req,res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if(!task) {
            return res.status(404).send()
        }

        console.log('Succesfully deleted task! ' + task)
        res.send(task)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router