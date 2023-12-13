'use client';
import { createGlobalStyle } from 'styled-components';

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
    padding: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
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
  #root, #__next {
    isolation: isolate;
  }

  /* Project specific */

  html {
    --color-primary-59: hsl(12, 88%, 59%);
    --color-primary-78: hsl(9, 100%, 78%);
    --color-primary-96: hsl(13, 100%, 96%);

    --color-secondary-13: hsl(223, 12%, 13%);
    --color-secondary-23: hsl(228, 39%, 23%);
    --color-secondary-63: hsl(227, 12%, 61%);

    --color-gray-55: hsl(0, 0%, 55%);
    --color-gray-98: hsl(0, 0%, 98%);


    --color-white: hsl(0, 0%, 100%);
  }

  body {
    font-family: 'Be Vietnam Pro', sans-serif;
  }

`;

export default GlobalStyles;
