import styled, { css } from "styled-components";

import { H3 } from "primitives";
import { CSS } from "@styles";

interface ICardTitleBold {
  favourite?: boolean;
}

export const CardTitleBold = styled(H3)(
  ({ favourite }: ICardTitleBold) => css`
    font-weight: bold;
    text-transform: uppercase;
    ${favourite && CSS.PSEUDO_ELEMENT_HEART}
  `
);

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
