import styled from 'styled-components'
import coreTeamBg from '../../assets/core-team-bg.png'
import container from '../../GlobalStyles/tools/container'

const Name = styled.h2`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.80);
  color: white;
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const Position = styled.h3`
  color: white;
  font-size: 3rem;
  text-shadow: 0.3rem 0.3rem 0 var(--color-fifth),
                  -0.3rem 0.3rem 0 var(--color-fifth),
                  -0.3rem -0.3rem 0 var(--color-fifth),
                  0.3rem -0.3rem 0 var(--color-fifth);
`
const Avatar = styled.img`
  width: 50rem;
  margin-bottom: 0.5rem;
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4.6rem;
`

const Bg = styled.img.attrs({ src: coreTeamBg })``

const Person = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CoreTeam = styled.section`
  ${container};
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;
  padding: 6rem 10rem 8rem;
`

const S = {
  CoreTeam,
  Person,
  Bg,
  Content,
  Avatar,
  Position,
  Name
}

export default S