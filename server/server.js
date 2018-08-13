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

//goes with shelf comp
app.get('/api/shelves/:id', async (req,res) => {
    const db = req.app.get('db')
    let {id} = req.params
    // console.log('__api/shelves')


    let bins = await db.get_all_bins(id)
    // console.log('bins', bins)

    res.status(200).send(bins)
})

// goes with displayBin component
app.get('/api/bins/:shelfId/displayBin/:binNumber', async (req, res) => {
    const db = req.app.get('db')
    let {shelfId} = req.params
    let {binNumber} = req.params

    let bin = await db.get_bin(shelfId, binNumber)

    res.status(200).send(bin)
})

// goes with displayBin component
app.delete('/api/deleteBin/:id', async (req, res) => {
    const db = req.app.get('db')
    let {id} = req.params

    let deletedBin = await db.delete_bin_by_id(id)
    res.sendStatus(200)
})

// goes with displayBin component
app.put('/api/bin/:id', async (req, res) => {
    const db = req.app.get('db')
    let {id} = req.params
    let {product_name, price, img_url} = req.body
    
    let updatedBin = await db.update_bin_by_id(id, product_name, price, img_url)

    res.sendStatus(200)
}) 

//goes with addBin component
app.post('/api/bins/:shelfId/addBin/:binNum', async (req, res) => {
    const db = req.app.get('db')
    let {shelfId, binNum} = req.params
    let {product_name, price, img_url} = req.body

    let newBin = await db.add_bin(shelfId, binNum, product_name, price, img_url)

    res.sendStatus(200)
})





app.listen(SERVER_PORT, () => {
    console.log(`spellbound on port ${SERVER_PORT}`)
})