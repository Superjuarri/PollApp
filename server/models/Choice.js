const mongoose = require('mongoose')

const Choice = mongoose.model('Choice', {
  choice: String,
  voteCount: Number
})

const ChoiceSchema = mongoose.model('Choice').schema

module.exports = { Choice, ChoiceSchema }
