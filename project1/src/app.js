const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())



app.post("/create-post", async (req,res)=> {
    console.log(req.body)
})

module.exports = app

