import React, { FC } from "react";
import { css } from "styled-components";

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
  <RecipeHeaderContainer
    alignItems="center"
    className={className}
    firstDirectChildCss={css`
      margin-right: 0.5rem;
    `}
    bold={false}
    italic={false}
  >
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
