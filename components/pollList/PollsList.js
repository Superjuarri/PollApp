import React from 'react'
import styled from 'styled-components'

import PollsListItem from './PollsListItem'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const PollList = styled.ul`
  padding: 0;

  width: 100%;
  min-width: 280px;
  /* max-width: 1000px; */

  display: flex;
  flex-direction: column;
`

export default () => {
  const { loading, error, data } = useQuery(GET_POLLS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const polls = data.polls

  const renderedPostListItems = polls.map(poll => (
    <PollsListItem key={poll.id} poll={poll} />
  ))
  return (
    <PollList>{loading ? <p>Loading...</p> : renderedPostListItems}</PollList>
  )
}

const GET_POLLS = gql`
  {
    polls {
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
