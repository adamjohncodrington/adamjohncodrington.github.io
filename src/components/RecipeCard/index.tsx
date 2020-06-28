import React, { useContext, ReactElement } from "react";
import { ThemeContext } from "styled-components";

import { FlexRow, SquareImage } from "primitives";
import { getIngredientsHeader, numberToCurrencyString } from "@utils";

import { Disclosure } from "../Disclosure";
import { List } from "../List";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapIngredientsToListItems
} from "./factory";
import {
  RecipeCardDietSymbol,
  RecipeCardTitle,
  RecipeCardPanel,
  RecipeCardPortionCost,
  RecipeCardPhotoContainer,
  RecipeCardCostsContainer
} from "./styles";

export const RecipeCard: React.FC<IRecipeCard> = ({
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
  const theme: ITheme = useContext(ThemeContext);

  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? getIngredientsHeader({ makes, defaultIngredientsHeader })
    : defaultIngredientsHeader;

  const RecipeCardHeader: ReactElement = (
    <FlexRow>
      <RecipeCardTitle favourite={favourite}>{title}</RecipeCardTitle>
      <RecipeCardDietSymbol
        size={theme.recipeCard.dietSymbol.size}
        color={diet.color}
      >
        {diet.abbreviation}
      </RecipeCardDietSymbol>
    </FlexRow>
  );

  return (
    <Disclosure autoExpand={newRecipe} Header={RecipeCardHeader}>
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

        {image && (
          <RecipeCardPhotoContainer>
            <SquareImage imgSrc={image} size={theme.recipeCard.photo.size} />
          </RecipeCardPhotoContainer>
        )}

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
    </Disclosure>
  );
};
