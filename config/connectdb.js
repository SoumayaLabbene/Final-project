const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to the database')
  } catch (err) {
    console.log('Error!', err)
  }
}

module.exports = connectDB
