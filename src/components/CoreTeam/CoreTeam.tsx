import CoreTeamTypes from './CoreTeam.types'
import S from './CoreTeam.styles'
import Title from '../Title'
import Instagram from '../Instagram'

const CoreTeam = ({ title, avatarSrc, avatarAlt, position, name, instagramHref }: CoreTeamTypes) => (
  <S.CoreTeam id="team">
    <Title>{title}</Title>

    <S.Person>
      <S.Bg />
      <S.Content>
        <S.Avatar src={avatarSrc} alt={avatarAlt} />
        <S.Position>{position}</S.Position>
        <S.Name>{name}</S.Name>
        <Instagram href={instagramHref} />
      </S.Content>
    </S.Person>
  </S.CoreTeam>
)

export default CoreTeam