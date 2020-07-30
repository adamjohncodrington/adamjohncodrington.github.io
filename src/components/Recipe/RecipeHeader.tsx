import React, { FC } from "react";

import { Symbol } from "../Symbol";

import { RecipeHeaderContainer, RecipeTitle } from "./styles";

export const RecipeHeader: FC<IRecipeHeader> = ({
  panelVisible,
  className,
  title,
  diet
}) => (
  <RecipeHeaderContainer className={className}>
    <RecipeTitle bold={panelVisible}>{title}</RecipeTitle>
    <Symbol background="grey" content={{ text: diet.abbreviation }} />
  </RecipeHeaderContainer>
);
