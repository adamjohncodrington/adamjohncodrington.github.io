import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  FlexRow,
  DivWithCentredText,
  SeventyFivePercentSpan,
  SquareImage
} from "primitives";
import { getIngredientsHeader, numberToCurrencyString } from "@utils";

import { Disclosure } from "../Disclosure";
import { List } from "../List";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapIngredientsToListItems
} from "./factory";
import {
  DietSymbol,
  RecipeCardTitle,
  RecipeBody,
  PaddedFlexColumn
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

  return (
    <Disclosure
      initiallyExpandedAlways={newRecipe}
      headerComponent={
        <FlexRow>
          <RecipeCardTitle favourite={favourite}>{title}</RecipeCardTitle>

          <DietSymbol fontSize="13.5px" size="27px" color={diet.color}>
            {diet.abbreviation}
          </DietSymbol>
        </FlexRow>
      }
    >
      <RecipeBody>
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
          <DivWithCentredText>
            <SquareImage imgSrc={image} size={theme.recipe.image.size} />
          </DivWithCentredText>
        )}

        {totalCost && (
          <PaddedFlexColumn>
            <span>
              approx. <strong>{numberToCurrencyString(totalCost, 1)}</strong> to
              make
            </span>

            {portionCost && makes && makes.measurement && (
              <SeventyFivePercentSpan>
                <strong>{numberToCurrencyString(portionCost, 1)}</strong> per
                {makes.measurement}
              </SeventyFivePercentSpan>
            )}
          </PaddedFlexColumn>
        )}
      </RecipeBody>
    </Disclosure>
  );
};
