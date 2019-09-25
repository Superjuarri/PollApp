require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbCluster = process.env.DB_CLUSTER
const port = process.env.PORT || 3000

const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbCluster}.mongodb.net/test?retryWrites=true&w=majority`

const startServer = async () => {
  const app = express()

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.applyMiddleware({ app, path: '/api' }) // app is from an existing express app

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  app.listen({ port: process.env.PORT }, () =>
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  )
}

startServer()
