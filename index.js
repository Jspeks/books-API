const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use('/books', require('./controllers/books'))

app.listen(process.env.PORT)