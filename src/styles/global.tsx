import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    background: #f5f5f5ec;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
