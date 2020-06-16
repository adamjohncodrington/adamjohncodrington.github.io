import React from "react";
import styled, { css } from "styled-components";

import { CentredOnPhone } from "../CentredOnPhone";

const StyledImage = styled.img(
  ({
    theme: {
      recipe: {
        image: { size }
      }
    }
  }: {
    theme: ITheme;
  }) => css`
    height: ${size};
    width: ${size};
  `
);

type Props = { imageSource: IRecipeImage };

export const RecipeCardImage: React.FC<Props> = ({ imageSource }) => (
  <CentredOnPhone>
    <StyledImage src={imageSource} />
  </CentredOnPhone>
);
