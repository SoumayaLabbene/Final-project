const express = require('express')
const router = express.Router()
const {
  getAllOrders,
  getOneOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  deleteAll,
} = require('../controllers/orderControllers')
const isAdmin = require('../middleware/isAdmin')
const isAuth = require('../middleware/isAuth')

//GET
router.get('/allorders', isAuth, isAdmin, getAllOrders)
router.get('/oneorder/:id', isAuth, getOneOrder)

//POST
router.post('/addorder', isAuth, addOrder)

//PUT
router.put('/updateorder/:id', isAuth, updateOrder)

//DELETE
router.delete('/deleteorder/:id', isAuth, deleteOrder)
router.delete('/deleteall', isAuth, isAdmin, deleteAll)

module.exports = router
