import styled from 'styled-components'
import GameTitleTypes from './GameTitle.types'

const GameTitle = styled.h1<GameTitleTypes>`
  font-size: 3rem;
  letter-spacing: 0.2rem;
  font-family: 'mario', sans-serif;
  color: white;
`

const S = {
  GameTitle
}

export default S