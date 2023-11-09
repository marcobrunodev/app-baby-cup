import styled from 'styled-components'
import { Title } from '../Title/Title.styles'
import graph from '../../assets/graph.png'
import { Button, Center } from '../Button/Button.styles'
import container from '../../GlobalStyles/tools/container'

const Graph = styled.img.attrs({ src: graph })``

const TokenAllocation = styled.section`
  ${container};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem 10rem;

  & > ${Title} {
    margin-bottom: 3rem;
  }

  & > ${Button} {
    transform: scale(1.1);

    &:hover {
      transform: scale(1.15);
    }
    &:active {
      transform: scale(1.05);
    }

    & > ${Center} {
      width: 18rem;
    }
  }
`

const S = {
  TokenAllocation,
  Graph
}

export default S