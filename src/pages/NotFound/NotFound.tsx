import Title from '../../components/Title'
import NotFoundTypes from './NotFound.types'
import S from './NotFound.styles'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const NotFound = ({ title, home, play }: NotFoundTypes) => (
  <S.NotFound>
    <Title>{title}</Title>

    <Button as={Link} to='/'>{home}</Button>
    <Button as={Link} to='/play'>{play}</Button>

    <S.Player />
  </S.NotFound>
)

export default NotFound