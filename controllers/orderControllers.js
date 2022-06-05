const order = require('../models/Order')

exports.addOrder = async (req, res) => {
  try {
    const newOrder = new order(req.body)
    await newOrder.save()
    res.status(200).send({ msg: 'Order added succesfully!', newOrder })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await order.find().populate('books')
    res.status(200).send({ msg: 'all orders : ', allOrders })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getOneOrder = async (req, res) => {
  try {
    const id = req.params.id
    order.findById(id).then((order) => res.status(200).send(order))
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.updateOrder = async (req, res) => {
  try {
    const editedOrder = await order.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    res.status(200).send({ msg: 'Order edited ', editedOrder })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteOrder = async (req, res) => {
  try {
    const deletedorder = await order.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Order deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteAll = async (req, res) => {
  try {
    const deletedorder = await order.deleteMany()
    res.status(200).send({ msg: 'All orders deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}
