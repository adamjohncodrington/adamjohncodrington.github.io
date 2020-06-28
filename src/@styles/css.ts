import { css } from "styled-components";

const FONT_SIZE_75_PERCENT = css`
  font-size: 75%;
`;

const PSEUDO_ELEMENT_HEART = css`
  ::before {
    content: "♥ ";
  }
`;

const PSEUDO_ELEMENT_STAR = css`
  ::before {
    content: "★ ";
  }
`;

const ZERO_MARGIN_AND_PADDING = css`
  margin: 0;
  padding: 0;
`;

const GRID_COLUMN = css`
  display: grid;
  grid-auto-flow: column;
`;

const GRID_COLUMN_EQUAL_WIDTHS = css`
  ${GRID_COLUMN}
  grid-auto-columns: 1fr;
`;

export const CSS = {
  FONT_SIZE_75_PERCENT,
  GRID_COLUMN,
  GRID_COLUMN_EQUAL_WIDTHS,
  PSEUDO_ELEMENT_HEART,
  PSEUDO_ELEMENT_STAR,
  ZERO_MARGIN_AND_PADDING
};
