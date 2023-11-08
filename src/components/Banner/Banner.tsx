import BannerTypes from './Banner.types'
import Button from '../Button'
import S from './Banner.styles'

const Banner = ({ buyCoin, whitepaper }: BannerTypes) => (
  <S.Banner>
    <S.Pitch />
    <S.Content>
      <S.Title />
      <Button>{buyCoin}</Button>
      <Button>{whitepaper}</Button>
    </S.Content>
  </S.Banner>
)

export default Banner