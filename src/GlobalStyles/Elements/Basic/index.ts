import { createGlobalStyle } from 'styled-components';
import cloudyOtf from '../../../assets/fonts/cloudy.otf'
import cloudyWoff from '../../../assets/fonts/cloudy.woff'
import marioOtf from '../../../assets/fonts/mario.otf'
import marioWoff from '../../../assets/fonts/mario.woff'
import auto from '../../../assets/auto.png'
import logoBg from '../../../assets/logo-bg.png'

const Basic = createGlobalStyle`
  @font-face {
    font-family: 'cloudy';
    src:
      url(${cloudyOtf}) format('opentype'),
      url(${cloudyWoff}) format('woff'); 
  }

  @font-face {
    font-family: 'mario';
    src:
      url(${marioOtf}) format('opentype'),
      url(${marioWoff}) format('woff'); 
  }

  *::selection {
    color: white;
    background-color: var(--color-thrid);
    text-shadow: none;
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
    background-image: url(${logoBg});
    background-repeat: repeat;
    background-color: var(--color-first);
    background-attachment: fixed;
    min-width: 480px;
  }

`

export default Basic