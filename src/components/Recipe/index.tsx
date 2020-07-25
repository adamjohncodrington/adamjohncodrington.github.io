import React, { FC } from "react";

import { SquareImage, FlexRow } from "primitives";
import { getIngredientsHeader, numberToCurrencyString } from "utils";

import { Disclosure } from "../Disclosure";
import { List } from "../List";
import { RoundedSymbol } from "../RoundedSymbol";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapIngredientsToListItems
} from "./factory";
import {
  RecipeTitle,
  RecipePanel,
  RecipePortionCost,
  RecipeCostsContainer
} from "./styles";

export const Recipe: FC<IRecipe> = ({
  title,
  makes,
  ingredients,
  method,
  serveWith,
  newRecipe,
  diet,
  photo,
  totalCost,
  portionCost
}) => {
  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? getIngredientsHeader({ makes, defaultIngredientsHeader })
    : defaultIngredientsHeader;

  const RecipeHeader: FC<IDisclosureHeader> = ({
    panelIsVisible,
    className
  }) => (
    <FlexRow className={className}>
      <RecipeTitle bold={panelIsVisible}>{title}</RecipeTitle>
      <RoundedSymbol opacity="50%" type="diet">
        {diet.abbreviation}
      </RoundedSymbol>
    </FlexRow>
  );

  return (
    <Disclosure
      autoExpand={newRecipe}
      Header={({ panelIsVisible }) => (
        <RecipeHeader panelIsVisible={panelIsVisible} />
      )}
      Panel={() => (
        <RecipePanel>
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
        </RecipePanel>
      )}
    />
  );
};
