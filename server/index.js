"use strict"

const express = require('express')
const bodyParser = require('body-parser')
const {
    getAll,
    getOne,
    createPlayer,
    deletePlayer,
    updatePlayer
} = require('./handlers/dbHandlers')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/all', async (req, res) => {
    const result = await getAll()
    res.send('results' + JSON.stringify(result))
})

app.post('/player', async (req, res) => {
    const player = JSON.parse(JSON.stringify(req.body))
    const result = await getOne(player.id)
    res.send(result)
})

app.post('/create', async (req, res) => {
    const result = await createPlayer(JSON.stringify(req.body))
    res.send(result)
})

app.post('/delete', async (req, res) => {
    const result = await deletePlayer(JSON.stringify(req.body))
    res.send(result)
})

app.post('/update', async (req, res) => {
    const data = JSON.parse(JSON.stringify(req.body))
    const result = await updatePlayer(data.id, data.newData)
    res.send(result)
})

app.listen(3000, function () {
    console.log('hello world from express in docker!');
});
