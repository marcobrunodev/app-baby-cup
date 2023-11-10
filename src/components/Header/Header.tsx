import { Link as LinkScroll } from 'react-scroll'
import Logo from '../Logo'
import Button from '../Button'
import HeaderTypes from './Header.types'
import S from './Header.styles'
import { Link } from 'react-router-dom'

const Header = ({ links, playGame }: HeaderTypes) => (
  <S.Header>
    <S.Container>
      <Logo />

      <S.Menu>
        {links.map(({ href, children }) => (
          <LinkScroll to={href} smooth={true} offset={-70}>
            <S.Action href={`#${href}`} > {children}</S.Action>
          </LinkScroll>
        ))}
      </S.Menu>

      <Button as={Link} to='/game/players'>
        {playGame}
      </Button>
    </S.Container>
  </S.Header >
)

export default Header