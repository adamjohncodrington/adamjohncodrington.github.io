import React, { FC } from "react";

import { DIETS } from "@constants";
import { COLORS } from "styles";

import { Arrow } from "../Arrow";
import { Symbol } from "../Symbol";

import { RecipeHeaderContainer, RecipeTitle } from "./styles";

const { GREEN_LIGHT, GREEN_MEDIUM, GRAY_DARK } = COLORS;
const { VEGAN, VEGETARIAN } = DIETS;

export const RecipeHeader: FC<IRecipeHeader> = ({
  panelVisible,
  className,
  title,
  diet
}) => (
  <RecipeHeaderContainer className={className}>
    <Arrow panelVisible={panelVisible} size="0.875rem" />

    <RecipeTitle bold={panelVisible} className="recipe-title">
      {title}
    </RecipeTitle>
    <Symbol
      background={
        diet === VEGAN
          ? GREEN_LIGHT
          : diet === VEGETARIAN
          ? GREEN_MEDIUM
          : GRAY_DARK
      }
      contents={{ text: diet.abbreviation }}
    />
  </RecipeHeaderContainer>
);
