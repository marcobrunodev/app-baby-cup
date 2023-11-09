import TelegramTypes from './Telegram.types'
import S from './Telegram.styles'

const Telegram = ({ href }: TelegramTypes) => (
  <S.Telegram href={href}>
    <S.Icon />
  </S.Telegram>
)

export default Telegram