import GameTitle from '../../components/GameTitle'
import GameHeader from '../../components/GameHeader'
import PlayersTypes from './Players.types'
import S from './Players.styles'

const Players = ({ title }: PlayersTypes) => (
  <>
    <S.Body />
    <S.Players>
      <GameHeader />
      <S.Content>
        <GameTitle>{title}</GameTitle>
      </S.Content>
    </S.Players>
  </>
)

export default Players