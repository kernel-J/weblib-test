"use strict"

const db = require('./dbconnect')

const createPlayer = async function(data) {
    try {
        const parsedData = JSON.parse(data)
        const query = 'INSERT INTO players (firstname, lastname, player_number)\nVALUES (\'' + parsedData.firstname + '\', \'' + parsedData.lastname + '\', ' + parsedData.player_number + ');'
        const result = await db.query(query)
        return result
    } catch (error) {
        return error
    }
}

const updatePlayer = async function(player_id, newData) {
    try {
        const query = 'UPDATE players\nSET firstname = \'' + newData.firstname + '\', lastname = \'' + newData.lastname + '\', player_number = ' + newData.player_number + '\nWHERE id = ' + player_id
        const result = await db.query(query)
        return result
    } catch (error) {
        return error
    }
}

const deletePlayer = async function(player) {
    try {
        const parsedData = JSON.parse(player)
        console.log(parsedData)
        const query = 'DELETE FROM players\nWHERE id = ' + parsedData.id
        const result = await db.query(query)
        return result
    } catch (error) {
        return error
    }
}

const getAll = async function() {
    try {
        const result = await db.query('SELECT * FROM players')
        return result
    } catch (error) {
        return error
    }
}

const getOne = async function(player_id) {
    try {
        const query = 'SELECT * FROM players\nWHERE id = ' + player_id
        const result = await db.query(query)
        return result
    } catch (error) {
        return error
    }
}

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getAll,
    getOne
}
