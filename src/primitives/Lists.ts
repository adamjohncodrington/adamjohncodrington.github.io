import styled, { css } from "styled-components";

interface StyledUlProps {
  showBullets?: boolean;
}

export const Ul = styled.ul`
  margin: 0;
  padding: 0;

  ${({ showBullets }: StyledUlProps) =>
    showBullets
      ? css`
          list-style-type: square;
          list-style-position: inside;
        `
      : css`
          list-style-type: none;
        `}
`;

export const Li = styled.li``;
