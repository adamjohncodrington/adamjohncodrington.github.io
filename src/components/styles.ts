import styled, { css } from "styled-components";

import { H3 } from "primitives";
import {
  HEART,
  getPseudoElementBefore,
  getPseudoElementAfter,
  STAR
} from "styles";

interface ICardTitleBold extends IFavourite, IStar {}

export const CardTitleBold = styled(H3)(
  ({ favourite, star }: ICardTitleBold) => css`
    font-weight: bold;
    text-transform: uppercase;
    ${favourite && getPseudoElementBefore(HEART)}
    ${star && getPseudoElementAfter(STAR)}
  `
);

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
