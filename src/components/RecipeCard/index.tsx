import React from "react";

import { MEASUREMENTS, NO_UNIT_COST_FOR_RECIPE_EXISTS } from "../../constants";
import { Circle, FlexRowDiv, SeventyFivePercentSpan } from "../../primitives";
import { calculateRecipeCost, getIngredientsHeader } from "../../utils/global";

import { CentredOnPhone } from "../CentredOnPhone";
import { UnorderedList } from "../UnorderedList";
import { VisibilityToggle } from "../VisibilityToggle";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapRecipeIngredientsToListItems
} from "./dataFactory";
import {
  StyledRecipeCardTitle,
  RecipeBody,
  StyledImage,
  PaddedFlexColDivumn
} from "./styles";

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
    <VisibilityToggle
      expandedAutomatically={newRecipe}
      headerComponent={
        <FlexRowDiv>
          <StyledRecipeCardTitle favourite={favourite}>
            {title}
          </StyledRecipeCardTitle>
          <Circle fontSize="13px" size="25px" invert color={diet.color}>
            {diet.abbreviation}
          </Circle>
        </FlexRowDiv>
      }
    >
      <RecipeBody>
        <UnorderedList
          title={ingredientsHeader}
          items={mapRecipeIngredientsToListItems(ingredients)}
        />

        {serveWith && (
          <UnorderedList
            title="serve with"
            items={mapServeWithToListItems(serveWith)}
          />
        )}

        {method && (
          <UnorderedList
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
          <PaddedFlexColDivumn>
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
          </PaddedFlexColDivumn>
        </CentredOnPhone>
      </RecipeBody>
    </VisibilityToggle>
  );
};
