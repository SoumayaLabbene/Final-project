const express = require('express')
const router = express.Router()
const {
  getAllBooks,
  getOneBook,
  addBook,
  updateBook,
  deleteBook,
  reviewByBook,
  deleteAll,
} = require('../controllers/bookControllers')
const isAuth = require('../middleware/isAuth')
const isAdmin = require('../middleware/isAdmin')

//GET
router.get('/allbooks', isAuth, getAllBooks)
router.get('/onebook/:id', isAuth, getOneBook)

//POST
router.post('/addbook', isAuth, isAdmin, addBook)

//PUT
router.put('/updatebook/:id', isAuth, isAdmin, updateBook)

//DELETE
router.delete('/deletebook/:id', isAuth, isAdmin, deleteBook)
router.delete('/deleteall', isAuth, isAdmin, deleteAll)

module.exports = router
