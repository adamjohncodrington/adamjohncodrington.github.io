import styled, { css } from "styled-components";

import { Headers, FlexColumn } from "../../primitives";

const { RecipeCardTitle } = Headers;

interface IRecipeCardTitle {
  favourite?: boolean;
}
export const StyledRecipeCardTitle = styled(RecipeCardTitle)`
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

export const StyledImage = styled.img(
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
