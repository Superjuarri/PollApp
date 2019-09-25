import Link from 'next/link'

import styled from 'styled-components'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import parseISO from 'date-fns/parseISO'

import useTime from '../../hooks/useTime'
import IndicatorDot from './IndicatorDot'

const PollListItem = styled.li`
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0 30px;

  cursor: pointer;
`

const Question = styled.a`
  color: ${({ theme }) => theme.colors.fontDark};
  font-weight: ${({ theme }) => theme.font.weightBold};
  align-self: center;
  justify-self: end;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const TimeDiv = styled.div`
  display: flex;
  flex-direction: row;

  font-weight: ${({ theme }) => theme.font.weightLight};
  white-space: nowrap;

  align-items: center;

  p:nth-child(1) {
    margin-right: 10px;
  }
`

const IsCompleted = styled.p`
  position: relative;

  margin-left: 20px;
  text-align: right;
`

export default ({ poll }) => {
  const currentTime = useTime(new Date())

  const isCompleted = poll.endDate < currentTime.toISOString() ? true : false

  return (
    <Link href={`/poll/[id]`} as={`/poll/${poll.id}`}>
      <PollListItem>
        <Question>{`${poll.question}`}</Question>

        <TimeDiv>
          <IsCompleted>
            {isCompleted
              ? 'Ended'
              : formatDistanceToNow(parseISO(poll.endDate))}
          </IsCompleted>
          <IndicatorDot completed={isCompleted} />
        </TimeDiv>
      </PollListItem>
    </Link>
  )
}
