import styled from 'styled-components'
import container from '../../GlobalStyles/tools/container'

const Action = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.60);
  text-transform: uppercase;
  
`

const Menu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  padding-right: 3rem;
  gap: 3rem;
`

const Container = styled.div`
  ${container};
  box-sizing: border-box;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = styled.header`
  box-sizing: border-box;
  width: 100vw;
  box-shadow: 0px 5px 5px 0px rgba(146, 174, 54, 0.70);
  position: fixed;
`

const S = {
  Header,
  Container,
  Menu,
  Action
}

export default S