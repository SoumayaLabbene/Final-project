const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://soumaya:youssef04@cluster0.thra8.mongodb.net/finalprojectdb?retryWrites=true&w=majority',
    )
    console.log('Connected to the database')
  } catch (err) {
    console.log('Error!', err)
  }
}

module.exports = connectDB
