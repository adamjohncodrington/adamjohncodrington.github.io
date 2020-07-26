import React, { FC } from "react";

import { FlexRow } from "primitives";

import { RoundedSymbol } from "../RoundedSymbol";

import { RecipeTitle } from "./styles";

export const RecipeHeader: FC<IRecipeHeader> = ({
  panelIsVisible,
  className,
  title,
  diet
}) => (
  <FlexRow className={className}>
    <RecipeTitle bold={panelIsVisible}>{title}</RecipeTitle>
    <RoundedSymbol opacity="50%" type="diet">
      {diet.abbreviation}
    </RoundedSymbol>
  </FlexRow>
);
