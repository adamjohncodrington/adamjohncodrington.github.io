import styled, { css } from "styled-components";

import { UNICODE } from "@constants";
import { H3 } from "primitives";
import { getPseudoElementBefore, getPseudoElementAfter } from "styles";

interface ICardTitle extends I__Favourite, I__Star {}

export const CardTitle = styled(H3)(
  ({ favourite, star }: ICardTitle) => css`
    text-transform: uppercase;
    ${favourite && getPseudoElementBefore(UNICODE.HEART)}
    ${star && getPseudoElementAfter(UNICODE.STAR)}
  `
);

export const CardSubtitle = styled.div`
  text-transform: uppercase;
  font-size: 85%;
`;
