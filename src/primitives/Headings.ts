import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import {
  FONT_SIZES,
  CSS,
  getPseudoElementBefore,
  getPseudoElementAfter
} from "styles";

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

interface ICardTitle extends I__Favourite, I__Star {}

export const CardTitle = styled(H3)(
  ({ favourite, star }: ICardTitle) => css`
    text-transform: uppercase;
    ${favourite && getPseudoElementBefore(UNICODE.HEART)}
    ${star && getPseudoElementAfter(UNICODE.STAR)}
  `
);

export const CardSubtitle = styled.div(
  ({ bold }: I_Bold) => css`
    text-transform: uppercase;
    font-size: 85%;

    ${bold &&
    css`
      font-weight: bold;
    `}
  `
);
