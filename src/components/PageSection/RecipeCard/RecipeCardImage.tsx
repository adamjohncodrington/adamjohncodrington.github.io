import React from "react";
import styled from "styled-components";

import { CentredOnPhone } from "../../CentredOnPhone";

const StyledImage = styled.img`
  height: ${props => props.theme.recipe.image.size};
  width: ${props => props.theme.recipe.image.size};
`;

type Props = { imageSource: IRecipeImage };

export const RecipeCardImage: React.FC<Props> = ({ imageSource }) => (
  <CentredOnPhone>
    <StyledImage src={imageSource} />
  </CentredOnPhone>
);
