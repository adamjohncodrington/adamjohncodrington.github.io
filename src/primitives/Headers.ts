import styled, { css } from "styled-components";

import { FONT_SIZES } from "../styles";

const ZERO_MARGIN_AND_PADDING = css`
  margin: 0;
  padding: 0;
`;

const H1 = styled.h1`
  font-size: ${FONT_SIZES.XL};
  ${ZERO_MARGIN_AND_PADDING}
`;

const H2 = styled.h2`
  font-size: ${FONT_SIZES.L};
  ${ZERO_MARGIN_AND_PADDING}
`;

const H3 = styled.h3`
  font-size: ${FONT_SIZES.M};
  ${ZERO_MARGIN_AND_PADDING}
`;

export const Headers = {
  H1,
  H2,
  H3
};
