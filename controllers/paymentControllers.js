const payment = require('../models/Payment')
const order = require('../models/Order')

exports.addPayment = async (req, res) => {
  try {
    const newPayment = new payment(req.body)
    await newPayment.save()
    res.status(200).send({ msg: 'Payment added succesfully!', newPayment })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAllPayments = async (req, res) => {
  try {
    const allPayments = await payment.find()
    res.status(200).send({ msg: 'all payments : ', allPayments })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getOnePayment = async (req, res) => {
  try {
    const id = req.params.id
    payment.findById(id).then((payment) => res.status(200).send(payment))
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.updatePayment = async (req, res) => {
  try {
    const editedPayment = await payment.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    res.status(200).send({ msg: 'Payment edited ', editedPayment })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deletePayment = async (req, res) => {
  try {
    const deletedpayment = await payment.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Payment deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}
