const mongoose = require('mongoose')

const { Schema, model } = mongoose

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
})

module.exports = Review = model('Review', reviewSchema)
