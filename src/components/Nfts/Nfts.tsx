import NftsTypes from './Nfts.types'
import Title from '../Title'
import S from './Nfts.styles'
import Button from '../Button'

const Nfts = ({ title, nfts, button }: NftsTypes) => (
  <S.Nfts>
    <Title>{title}</Title>

    <S.WrapNft>
      {nfts.map(({ src, alt }) => <S.Nft src={src} alt={alt} />)}
    </S.WrapNft>

    <Button>{button}</Button>
  </S.Nfts>
)

export default Nfts