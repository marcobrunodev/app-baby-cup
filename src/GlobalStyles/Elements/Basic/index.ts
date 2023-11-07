import { createGlobalStyle } from 'styled-components';
import cloudyOtf from '../../../assets/fonts/cloudy.otf'
import cloudyWoff from '../../../assets/fonts/cloudy.woff'
import auto from '../../../assets/auto.png'

const Basic = createGlobalStyle`
  @font-face {
    font-family: 'cloudy';
    src:
      url(${cloudyOtf}) format('opentype'),
      url(${cloudyWoff}) format('woff'); 
  }

  :root {
    font-size: 10px;
  }

  html, body {
    cursor: url(${auto}), auto;
    min-height: 100%;
  }

  body {
    font-family: 'cloudy', sans-serif;
    background-color: var(--color-first);
    min-width: 480px;
  }

`

export default Basic