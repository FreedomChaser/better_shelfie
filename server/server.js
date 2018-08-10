require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('massive')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const {
   CONNECTION_STRING,
   SERVER_PORT 
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})
// .catch(error=>console.log('server connection error:', error))

app.get('/api/shelves/:id', async (req,res) => {
    const db = req.app.get('db')
    let {id} = req.params
    // console.log('__api/shelves')


    let bins = await db.get_all_bins(id)
    // console.log('bins', bins)

    res.status(200).send(bins)
})

// goes with displayBin component
// app.get('/api/bins/:shelfid/:binNumber', async (req, res) => {
//     const db = req.app.get('db')
//     let {shelfid} = req.params
//     let {binNumber} = req.params

//     let bin = await get_bin(shelfid, binNumber)

//     res.status(200).send(bin)
// })

//goes with addBin component
// app.post()





app.listen(SERVER_PORT, () => {
    console.log(`spellbound on port ${SERVER_PORT}`)
})