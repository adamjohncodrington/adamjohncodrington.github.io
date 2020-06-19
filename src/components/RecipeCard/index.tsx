import React from "react";

import { MEASUREMENTS, NO_UNIT_COST_FOR_RECIPE_EXISTS } from "../../constants";
import { Circle, FlexRow, SeventyFivePercentSpan } from "../../primitives";
import { calculateRecipeCost, getIngredientsHeader } from "../../utils/global";

import { CentredOnPhone } from "../CentredOnPhone";
import { RecipeCardList } from "./RecipeCardList";
import { Disclosure } from "../Disclosure";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapRecipeIngredientsToListItems
} from "./dataFactory";
import {
  StyledRecipeCardTitle,
  RecipeBody,
  StyledImage,
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
  image
}) => {
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
      expandedAutomatically={newRecipe}
      headerComponent={
        <FlexRow>
          <StyledRecipeCardTitle favourite={favourite}>
            {title}
          </StyledRecipeCardTitle>

          <Circle fontSize="13px" size="25px" invert color={diet.color}>
            {diet.abbreviation}
          </Circle>
        </FlexRow>
      }
    >
      <RecipeBody>
        <RecipeCardList
          title={ingredientsHeader}
          items={mapRecipeIngredientsToListItems(ingredients)}
        />

        {serveWith && (
          <RecipeCardList
            title="serve with"
            items={mapServeWithToListItems(serveWith)}
          />
        )}

        {method && (
          <RecipeCardList
            title="method"
            items={mapMethodToListItems(method)}
            showBullets
          />
        )}

        {image && (
          <CentredOnPhone>
            <StyledImage src={image} />
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
