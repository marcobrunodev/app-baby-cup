import PlayHeaderTypes from './PlayHeader.types'
import S from './PlayHeader.styles'
import PlayButton from '../PlayButton'

const PlayHeader = ({ button, links }: PlayHeaderTypes) => (
  <S.PlayHeader>
    <S.Content>
      <S.PlayLogo />

      <S.Menu>
        {links.map(({ href, children }) => <S.Action href={`/game/${href}`}>{children}</S.Action>)}
      </S.Menu>

      <PlayButton>{button}</PlayButton>
    </S.Content>
  </S.PlayHeader>
)

export default PlayHeader