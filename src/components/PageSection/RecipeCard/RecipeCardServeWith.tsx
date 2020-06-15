import React from "react";

import { Ul, Li } from "../../../primitives";
import { getServeWithListItem } from "../../../utils/global";

type RecipeCardServeWithProps = { serveWith: IServeWith };

export const RecipeCardServeWith: React.FC<RecipeCardServeWithProps> = ({
  serveWith
}) => (
  <Ul>
    serve with
    {serveWith.map((item: Array<IRecipeIngredient>, index: number) => (
      <Li key={index}>{getServeWithListItem(item)}</Li>
    ))}
  </Ul>
);
