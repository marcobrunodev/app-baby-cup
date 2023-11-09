import ButtonTypes from './Button.types'
import S from './Button.styles'

const Button = ({ children, as, to }: ButtonTypes) => (
  <S.Button as={as} to={to}>
    <S.Left />
    <S.Center>{children}</S.Center>
    <S.Right />
  </S.Button>
)

export default Button