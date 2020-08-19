import { createGlobalStyle, css } from "styled-components";
import { normalize } from "polished";

import { COLORS } from "./colors";

export const fontFamily: string = `"Freight Sans", -apple-system, "Helvetica Neue", Helvetica, sans-serif`;
export const scrollbarSize: PxValue = "10px";

const { BLACK } = COLORS;

export const CSS_scrollbar = css`
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
`;

const CSS_GlobalStyle = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  body {
    font-family: ${fontFamily};

    background: ${BLACK};

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
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${CSS_GlobalStyle}
`;
