import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { H3 } from "primitives";
import { getPseudoElementBefore, getPseudoElementAfter } from "styles";

interface ICardTitleBold extends IFavourite, IStar {}

export const CardTitleBold = styled(H3)(
  ({ favourite, star }: ICardTitleBold) => css`
    font-weight: bold;
    text-transform: uppercase;
    ${favourite && getPseudoElementBefore(UNICODE.HEART)}
    ${star && getPseudoElementAfter(UNICODE.STAR)}
  `
);

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
