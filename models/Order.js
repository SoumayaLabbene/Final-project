const mongoose = require('mongoose')

const { Schema, model } = mongoose

const orderSchema = new Schema({
  totalAmount: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

orderSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'order',
})

orderSchema.set('toObject', { virtuals: true })
orderSchema.set('toJSON', { virtuals: true })

orderSchema.virtual('payment', {
  ref: 'Payment',
  localField: '_id',
  foreignField: 'order',
})

orderSchema.set('toObject', { virtuals: true })
orderSchema.set('toJSON', { virtuals: true })

module.exports = Order = model('Order', orderSchema)
