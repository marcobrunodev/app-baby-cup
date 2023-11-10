import styled, { css } from 'styled-components'
import PlayButtonTypes from './PlayButton.types'
import pointer from '../../assets/pointer.png'
import auto from '../../assets/auto.png'

const hasDisabled = ({ disabled }: Pick<PlayButtonTypes, 'disabled'>) => disabled && css`
  filter: grayscale(1);
  cursor: url(${auto}), auto;

  &:hover {
    transform: none;
  }
`

export const PlayButton = styled.button<PlayButtonTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  border: none;
  font-family: inherit;
  padding: 1.4rem 3rem 1rem;
  border-radius: 0.4rem;
  border: 0.2rem solid var(--color-sixth);
  cursor: url(${pointer}),pointer;
  transition: transform 100ms ease-in-out;
  background-color: var(--color-realy-black);
  text-transform: uppercase;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }

  ${hasDisabled};
`

const S = {
  PlayButton
}

export default S