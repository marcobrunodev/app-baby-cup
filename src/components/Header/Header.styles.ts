import styled from 'styled-components'
import container from '../../GlobalStyles/tools/container'
import pointer from '../../assets/pointer.png'

const Action = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.60);
  text-transform: uppercase;
  cursor: url(${pointer}), pointer;
  transition: 100ms transform ease-in-out,
              100ms text-shadow ease-in-out;

  &:hover {
    transform: scale(1.02);
    text-shadow: 0 4px 5px rgba(0, 0, 0, 0.60);
  }

  &:active {
    transform: scale(0.98);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.60);
  }
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