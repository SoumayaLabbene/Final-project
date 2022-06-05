const mongoose = require('mongoose')

const { Schema, model } = mongoose

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: String,
  price: {
    type: Number,
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  payment: {
    type: Schema.Types.ObjectId,
    ref: 'Payment',
  },
})

bookSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'book',
})

bookSchema.set('toObject', { virtuals: true })
bookSchema.set('toJSON', { virtuals: true })

module.exports = Book = model('Book', bookSchema)
