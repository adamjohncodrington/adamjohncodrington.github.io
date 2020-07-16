import { css } from "styled-components";

import { USE_REGULAR_HEART } from "config";

const FONT_SIZE_75_PERCENT = css`
  font-size: 75%;
`;

const HEART_REGULAR: string = "♥";
const HEART_ALT: string = "❤";
const HEART = USE_REGULAR_HEART ? HEART_REGULAR : HEART_ALT;

const TRIANGLE_POINTING_RIGHT_SMALL: string = "►";
const TRIANGLE_POINTING_RIGHT_LARGE: string = "▶︎";
const DIAMOND: string = "✦";
const SQUARE: string = "■";
const CIRCLE: string = "●";
const CIRCLE_SMALL: string = "•";
const CIRCLE_SMALL_HOLLOW: string = "◦";
const CIRCLE_JAZZY: string = "◉";

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
  ZERO_MARGIN_AND_PADDING,
  TRIANGLE_POINTING_RIGHT_LARGE,
  TRIANGLE_POINTING_RIGHT_SMALL,
  DIAMOND,
  SQUARE,
  CIRCLE,
  CIRCLE_JAZZY,
  CIRCLE_SMALL,
  CIRCLE_SMALL_HOLLOW
};
