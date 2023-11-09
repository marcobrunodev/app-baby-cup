import styled from 'styled-components'
import { Title } from '../Title/Title.styles'
import graph from '../../assets/graph.png'
import container from '../../GlobalStyles/tools/container'

const Graph = styled.img.attrs({ src: graph })``

const TokenAllocation = styled.section`
  ${container};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 6rem 10rem 4rem;

  & > ${Title} {
    margin-bottom: 3rem;
  }
`

const S = {
  TokenAllocation,
  Graph
}

export default S