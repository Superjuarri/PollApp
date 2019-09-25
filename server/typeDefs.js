const { gql } = require('apollo-server-express')

const typeDefs = gql`
  scalar Date
  type Query {
    poll(id: ID!): Poll!
    polls: [Poll!]!
  }
  type Mutation {
    createPoll(question: String!, choices: [String!]!, endDate: Date!): Poll!
    addVote(pollId: ID!, choiceId: ID!): Poll!
  }
  type Choice {
    id: ID!
    choice: String!
    voteCount: Int!
  }
  type Poll {
    id: ID!
    question: String!
    choices: [Choice!]!
    startDate: Date!
    endDate: Date!
  }
`
module.exports = typeDefs
