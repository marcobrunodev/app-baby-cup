import styled from 'styled-components'
import { Instagram } from '../Instagram/Instagram.styles'
import front from '../../assets/social-front.png'
import bg from '../../assets/social-bg.png'
import { Telegram } from '../Telegram/Telegram.styles'
import { Twitter } from '../Twitter/Twitter.styles'

const Front = styled.img.attrs({ src: front })`
  position: absolute;
`

const Bg = styled.img.attrs({ src: bg })`
  position: absolute;
`

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transform: scale(0.8);

  & ${Instagram}, ${Telegram}, ${Twitter} {
    position: relative;
    box-shadow: none;
    transform: translateY(-0.8rem) translateX(0.5rem) scale(0.95);

    &:hover {
      transform: translateY(-3.6rem) translateX(0.5rem);
    }
    &:active {
      transform: translateY(-1.5rem) translateX(0.5rem) scale(0.9);
    }
  }
`

const SocialFixed = styled.aside`
  position: fixed;
  left: 4rem;
  top: 50vh;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;
`

const S = {
  SocialFixed,
  Social,
  Bg,
  Front
}

export default S