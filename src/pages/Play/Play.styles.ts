import styled, { createGlobalStyle } from 'styled-components'
import PlayTypes from './Play.types'

const Body = createGlobalStyle`
  body {
    background-color: var(--color-realy-black);
  }
`

const Play = styled.div<PlayTypes>``

const S = {
  Play,
  Body
}

export default S