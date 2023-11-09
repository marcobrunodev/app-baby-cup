import InstagramTypes from './Instagram.types'
import S from './Instagram.styles'

const Instagram = ({ href }: InstagramTypes) => (
  <S.Instagram href={href}>
    <S.Icon />
  </S.Instagram>
)

export default Instagram