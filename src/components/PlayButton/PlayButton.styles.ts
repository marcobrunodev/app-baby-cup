import styled from 'styled-components'
import PlayButtonTypes from './PlayButton.types'
import pointer from '../../assets/pointer.png'

const PlayButton = styled.button<PlayButtonTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  border: none;
  font-family: inherit;
  padding: 1.4rem 3rem 1rem;
  border-radius: 0.4rem;
  border: 0.2rem solid var(--color-sixth);
  cursor: url(${pointer}),pointer;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`

const S = {
  PlayButton
}

export default S