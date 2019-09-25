import Head from 'next/head'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#ffffff'};
`

export default ({ title, backgroundColor, children }) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <Content backgroundColor={backgroundColor}>{children}</Content>
      <Footer />
    </Layout>
  )
}
