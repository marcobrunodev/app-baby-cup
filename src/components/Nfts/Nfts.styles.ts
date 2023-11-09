import styled from 'styled-components'
import container from '../../GlobalStyles/tools/container'
import { Center } from '../Button/Button.styles'
import { Title } from '../Title/Title.styles'

const Nft = styled.img`
  max-width: 30rem;
`

const WrapNft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`

const Nfts = styled.section`
  ${container};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 8rem 10rem;

  & > ${Title} {
    margin-bottom: 3rem;
  }

  & ${Center} {
    width: 20rem;
  }
`

const S = {
  Nfts,
  WrapNft,
  Nft
}

export default S