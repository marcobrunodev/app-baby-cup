import ButtonTypes from './Button.types'
import S from './Button.styles'

const Button = ({ children }: ButtonTypes) => (
  <S.Button>
    <S.Left />
    <S.Center>{children}</S.Center>
    <S.Right />
  </S.Button>
)

export default Button