import styled from 'styled-components'
import instagram from '../../assets/instagram.png'
import pointer from '../../assets/pointer.png'

const Icon = styled.img.attrs({ src: instagram, alt: 'Instagram logo' })``

const Instagram = styled.a`
  cursor: url(${pointer}), pointer;
  border-radius: 50%;
  box-shadow: 0.4rem 0.4rem 0.4rem rgba(0,0,0,0.2);
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`

const S = {
  Instagram,
  Icon
}

export default S