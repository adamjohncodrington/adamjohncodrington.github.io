import React, { FC } from "react";

import { RoundedSymbol } from "../RoundedSymbol";

import { RecipeHeaderContainer, RecipeTitle } from "./styles";

export const RecipeHeader: FC<IRecipeHeader> = ({
  panelIsVisible,
  className,
  title,
  diet
}) => (
  <RecipeHeaderContainer className={className}>
    <RecipeTitle bold={panelIsVisible}>{title}</RecipeTitle>
    <RoundedSymbol opacity="50%" type="diet">
      {diet.abbreviation}
    </RoundedSymbol>
  </RecipeHeaderContainer>
);
