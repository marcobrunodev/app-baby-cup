import styled, { css } from 'styled-components'
import chest from '../../assets/chest.png'
import close from '../../assets/close.png'
import { PlayButton } from '../PlayButton/PlayButton.styles'
import ModalBuyNftTypes from './ModalBuyNft.types'
import pointer from '../../assets/pointer.png'

const Description = styled.p`
  font-size: 1.6rem;
  color: white;
`

const Price = styled.p`
  color: var(--color-first);
  font-size: 2rem;
`

const Chest = styled.img.attrs({ src: chest })`
  width: 32rem;
`

const Title = styled.h2`
  color: white;
  font-family: 'mario', sans-serif;
  font-size: 3rem;
  letter-spacing: 0.1em;
`

const Close = styled.img.attrs({ src: close })`
  position: absolute;
  background-color: black;
  border-radius: 50%;
  border: 0.2rem solid black;
  top: 0;
  right: 0;
  transform-origin: center;
  transform: translate(50%, -50%);
  cursor: url(${pointer}), pointer;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.1) translate(45%, -45%);
  }
  &:active {
    transform: scale(0.90) translate(55%, -55%);
  }
`

const Card = styled.article`
  --button: 5rem;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 0.2rem solid var(--color-sixth);
  border-radius: 1rem;
  padding: 3rem 2rem calc(var(--button) + 2rem);
  max-width: 380px;
  width: 100%;
  gap: 1rem;

  & > ${PlayButton} {
    position: absolute;
    bottom: 0;
    border-right: none;
    border-left: none;
    border-bottom: none;
    border-radius: 0;
    width: 100%;
    padding: 0;
    height: var(--button);
    font-size: 1.8rem;
    border-radius: 0 0 0.6rem 0.6rem;
    transition: background-color 100ms ease-in-out,
                color 100ms ease-in-out;

    &:hover {
      background-color: var(--color-sixth);
      transform: none;
      color: black;
    }
  }
`

const hasActive = ({ active }: Pick<ModalBuyNftTypes, 'active'>) => active && css`
  transform: scale(1);
  opacity: 1;
  
  transition: transform 400ms ease-in-out,
              opacity 200ms 200ms linear;
`

const ModalBuyNft = styled.div<Pick<ModalBuyNftTypes, 'active'>>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;
  transform-origin: right bottom;
  transform: scale(0);
  transition: transform 200ms 200ms ease-in-out,
              opacity 400ms linear;
  
  opacity: 0;

  ${hasActive};
`

const S = {
  ModalBuyNft,
  Card,
  Title,
  Close,
  Chest,
  Price,
  Description
}

export default S