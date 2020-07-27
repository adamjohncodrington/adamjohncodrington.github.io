import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { RecipeHeader } from "./RecipeHeader";
import { RecipePanel } from "./RecipePanel";

export const Recipe: FC<IRecipe> = recipeProps => {
  const { newRecipe } = recipeProps;

  return (
    <Disclosure
      autoExpand={newRecipe}
      Header={hProps => <RecipeHeader {...hProps} {...recipeProps} />}
      Panel={() => <RecipePanel {...recipeProps} />}
    />
  );
};
