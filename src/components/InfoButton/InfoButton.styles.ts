import styled from 'styled-components'
import infoBg from '../../assets/info-bg.png'
import { Button, Center } from '../Button/Button.styles'

const Content = styled.div`
  position: absolute;
  transform: translateY(-2.5rem);

  & > ${Button} {
    transform: scale(1.2);

    &:hover {
      transform: scale(1.25);
    }
    &:active {
      transform: scale(1.15);
    }

    & > ${Center} {
      width: 18rem
    }
   }
`

const Bg = styled.img.attrs({ src: infoBg })``

const InfoButton = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`

const S = {
  InfoButton,
  Bg,
  Content
}

export default S