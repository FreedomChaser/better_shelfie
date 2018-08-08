require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('axios')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const {
   CONNECTION_STRING,
   SERVER_PORT 
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.get('/api/shelves:shelfid', async (req,res) => {
    const db = req.app.get('db')
    let {shelfid} = req.params

    let bins = await get_all_bins(shelfid)

    res.status(200).send(bins)
})





let SERVER_PORT = 4002
app.listen(SERVER_PORT, () => {
    console.log(`spellbound on port ${SERVER_PORT}`)
})