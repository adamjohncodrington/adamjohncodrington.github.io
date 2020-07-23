import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { H3 } from "primitives";
import { getPseudoElementBefore, getPseudoElementAfter } from "styles";

interface ICardTitle extends I__Favourite, I__Star {
  bold?: boolean;
}

export const CardTitle = styled(H3)(
  ({ bold = true, favourite, star }: ICardTitle) => css`
    text-transform: uppercase;
    ${favourite && getPseudoElementBefore(UNICODE.HEART)}
    ${star && getPseudoElementAfter(UNICODE.STAR)}
    ${bold && `font-weight: bold;`}
  `
);

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
