const express = require('express')
const { format } = require('express/lib/response')
const router = express.Router()
const {
  getAllPayments,
  getOnePayment,
  addPayment,
  updatePayment,
  deletePayment,
} = require('../controllers/paymentControllers')
const isAuth = require('../middleware/isAuth')
const isAdmin = require('../middleware/isAdmin')

//GET
router.get('/allpayments', isAuth, isAdmin, getAllPayments)
router.get('/onepayment/:id', isAuth, getOnePayment)

//POST
router.post('/addpayment', isAuth, addPayment)

//PUT
router.put('/updatepayment/:id', isAuth, updatePayment)

//DELETE
router.delete('/deletepayment/:id', isAuth, deletePayment)

module.exports = router
