import InfoTypes from './Info.types'
import S from './Info.styles'

const Info = ({ title, value }: InfoTypes) => (
  <S.Info>
    <S.Bg />
    <S.Content>
      <S.Value>{value}</S.Value>
      <S.Title>{title}</S.Title>
    </S.Content>
  </S.Info>
)

export default Info