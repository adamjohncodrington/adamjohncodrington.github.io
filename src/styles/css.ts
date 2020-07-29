import { css } from "styled-components";

export const getPseudoElementAfter = (element: string) => css`
  ::after {
    content: " ${element}";
  }
`;

export const getPseudoElementBefore = (element: string) => css`
  ::before {
    content: "${element} ";
  }
`;

const GRID_COLUMN = css`
  display: grid;
  grid-auto-flow: column;
`;

export const CSS = {
  FONT_SIZE_65_PERCENT: css`
    font-size: 65%;
  `,
  FONT_SIZE_75_PERCENT: css`
    font-size: 75%;
  `,
  GRID_COLUMN,
  GRID_COLUMN_EQUAL_WIDTHS: css`
    ${GRID_COLUMN}
    grid-auto-columns: 1fr;
  `,
  ZERO_MARGIN_AND_PADDING: css`
    margin: 0;
    padding: 0;
  `
};
