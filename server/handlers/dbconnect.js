"use strict"

const pgp = require('pg-promise')()

module.exports = pgp('postgres://weblib:football@db:5432/players')
