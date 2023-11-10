import GameTitle from '../../components/GameTitle'
import GameHeader from '../../components/GameHeader'
import PlayersTypes from './Players.types'
import S from './Players.styles'
import FixedButton from '../../components/FixedButton'

const Players = ({ title, box, buyCoin, onClickOpenBox }: PlayersTypes) => (
  <>
    <S.Body />
    <S.Players>
      <GameHeader />
      <S.Content>
        <S.Header>
          <GameTitle>{title}</GameTitle>

        </S.Header>

        <S.WrapperFixedButton>
          <FixedButton>{box}</FixedButton>
          <FixedButton>{buyCoin}</FixedButton>
        </S.WrapperFixedButton>
      </S.Content>
    </S.Players>
  </>
)

export default Players