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
    <Symbol opacity="50%" type="diet">
      {diet.abbreviation}
    </Symbol>
  </RecipeHeaderContainer>
);
