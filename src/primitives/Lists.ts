import styled, { css } from "styled-components";

interface IUl {
  showBullets?: boolean;
}

export const Ul = styled.ul(
  ({ showBullets }: IUl) => css`
    margin: 0;
    padding: 0;

    ${showBullets
      ? css`
          list-style-type: square;
          list-style-position: inside;
        `
      : css`
          list-style-type: none;
        `}
  `
);

export const Li = styled.li``;
