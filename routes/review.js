const express = require('express')
const router = express.Router()
const {
  getAllReviews,
  getOneReview,
  addReview,
  updateReview,
  deleteReview,
  deleteAll,
  bookByReview,
} = require('../controllers/reviewControllers')
const isAuth = require('../middleware/isAuth')
const isAdmin = require('../middleware/isAdmin')

//GET
router.get('/allreviews', isAuth, isAdmin, getAllReviews)
router.get('/onereview/:id', isAuth, getOneReview)

//POST
router.post('/addreview', isAuth, addReview)

//PUT
router.put('/updatereview/:id', isAuth, updateReview)

//DELETE
router.delete('/deletereview/:id', isAuth, deleteReview)
router.delete('/deleteall', isAdmin, deleteAll)

module.exports = router
