import S from './Header.styles'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => (
  <S.Header>
    <S.Container>
      <Logo />

      <S.Menu>
        <S.Action href="#nft">NFT</S.Action>
        <S.Action href="#whitepaper">Whitepaper</S.Action>
        <S.Action href="#team">Team</S.Action>
        <S.Action href="#contact">Contact</S.Action>
      </S.Menu>

      <Button>
        Play Game
      </Button>
    </S.Container>
  </S.Header>
)

export default Header