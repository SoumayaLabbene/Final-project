const mongoose = require('mongoose')

const { Schema, model } = mongoose

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
})

module.exports = Payment = model('Payment', paymentSchema)
