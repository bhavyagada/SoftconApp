const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongoose')
const Rack = require('./database/models/racks')

const app = express()
const port = 3000
app.use(express.json())

// Cross Origin Resource Sharing
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Get all Racks
app.get('/racks', (req, res) => {
    Rack.find({})
        .then(racks => res.send(racks))
        .catch((error) => console.log(error))
})

// Create a Rack
app.post('/racks', (req, res) => {
    (new Rack({'code': req.body.code, 'desc': req.body.desc, 'capacity': req.body.capacity, 'default': req.body.isdefault, 'inactive': req.body.inactive}))
        .save()
        .then((racks) => res.send(racks))
        .catch((error) => console.log(error))
})

// Get a Rack by Id
app.get('/racks/:rackId', (req, res) => {
    Rack.find({ _id: req.params.rackId })
        .then((racks) => res.send(racks))
        .catch((error) => console.log(error))
})

// Update a Rack by Id
app.put('/racks/:rackId', (req, res) => {
    Rack.findByIdAndUpdate({ '_id': req.params.rackId }, { $set: req.body })
        .then((racks) => res.send(racks))
        .catch((error) => console.log(error))
})

// Delete a Rack by Id
app.delete('/racks/:rackId', (req, res) => {
    Rack.findByIdAndDelete(req.params.rackId)
        .then((racks) => res.send(racks))
        .catch((error) => console.log(error))
})

// Server listening to defined Port
app.listen(port, () => {
    console.log(`The Server is Connected to port ${port}`)
})