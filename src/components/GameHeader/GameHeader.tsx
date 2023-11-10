import GameHeaderTypes from './GameHeader.types'
import S from './GameHeader.styles'
import PlayButton from '../PlayButton'

const GameHeader = ({ button, links, onClick }: GameHeaderTypes) => (
  <S.GameHeader>
    <S.Content>
      <S.PlayLogo />

      <S.Menu>
        {links.map(({ href, children }) => <S.Action href={`/game/${href}`}>{children}</S.Action>)}
      </S.Menu>

      <PlayButton onClick={onClick}>{button}</PlayButton>
    </S.Content>
  </S.GameHeader>
)

export default GameHeader