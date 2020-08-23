import React, { FC } from "react";

import { Disclosure } from "../Disclosure";

import { RecipeHeader } from "./RecipeHeader";
import { RecipePanel } from "./RecipePanel";

export const Recipe: FC<IRecipe> = props => {
  const { newRecipe } = props;

  return (
    <Disclosure
      autoExpand={newRecipe}
      panelExists={true}
      Header={headerProps => <RecipeHeader {...headerProps} {...props} />}
      Panel={() => <RecipePanel {...props} />}
    />
  );
};
