import { withApollo } from '../lib/apollo'
import styled from 'styled-components'

import useWindowSize from '../hooks/useWindowSize'

import Layout from '../components/layout/Layout'
import AsideCard from '../components/layout/AsideCard'
import PollsList from '../components/pollList/PollsList'

const minWidth = '750px'

const ContentWrapper = styled.div`
  width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width: ${({ theme }) => theme.dimensions.contentWidthMax};
  /* height: 100%; */
  display: grid;
  grid-template-areas: 'main';
  grid-template-columns: 100%;
  @media only screen and (min-width: ${minWidth}) {
    grid-template-areas: 'aside main';
    grid-template-columns: minmax(220px, 1fr) minmax(50%, 75%);
    grid-gap: 40px;
  }
`

const Aside = styled.aside`
  display: none;
  grid-area: aside;
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
  position: sticky;
  top: calc(${({ theme }) => theme.dimensions.navbarHeight});
  align-items: center;
  @media only screen and (min-width: ${minWidth}) {
    display: flex;
  }
`

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: ${minWidth}) {
    justify-content: start;
  }
`

const PollsText = styled.h1`
  background-color: #fdfdfd;
  z-index: 10;
`

const IndexPage = () => {
  const { width } = useWindowSize()

  return (
    <Layout title='Pollsite | Home' backgroundColor='#fdfdfd'>
      <ContentWrapper windowWidth={width}>
        <Aside>
          <AsideCard>
            <h1>Kappa</h1>
          </AsideCard>
        </Aside>
        <Main>
          <PollsText>Polls</PollsText>
          <PollsList />
        </Main>
      </ContentWrapper>
    </Layout>
  )
}

export default withApollo(IndexPage)
