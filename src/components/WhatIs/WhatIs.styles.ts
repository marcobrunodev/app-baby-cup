import styled from 'styled-components'
import luffy from '../../assets/luffy-ball.png'
import container from '../../GlobalStyles/tools/container'

const Left = styled.img.attrs({ src: luffy })``

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const WhatIs = styled.section`
  ${container};
  box-sizing: border-box;
  padding: 8rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`

const S = {
  WhatIs,
  Right,
  Left
}

export default S