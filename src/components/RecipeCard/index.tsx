import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { MEASUREMENTS, NO_UNIT_COST_FOR_RECIPE_EXISTS } from "@constants";
import {
  Circle,
  FlexRow,
  SeventyFivePercentSpan,
  SquareImage
} from "primitives";
import { calculateRecipeCost, getIngredientsHeader } from "utils";

import { CentredOnPhone } from "../CentredOnPhone";
import { Disclosure } from "../Disclosure";
import { List } from "../List";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapRecipeIngredientsToListItems
} from "./factory";
import { RecipeCardTitle, RecipeBody, PaddedFlexColumn } from "./styles";

export const RecipeCard: React.FC<IRecipeCard> = ({
  title,
  makes,
  ingredients,
  method,
  favourite,
  serveWith,
  newRecipe,
  diet,
  image
}) => {
  const theme: ITheme = useContext(ThemeContext);

  const { costDisplayText, unitCostDisplayText } = calculateRecipeCost({
    ingredients,
    yieldQuantity: makes && makes.quantity,
    recipeTitle: title
  });

  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? getIngredientsHeader({ makes, defaultIngredientsHeader })
    : defaultIngredientsHeader;

  return (
    <Disclosure
      initiallyExpanded={newRecipe}
      headerComponent={
        <FlexRow>
          <RecipeCardTitle favourite={favourite}>{title}</RecipeCardTitle>

          <Circle fontSize="13.5px" size="27px" invert color={diet.color}>
            {diet.abbreviation}
          </Circle>
        </FlexRow>
      }
    >
      <RecipeBody>
        <List
          title={ingredientsHeader}
          listItems={mapRecipeIngredientsToListItems(ingredients)}
        />

        {serveWith && (
          <List
            title="serve with"
            listItems={mapServeWithToListItems(serveWith)}
          />
        )}

        {method && (
          <List
            title="method"
            listItems={mapMethodToListItems(method)}
            showBullets
          />
        )}

        {image && (
          <CentredOnPhone>
            <SquareImage imgSrc={image} size={theme.recipe.image.size} />
          </CentredOnPhone>
        )}

        <CentredOnPhone>
          <PaddedFlexColumn>
            <span>
              approx. <strong>{costDisplayText}</strong> to make
            </span>

            {unitCostDisplayText !== NO_UNIT_COST_FOR_RECIPE_EXISTS &&
              makes &&
              makes.measurement &&
              makes.quantity > 1 &&
              makes.measurement !== MEASUREMENTS.GRAM && (
                <SeventyFivePercentSpan>
                  <strong>{unitCostDisplayText}</strong> per {makes.measurement}
                </SeventyFivePercentSpan>
              )}
          </PaddedFlexColumn>
        </CentredOnPhone>
      </RecipeBody>
    </Disclosure>
  );
};
