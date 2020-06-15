import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { fontFamily, scrollbarSize } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
    width: ${scrollbarSize};
    height: ${scrollbarSize};
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(180, 178, 183, 0.3);
    border: 1px solid rgba(180, 178, 183, 0.3);
    border-radius: ${scrollbarSize};
  }
  
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(180, 178, 183, 0.3);
    border-radius: ${scrollbarSize};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
    border-color: rgba(180, 178, 183, 0.5);
  }
  
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  body {
    font-family: ${fontFamily};

    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  }
  
  body:before {
    margin: 0;
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    /* background: linear-gradient(white, lightGrey) no-repeat center center; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
`;
