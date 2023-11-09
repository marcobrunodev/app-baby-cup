import styled from 'styled-components'
import container from '../../GlobalStyles/tools/container'
import { Center } from '../Button/Button.styles'

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 8rem 10rem;

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