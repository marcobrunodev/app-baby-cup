import styled from 'styled-components'
import FixedButtonTypes from './FixedButton.types'
import pointer from '../../assets/pointer.png'

export const FixedButton = styled.button<FixedButtonTypes>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
  border-radius: 5rem;
  box-sizing: border-box;
  padding: 0 2rem;
  border: 0.2rem solid var(--color-realy-black);
  background-color: var(--color-sixth);
  color: white;
  font-family: inherit;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  line-height: 1.1em;
  cursor: url(${pointer}), pointer;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(255,255,255,0.2);
  transition: transform 100ms ease-in-out,
              box-shadow 100ms ease-in-out;

  &:hover {
    box-shadow: 0.4rem 0.4rem 0.2rem rgba(255,255,255,0.2);
    transform: scale(1.05) translateY(-0.5rem);
  }
  &:active {
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(255,255,255,0.2);
    transform: scale(0.95) translateY(0.5rem);
  }
`

const S = {
  FixedButton
}

export default S