const mongoose = require('mongoose')

const { ChoiceSchema } = require('./Choice')

const maxCharacterCount = 140

const Poll = mongoose.model('Poll', {
  question: {
    type: String,
    validate: {
      validator: input => input.length <= maxCharacterCount,
      message: props =>
        `${props.value} is not a valid question! Maximum ${maxCharacterCount} characters allowed.`
    }
  },
  choices: {
    type: [ChoiceSchema],
    validate: {
      validator: input =>
        input.length >= 2 &&
        input.every(item => item.choice.length <= maxCharacterCount),
      message: props =>
        `${props.value} is not a valid choice! Minimum two choices are required. Maximum choice character count ${maxCharacterCount}.`
    }
  },
  startDate: Date,
  endDate: {
    type: Date,
    validate: {
      validator: input => input > new Date(Date.now()),
      message: props =>
        `${props.value} is not a valid date! End date can not be before current date.`
    }
  }
})

module.exports = { Poll }
