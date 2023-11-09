import Instagram from '../Instagram'
import Telegram from '../Telegram'
import Twitter from '../Twitter'
import S from './SocialFixed.styles'
import SocialFixedTypes from './SocialFixed.types'

const SocialFixed = ({ instagramHref }: SocialFixedTypes) => (
  <S.SocialFixed>
    <S.Social>
      <S.Bg />
      <Instagram href={instagramHref} />
      <S.Front />
    </S.Social>

    <S.Social>
      <S.Bg />
      <Telegram href={instagramHref} />
      <S.Front />
    </S.Social>

    <S.Social>
      <S.Bg />
      <Twitter href={instagramHref} />
      <S.Front />
    </S.Social>
  </S.SocialFixed>
)

export default SocialFixed