import GameTitle from '../../components/GameTitle'
import GameHeader from '../../components/GameHeader'
import PlayersTypes from './Players.types'
import S from './Players.styles'
import FixedButton from '../../components/FixedButton'
import ModalBuyNft from '../../components/ModalBuyNft'

const Players = ({ title, box, buyCoin, onClickOpenBox, activeModalBuyNft, handleCloseModalBuyNft }: PlayersTypes) => (
  <>
    <S.Body />
    <ModalBuyNft active={activeModalBuyNft} handleClose={handleCloseModalBuyNft} />
    <S.Players>
      <GameHeader />
      <S.Content>
        <S.Header>
          <GameTitle>{title}</GameTitle>
        </S.Header>

        <S.WrapperFixedButton>
          <FixedButton onClick={onClickOpenBox}>{box}</FixedButton>
          <FixedButton>{buyCoin}</FixedButton>
        </S.WrapperFixedButton>
      </S.Content>
    </S.Players>
  </>
)

export default Players