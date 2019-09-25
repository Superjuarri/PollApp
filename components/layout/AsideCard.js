import styled from 'styled-components'

const AsideCard = styled.div`
  width: 100%;
  /* height: 75%; */
  max-height: 500px;

  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  border-radius: 5px;
`

export default ({ children }) => {
  return <AsideCard>{children}</AsideCard>
}
