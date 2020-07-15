import { css } from "styled-components";

const FONT_SIZE_75_PERCENT = css`
  font-size: 75%;
`;

const HEART: string = "♥";
const STAR: string = "★";

const PSEUDO_HEART_BEFORE = css`
  ::before {
    content: "${HEART} ";
  }
`;

const PSEUDO_HEART_AFTER = css`
  ::after {
    content: " ${HEART}";
  }
`;

const PSEUDO_STAR_BEFORE = css`
  ::before {
  content: "${STAR} ";
  }
`;

const PSEUDO_STAR_AFTER = css`
  ::after {
  content: " ${STAR}";
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
  PSEUDO_HEART_BEFORE,
  PSEUDO_HEART_AFTER,
  PSEUDO_STAR_BEFORE,
  PSEUDO_STAR_AFTER,
  ZERO_MARGIN_AND_PADDING
};
