import styled from 'styled-components'

const CompletedIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ completed }) => (completed ? '#ec547a' : '#5bceae')};
  align-self: center;
`

export default ({ completed }) => {
  return <CompletedIndicator completed={completed} />
}
