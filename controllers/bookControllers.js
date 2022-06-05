const Book = require('../models/Book')

exports.addBook = async (req, res) => {
  try {
    const findBook = await Book.findOne({ name: req.body.name })
    if (findBook) {
      return res.status(400).send({ msg: 'Book already exists!', findBook })
    }
    const newBook = new Book(req.body)
    await newBook.save()
    res.status(200).send({ msg: 'Book added succesfully!', newBook })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find().populate('reviews')
    res.status(200).send({ msg: 'all books : ', allBooks })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getOneBook = async (req, res) => {
  try {
    const id = req.params.id
    Book.findById(id)
      .populate({ path: 'reviews' })
      .then((book) => res.status(200).send(book))
    console.log('ok')
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.updateBook = async (req, res) => {
  try {
    const editedBook = await Book.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    res.status(200).send({ msg: 'Book edited ', editedBook })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteBook = async (req, res) => {
  try {
    const deletedbook = await Book.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Book deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteAll = async (req, res) => {
  try {
    const deletedbook = await Book.deleteMany()
    res.status(200).send({ msg: 'All books deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}
