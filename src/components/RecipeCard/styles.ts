import styled, { css } from "styled-components";

import { H3, FlexColumn } from "../../primitives";

interface IRecipeCardTitle {
  favourite?: boolean;
}
export const RecipeCardTitle = styled(H3)`
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

export const RecipeCardImage = styled.img(
  ({
    theme: {
      recipe: {
        image: { size }
      }
    }
  }: IThemeProp) => css`
    height: ${size};
    width: ${size};
  `
);

export const RecipeBody = styled.div`
  padding-top: 5px;

  > * {
    padding: 10px 0 5px;
  }
`;

export const PaddedFlexColumn = styled(FlexColumn)`
  > *:not(:first-child) {
    padding-top: 4px;
  }
`;
