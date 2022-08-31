const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema(
    {
    "id":{},
    "title": {type: String},
    "description": {type: String},
    "year": {type: Number},
    "quantity": {type: Number},
    "imageURL": {type: String}
  })

  module.exports = mongoose.model('Books', bookSchema)
