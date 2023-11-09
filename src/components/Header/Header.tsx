import { Link } from 'react-scroll'
import Logo from '../Logo'
import Button from '../Button'
import HeaderTypes from './Header.types'
import S from './Header.styles'

const Header = ({ links, playGame }: HeaderTypes) => (
  <S.Header>
    <S.Container>
      <Logo />

      <S.Menu>
        {links.map(({ href, children }) => (
          <Link to={href} smooth={true} offset={-70}>
            <S.Action href={`#${href}`} > {children}</S.Action>
          </Link>
        ))}
      </S.Menu>

      <Button>
        {playGame}
      </Button>
    </S.Container>
  </S.Header >
)

export default Header