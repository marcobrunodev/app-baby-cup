import styled from 'styled-components'
import twitter from '../../assets/twitter.png'
import pointer from '../../assets/pointer.png'

const Icon = styled.img.attrs({ src: twitter, alt: 'Twitter logo' })`
  width: 100%;
`

export const Twitter = styled.a`
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
  Twitter,
  Icon
}

export default S