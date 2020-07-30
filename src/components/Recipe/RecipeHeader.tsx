import React, { FC } from "react";

import { DIETS } from "@constants";
import { COLORS } from "styles";

import { Symbol } from "../Symbol";

import { RecipeHeaderContainer, RecipeTitle } from "./styles";

const { GREEN_LIGHT, GREEN_MEDIUM, GRAY_MEDIUM } = COLORS;
const { VEGAN, VEGETARIAN } = DIETS;

export const RecipeHeader: FC<IRecipeHeader> = ({
  panelVisible,
  className,
  title,
  diet
}) => (
  <RecipeHeaderContainer className={className}>
    <RecipeTitle bold={panelVisible}>{title}</RecipeTitle>
    <Symbol
      background={
        diet === VEGAN
          ? GREEN_LIGHT
          : diet === VEGETARIAN
          ? GREEN_MEDIUM
          : GRAY_MEDIUM
      }
      contents={{ text: diet.abbreviation }}
    />
  </RecipeHeaderContainer>
);
