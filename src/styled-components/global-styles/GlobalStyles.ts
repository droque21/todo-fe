import { createGlobalStyle } from "styled-components";
import { fontsFaces } from "./fonts";


export const GlobalStyle = createGlobalStyle`
  ${fontsFaces}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
  }
`