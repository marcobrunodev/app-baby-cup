import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { Button } from '../Button/Button.styles'
import container from '../../GlobalStyles/tools/container'
import pointer from '../../assets/pointer.png'


const Action = styled.a`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: url(${pointer}), pointer;
  text-shadow: 0.4rem 0.4rem 0.2rem black;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.05)
  }
  &:active {
    transform: scale(0.95)
  }
`

const Menu = styled.nav`
  margin-right: auto;
  padding-left: 2rem;
  display: flex;
  gap: 2rem;
`

const PlayLogo = styled.img.attrs({ src: logo, alt: 'Logo' })`
  height: 5rem;
`

const Content = styled.div`
  ${container};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`

const GameHeader = styled.header`
  background-color: var(--color-realy-black);
  
  box-sizing: border-box;
  box-shadow: 0 0.4rem 0.2rem rgba(0,0,0,0.5);

  & > ${Button} {
    transform: scale(0.65);
    filter: grayscale(1);
  }
`

const S = {
  GameHeader,
  Content,
  PlayLogo,
  Menu,
  Action
}

export default S