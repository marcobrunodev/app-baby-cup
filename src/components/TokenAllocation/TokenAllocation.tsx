import TokenAllocationTypes from './TokenAllocation.types'
import S from './TokenAllocation.styles'
import Title from '../Title'

const TokenAllocation = ({ title }: TokenAllocationTypes) => (
  <S.TokenAllocation>
    <Title>{title}</Title>
    <S.Graph />
  </S.TokenAllocation>
)

export default TokenAllocation