import styled, { css } from "styled-components";

import { FONT_SIZES, CSS } from "styles";

export const H1 = styled.h1(
  ({ bold }: I_Bold) => css`
    font-size: ${FONT_SIZES.XxL};
    ${CSS.ZERO_MARGIN_AND_PADDING};
    font-weight: ${bold ? "bold" : "normal"};
  `
);

export const H2 = styled.h2(
  ({ bold }: I_Bold) => css`
    font-size: ${FONT_SIZES.XL};
    ${CSS.ZERO_MARGIN_AND_PADDING};
    font-weight: ${bold ? "bold" : "normal"};
  `
);

export const H3 = styled.h3(
  ({ bold }: I_Bold) => css`
    font-size: ${FONT_SIZES.L};
    ${CSS.ZERO_MARGIN_AND_PADDING};
    font-weight: ${bold ? "bold" : "normal"};
  `
);
