import styled, { createGlobalStyle } from 'styled-components'
import container from '../../GlobalStyles/tools/container'
import { FixedButton } from '../../components/FixedButton/FixedButton.styles'

const Body = createGlobalStyle`
  body {
    background-color: var(--color-realy-black);
  }
`

const WrapperFixedButton = styled.div`
  ${container};
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 2rem 6rem;
  gap: 2rem;

  & ${FixedButton} {
    position: relative;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  ${container};
  box-sizing: border-box;
  padding: 4rem;
  min-height: 100%;
`

const Players = styled.div``

const S = {
  Body,
  Players,
  Content,
  Header,
  WrapperFixedButton
}

export default S