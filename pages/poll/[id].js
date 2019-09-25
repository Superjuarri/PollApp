import { useRouter } from 'next/router'

import { withApollo } from '../../lib/apollo'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Layout from '../../components/layout/Layout'

const GET_POLL = gql`
  query($id: ID!) {
    poll(id: $id) {
      id
      question
      choices {
        id
        choice
        voteCount
      }
      startDate
      endDate
    }
  }
`

const Poll = () => {
  const router = useRouter()

  const { loading, error, data } = useQuery(GET_POLL, {
    variables: { id: router.query.id }
  })
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const poll = data.poll

  const renderChoices = poll.choices.map((choice, index) => (
    <li key={index}>{choice.choice}</li>
  ))

  const siteTitle = loading ? 'Loading...' : poll.question

  return (
    <Layout title={`Pollsite | ${siteTitle}`}>
      <h2>{poll.question}</h2>
      <h2>{poll.id}</h2>
      <p>This be a Poll</p>
      <ul>{renderChoices}</ul>
    </Layout>
  )
}

export default withApollo(Poll)
