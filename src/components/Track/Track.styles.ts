import styled from 'styled-components'
import TrackTypes from './Track.types'

const Track = styled.p<TrackTypes>`
  background-color: var(--color-second);
  color: white;
  font-size: 3.5rem;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`

const S = {
  Track
}

export default S