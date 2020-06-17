import React from "react";
import styled, { css } from "styled-components";

import { MEASUREMENTS, NO_UNIT_COST_FOR_RECIPE_EXISTS } from "../../constants";
import { getServeWithListItem, calculateRecipeCost } from "../../utils/global";

import { CentredOnPhone } from "../CentredOnPhone";
import { UnorderedList } from "../UnorderedList";
import { VisibilityToggle } from "../VisibilityToggle";
import { RecipeCardHeader } from "./RecipeCardHeader";
import { RecipeCardIngredients } from "./RecipeCardIngredients";

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

//TODO: move these px values to theme
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

  return (
    <VisibilityToggle
      expandedAutomatically={newRecipe}
      headerComponent={
        <RecipeCardHeader title={title} diet={diet} favourite={favourite} />
      }
    >
      <RecipeBody>
        <RecipeCardIngredients makes={makes} ingredients={ingredients} />

        {serveWith && (
          <UnorderedList
            title="serve with"
            items={serveWith.map((item: Array<IRecipeIngredient>) =>
              getServeWithListItem(item)
            )}
          />
        )}

        {method && <UnorderedList title="method" items={method} showBullets />}

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
