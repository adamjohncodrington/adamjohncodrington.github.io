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
  RecipeCardTitle,
  RecipeCardPanel,
  RecipeCardPortionCost,
  RecipeCardCostsContainer
} from "./styles";

interface IRecipeCardHeader extends IClassName, IPanelIsVisible {}

export const RecipeCard: FC<IRecipe> = ({
  title,
  makes,
  ingredients,
  method,
  favourite,
  serveWith,
  newRecipe,
  diet,
  image,
  totalCost,
  portionCost
}) => {
  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? getIngredientsHeader({ makes, defaultIngredientsHeader })
    : defaultIngredientsHeader;

  const RecipeCardHeader: FC<IRecipeCardHeader> = ({
    panelIsVisible,
    className
  }) => (
    <FlexRow className={className}>
      <RecipeCardTitle isBold={panelIsVisible} favourite={favourite}>
        {title}
      </RecipeCardTitle>
      <RoundedSymbol color={diet.color}>{diet.abbreviation}</RoundedSymbol>
    </FlexRow>
  );

  return (
    <Disclosure
      autoExpand={newRecipe}
      Header={RecipeCardHeader}
      Panel={
        <RecipeCardPanel>
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

          {image && <SquareImage imgSrc={image} size="100%" />}

          {totalCost && (
            <RecipeCardCostsContainer>
              <span>
                <span>approx. </span>
                <strong>{numberToCurrencyString(totalCost, 1)}</strong>
                <span> to make</span>
              </span>

              {portionCost && makes && (
                <RecipeCardPortionCost>
                  <strong>{numberToCurrencyString(portionCost, 1)}</strong>
                  <span>
                    {makes.measurement ? ` per ${makes.measurement}` : " each"}
                  </span>
                </RecipeCardPortionCost>
              )}
            </RecipeCardCostsContainer>
          )}
        </RecipeCardPanel>
      }
    />
  );
};
