import TitleTypes from './Title.types'
import S from './Title.styles'

const Title = ({ children }: TitleTypes) => (
  <S.Title>
    <S.Bg />
    <S.Content>{children}</S.Content>
  </S.Title>
)

export default Title