import WhatIsTypes from './WhatIs.types'
import S from './WhatIs.styles'
import Title from '../Title'
import Text from '../Text'

const WhatIs = ({ title, description }: WhatIsTypes) => (
  <S.WhatIs>
    <S.Left />
    <S.Right>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </S.Right>
  </S.WhatIs>
)

export default WhatIs