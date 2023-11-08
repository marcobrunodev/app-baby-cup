import styled from 'styled-components'
import infoBg from '../../assets/info-bg.png'

const Value = styled.p`
  font-size: 6rem;
  color: white;
  text-align: center;
`

const Title = styled.h3`
  font-size: 4rem;
  text-align: center;
  color: white;
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-2rem);
`

const Bg = styled.img.attrs({ src: infoBg })``

const Info = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const S = {
  Info,
  Bg,
  Content,
  Title,
  Value
}

export default S