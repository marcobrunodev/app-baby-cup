import styled from 'styled-components'
import left from '../../assets/btn-left.png'
import right from '../../assets/btn-right.png'
import center from '../../assets/btn-bg.png'
import pointer from '../../assets/pointer.png'

const Center = styled.p`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: url(${center}) repeat-x;
  height: 8.2rem;
  margin-left: -0.2rem;
  padding: 0 1rem 0.2rem;
  font-family: 'cloudy', sans-serif;
  font-size: 2rem;
  color: white;
  text-shadow:  0px 4px 4px rgba(0, 0, 0, 0.50);
`

const Right = styled.img.attrs({ src: right })`
  margin-left: -0.2rem;
`

const Left = styled.img.attrs({ src: left })`
`

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: url(${pointer}), pointer;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
  border-radius: 4rem;
  transition: transform 200ms ease-in-out,
              filter 200ms ease-in-out,
              box-shadow 200ms ease-in-out;
  

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.5);
  }

  &:active {
    transform: scale(0.98);
    filter: brightness(1);
    box-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  }
`

const S = {
  Button,
  Left,
  Right,
  Center
}

export default S