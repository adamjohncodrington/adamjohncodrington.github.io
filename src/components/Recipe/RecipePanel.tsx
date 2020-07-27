import React, { FC } from "react";

import { SquareImage } from "primitives";
import {
  getIngredientsHeader,
  numberToCurrencyString,
  mapMethodToListItems,
  mapServeWithToListItems,
  mapIngredientsToListItems
} from "utils";

import { List } from "./RecipeList";

import {
  RecipePanelContainer,
  RecipePortionCost,
  RecipeCostsContainer
} from "./styles";

export const RecipePanel: FC<IRecipe> = ({
  makes,
  ingredients,
  method,
  serveWith,
  photo,
  totalCost,
  portionCost
}) => {
  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? getIngredientsHeader({ makes, defaultIngredientsHeader })
    : defaultIngredientsHeader;

  return (
    <RecipePanelContainer>
      <List
        title={ingredientsHeader}
        listItems={mapIngredientsToListItems(ingredients)}
      />

      {serveWith && (
        <List
          title="serve with"
          listItems={mapServeWithToListItems(serveWith)}
        />
      )}

      <List
        title="method"
        listItems={mapMethodToListItems(method)}
        showBullets
      />

      {photo && <SquareImage photo={photo} size="100%" />}

      {totalCost && (
        <RecipeCostsContainer>
          <span>
            <span>approx. </span>
            <strong>{numberToCurrencyString(totalCost, 1)}</strong>
            <span> to make</span>
          </span>

          {portionCost && makes && (
            <RecipePortionCost>
              <strong>{numberToCurrencyString(portionCost, 1)}</strong>
              <span>
                {makes.measurement ? ` per ${makes.measurement}` : " each"}
              </span>
            </RecipePortionCost>
          )}
        </RecipeCostsContainer>
      )}
    </RecipePanelContainer>
  );
};
