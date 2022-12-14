const books = require('express').Router()
const Book = require('../models/books.js')
const cors = require('cors')

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

books.get('/', (req, res) => {
    res.send('get books route')
    // db.Books.find()
    // .then((books) => {
    //     res.render("books/index", { books })
    // })
    // .catch((err) => {
    //     res.render("error404")
    // })
})

books.get('/:id', (req, res) => {
    Book.findById(
        req.params.id
    ).then(foundBook => {
        res.send(foundBook)
    })
})

books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/books/${req.params.id}`)
    })
})

books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(book => {
        res.redirect('/books', { book })
    })
})

books.post('/', (req, res) => {
    Book.create(req.body)
    .then(() => {
        res.redirect('/books')
    })
})

module.exports = books

