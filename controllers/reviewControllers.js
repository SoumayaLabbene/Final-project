const review = require('../models/Review')

exports.addReview = async (req, res) => {
  try {
    const newReview = new review(req.body)
    await newReview.save()
    res.status(200).send({ msg: 'Review added succesfully!', newReview })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAllReviews = async (req, res) => {
  try {
    const allReviews = await review.find()
    res.status(200).send({ msg: 'all reviews : ', allReviews })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getOneReview = async (req, res) => {
  try {
    const id = req.params.id
    review.findById(id).then((review) => res.status(200).send(review))
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.updateReview = async (req, res) => {
  try {
    const editedReview = await review.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } },
    )
    res.status(200).send({ msg: 'Review edited ', editedReview })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await review.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Review deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.deleteAll = async (req, res) => {
  try {
    const deletedReview = await review.deleteMany()
    res.status(200).send({ msg: 'All reviews deleted ' })
  } catch (err) {
    res.status(500).send(err)
  }
}
