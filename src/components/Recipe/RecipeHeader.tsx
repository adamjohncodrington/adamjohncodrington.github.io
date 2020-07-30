import React, { FC } from "react";

import { COLORS } from "styles";

import { Symbol } from "../Symbol";

import { RecipeHeaderContainer, RecipeTitle } from "./styles";

const { GRAY_MEDIUM } = COLORS;

export const RecipeHeader: FC<IRecipeHeader> = ({
  panelVisible,
  className,
  title,
  diet
}) => (
  <RecipeHeaderContainer className={className}>
    <RecipeTitle bold={panelVisible}>{title}</RecipeTitle>
    <Symbol background={GRAY_MEDIUM} contents={{ text: diet.abbreviation }} />
  </RecipeHeaderContainer>
);
