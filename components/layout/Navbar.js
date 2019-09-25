import Link from 'next/link'
import styled from 'styled-components'

const Navbar = styled.div`
  z-index: 900;
  flex-shrink: 0;

  position: sticky;
  top: 0;

  width: 100%;
  height: ${({ theme }) => theme.dimensions.navbarHeight};

  display: flex;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0 5px 10px 0 rgba(0, 64, 128, 0.05);
`

const Content = styled.div`
  position: relative;

  display: flex;

  width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width: ${({ theme }) => theme.dimensions.contentWidthMax};

  align-items: center;
`

const Title = styled.h1`
  cursor: pointer;
`

const Nav = styled.nav``

export default () => {
  return (
    <Navbar>
      <Content>
        <Link href={`/`}>
          <Title>Kappa</Title>
        </Link>

        <Nav></Nav>
      </Content>
    </Navbar>
  )
}
