import styled, { css } from "styled-components";

import { H3 } from "primitives";

interface ICardTitleBold {
  favourite?: boolean;
}

export const CardTitleBold = styled(H3)`
  font-weight: bold;
  text-transform: uppercase;

  ${({ favourite }: ICardTitleBold) =>
    favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}
`;

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
