import ModalBuyNftTypes from './ModalBuyNft.types'
import S from './ModalBuyNft.styles'
import PlayButton from '../PlayButton'

const ModalBuyNft = ({ title, price, description, button, active, handleClose }: ModalBuyNftTypes) => (
  <S.ModalBuyNft active={active}>
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Close onClick={handleClose} />
      <S.Chest />
      <S.Price>{price}</S.Price>
      <S.Description>{description}</S.Description>
      <PlayButton>{button}</PlayButton>
    </S.Card>
  </S.ModalBuyNft>
)

export default ModalBuyNft