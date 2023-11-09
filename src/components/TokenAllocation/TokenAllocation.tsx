import TokenAllocationTypes from './TokenAllocation.types'
import S from './TokenAllocation.styles'
import Title from '../Title'
import Button from '../Button'

const TokenAllocation = ({ title, button }: TokenAllocationTypes) => (
  <S.TokenAllocation>
    <Title>{title}</Title>
    <S.Graph />
    <Button>{button}</Button>
  </S.TokenAllocation>
)

export default TokenAllocation