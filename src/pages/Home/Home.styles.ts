import styled from 'styled-components'
import HomeTypes from './Home.types'
import container from '../../GlobalStyles/tools/container'

const Home = styled.div<HomeTypes>`
  ${container};
  padding-top: var(--header);
  min-height: 100%;
  background-color: var(--color-first);
`

const S = {
  Home
}

export default S