import styled from 'styled-components'
import titleBg from '../../assets/title-bg.png'

const Content = styled.span`
  position: absolute;
  font-size: 4rem;
  text-align: center;
  font-family: 'mario', sans-serif;
  text-transform: uppercase;
  color: white;
`

const Bg = styled.img.attrs({ src: titleBg })``

const Title = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const S = {
  Title,
  Bg,
  Content
}

export default S