import React from "react";
import styled, { css } from "styled-components";

import { MEASUREMENTS, NO_UNIT_COST_FOR_RECIPE_EXISTS } from "../../constants";
import { Circle, GlobalText, FlexRow } from "../../primitives";
import {
  getServeWithListItem,
  calculateRecipeCost,
  getIngredientsHeader,
  mapRecipeIngredientsToListItems
} from "../../utils/global";

import { CentredOnPhone } from "../CentredOnPhone";
import { UnorderedList } from "../UnorderedList";
import { VisibilityToggle } from "../VisibilityToggle";

const { RecipeCardTitle } = GlobalText;

const StyledImage = styled.img(
  ({
    theme: {
      recipe: {
        image: { size }
      }
    }
  }: ThemeProps) => css`
    height: ${size};
    width: ${size};
  `
);

const RecipeBody = styled.div`
  padding-top: 5px;

  > * {
    padding: 10px 0 5px;
  }
`;

const UnitCostsContainer = styled.div`
  font-size: 80%;
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

  const { displayCost, displayUnitCost } = calculateRecipeCost({
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
        <FlexRow>
          <RecipeCardTitle favourite={favourite}>{title}</RecipeCardTitle>
          <Circle fontSize="13px" size="25px" invert color={diet.color}>
            {diet.abbreviation}
          </Circle>
        </FlexRow>
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
            items={serveWith.map(
              (
                item: Array<IRecipeIngredient>
              ): IListItemWithPaddingTopFlag => ({
                text: getServeWithListItem(item),
                addPaddingTop: false
              })
            )}
          />
        )}
        {method && (
          <UnorderedList
            title="method"
            items={method.map(
              (item: string): IListItemWithPaddingTopFlag => ({
                text: item,
                addPaddingTop: false
              })
            )}
            showBullets
          />
        )}
        {image && (
          <CentredOnPhone>
            <StyledImage src={image} />
          </CentredOnPhone>
        )}
        <CentredOnPhone>
          <div>
            approx. <strong>{displayCost}</strong> to make
            {displayUnitCost !== NO_UNIT_COST_FOR_RECIPE_EXISTS &&
              makes &&
              makes.measurement &&
              makes.quantity > 1 &&
              makes.measurement !== MEASUREMENTS.GRAM && (
                <UnitCostsContainer>
                  <strong>{displayUnitCost}</strong> per {makes.measurement}
                </UnitCostsContainer>
              )}
          </div>
        </CentredOnPhone>
      </RecipeBody>
    </VisibilityToggle>
  );
};
