import styled, { createGlobalStyle } from 'styled-components'
import container from '../../GlobalStyles/tools/container'

const Body = createGlobalStyle`
  body {
    background-color: var(--color-realy-black);
  }
`
const Content = styled.div`
  ${container};
  box-sizing: border-box;
  padding: 4rem;
`

const Players = styled.div``

const S = {
  Body,
  Players,
  Content
}

export default S