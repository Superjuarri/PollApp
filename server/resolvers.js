const { GraphQLScalarType } = require('graphql')

const { Poll } = require('./models/Poll')
const { Choice } = require('./models/Choice')

const resolvers = {
  // Date Scalar
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'A date and time, represented as an ISO-8601 string',
    serialize: value => value.toISOString(),
    parseValue: value => new Date(value),
    parseLiteral: ast => new Date(ast.value)
  }),

  Query: {
    poll: async (_, { id }) => await Poll.findById(id),
    polls: async () => await Poll.find()
  },
  Mutation: {
    createPoll: async (_, { question, choices, endDate }) => {
      const poll = new Poll({
        question,
        choices: choices.map(choice => new Choice({ choice, voteCount: 0 })),
        startDate: new Date(Date.now()).toISOString(),
        endDate
      })
      await poll.save()
      return poll
    },
    addVote: async (_, { pollId, choiceId }) => {
      const poll = await Poll.findById(pollId)
      console.log(poll)

      new Date(Date.now()).toISOString() < poll.endDate.toISOString() &&
        (await Poll.updateOne(
          { _id: pollId, 'choices._id': choiceId },
          { $inc: { 'choices.$.voteCount': 1 } }
        ))

      return Poll.findById(pollId)
    }
  }
}

module.exports = resolvers
