import styled, { css } from "styled-components";

import { H3, FlexColumn } from "primitives";

interface IRecipeCardTitle {
  favourite?: boolean;
}
export const RecipeCardTitle = styled(H3)`
  text-transform: lowercase;
  font-weight: 300;
  flex: 1;

  ${(props: IRecipeCardTitle) =>
    props.favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}
`;

export const RecipeBody = styled.div`
  padding-top: 5px;

  > * {
    padding-top: 10px;
    padding-bottom: 5px;
  }
`;

export const PaddedFlexColumn = styled(FlexColumn)`
  text-align: center;

  > *:not(:first-child) {
    padding-top: 4px;
  }
`;
