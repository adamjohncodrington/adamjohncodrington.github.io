import styled, { css } from "styled-components";

import { H3 } from "primitives";

interface ICardTitleBold {
  favourite?: boolean;
}

export const CardTitleBold = styled(H3)`
  ${({ favourite }: ICardTitleBold) =>
    favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  font-weight: bold;
  text-transform: uppercase;
`;

export const CardSubtitleBold = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
