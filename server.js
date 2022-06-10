const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/connectdb')
const routerBook = require('./routes/book')
const routerReview = require('./routes/review')
const routerOrder = require('./routes/order')
const routerPayment = require('./routes/payment')
const routerUser = require('./routes/user')

app.use(express.json())
app.use(cors())

connectDB()
app.use('/books', routerBook)
app.use('/reviews', routerReview)
app.use('/orders', routerOrder)
app.use('/payments', routerPayment)
app.use('/users', routerUser)

app.listen(process.env.PORT || 5000, (err) =>
  err
    ? console.log('Error!', err)
    : console.log(`The server is running on port: ${process.env.PORT}`),
)
