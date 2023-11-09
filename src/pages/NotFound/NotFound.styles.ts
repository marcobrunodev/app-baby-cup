import styled from 'styled-components'
import container from '../../GlobalStyles/tools/container'
import player from '../../assets/luffy-ball.png'

const Player = styled.img.attrs({ src: player })`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40vh;
`

const NotFound = styled.div`
  ${container};
  box-sizing: border-box;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`

const S = {
  NotFound,
  Player
}

export default S