import styled from 'styled-components'
import container from '../../GlobalStyles/tools/container'

const InfosCoin = styled.div`
  ${container};
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`

const Home = styled.div`
  ${container};
  padding-top: var(--header);
  min-height: 100%;
  background-color: var(--color-first);
`

const S = {
  Home,
  InfosCoin
}

export default S