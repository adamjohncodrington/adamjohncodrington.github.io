import React from "react";
import styled from "styled-components";

import { RecipeCardCost } from "./RecipeCardCost";
import { RecipeCardHeader } from "./RecipeCardHeader";
import { RecipeCardIngredients } from "./RecipeCardIngredients";
import { RecipeCardMethod } from "./RecipeCardMethod";
import { RecipeCardImage } from "./RecipeCardImage";
import { RecipeCardServeWith } from "./RecipeCardServeWith";
import { VisibilityToggle } from "../VisibilityToggle";

const RecipeBody = styled.div`
  padding-top: 5px;

  > * {
    padding: 10px 0 5px;
  }
`;

export const RecipeCard: React.FC<IRecipeCard> = ({
  title,
  makes,
  ingredients,
  method,
  favourite,
  serveWith,
  newRecipe,
  hide,
  diet,
  image
}) => {
  if (hide) return null;

  return (
    <VisibilityToggle
      expandedAutomatically={newRecipe}
      headerComponent={
        <RecipeCardHeader title={title} diet={diet} favourite={favourite} />
      }
    >
      <RecipeBody>
        <RecipeCardIngredients makes={makes} ingredients={ingredients} />
        {serveWith && <RecipeCardServeWith serveWith={serveWith} />}
        <RecipeCardMethod method={method} />
        {image && <RecipeCardImage imageSource={image} />}
        <RecipeCardCost ingredients={ingredients} makes={makes} title={title} />
      </RecipeBody>
    </VisibilityToggle>
  );
};
