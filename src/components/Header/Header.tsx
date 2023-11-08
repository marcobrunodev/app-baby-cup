import S from './Header.styles'
import Logo from '../Logo'
import Button from '../Button'
import HeaderTypes from './Header.types'

const Header = ({ links, playGame }: HeaderTypes) => (
  <S.Header>
    <S.Container>
      <Logo />

      <S.Menu>
        {links.map(({ href, children }) => <S.Action href={href}>{children}</S.Action>)}
      </S.Menu>

      <Button>
        {playGame}
      </Button>
    </S.Container>
  </S.Header>
)

export default Header