import InfoButtonTypes from './InfoButton.types'
import S from './InfoButton.styles'
import Button from '../Button'

const InfoButton = ({ contentButton }: InfoButtonTypes) => (
  <S.InfoButton>
    <S.Bg />
    <S.Content>
      <Button>{contentButton}</Button>
    </S.Content>
  </S.InfoButton>
)

export default InfoButton