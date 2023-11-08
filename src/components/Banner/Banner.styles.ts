import styled from 'styled-components'
import banner from '../../assets/banner.png'
import container from '../../GlobalStyles/tools/container'
import bannerTitle from '../../assets/bannerTitleEn.png'

const Title = styled.img.attrs({ src: bannerTitle })``

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

const Pitch = styled.img.attrs({ src: banner })`
  width: 100%;
`

const Banner = styled.section`
  ${container};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const S = {
  Banner,
  Pitch,
  Content,
  Title
}

export default S