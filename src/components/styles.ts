import styled, { css } from "styled-components";

import { H3 } from "primitives";
import { CSS } from "styles";

interface ICardTitleBold extends IFavourite, IStar {}

export const CardTitleBold = styled(H3)(
  ({ favourite, star }: ICardTitleBold) => css`
    font-weight: bold;
    text-transform: uppercase;
    ${favourite && CSS.PSEUDO_HEART_BEFORE}
    ${star && CSS.PSEUDO_STAR_AFTER}
  `
);

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
