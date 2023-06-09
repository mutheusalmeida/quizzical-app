import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    font-size: 100%;
  }

  html, body, [data-js="root"] {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;

    ${({ theme }) => css`
      color: ${theme.colors.blue};
      background-color: ${theme.colors.gray100};
    `}
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  [data-js="root"] {
    isolation: isolate;
  }
`

export default GlobalStyles
