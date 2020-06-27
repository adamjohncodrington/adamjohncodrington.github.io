import { css } from "styled-components";

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

export const CSS = {
  PSEUDO_ELEMENT_HEART,
  PSEUDO_ELEMENT_STAR,
  ZERO_MARGIN_AND_PADDING
};
