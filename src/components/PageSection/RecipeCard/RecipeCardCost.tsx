import React from "react";
import styled from "styled-components";

import {
  MEASUREMENTS,
  NO_UNIT_COST_FOR_RECIPE_EXISTS
} from "../../../constants";
import { calculateRecipeCost } from "../../../utils/global";

import { CentredOnPhone } from "../../CentredOnPhone";

const CostPerPortionContainer = styled.div`
  font-size: 80%;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

type Props = {
  ingredients: IRecipeIngredients;
  makes?: IRecipeMakes;
  title: string;
};

export const RecipeCardCost: React.FC<Props> = ({
  ingredients,
  makes,
  title
}) => {
  const { displayCost, displayUnitCost } = calculateRecipeCost({
    ingredients,
    yieldQuantity: makes && makes.quantity,
    recipeTitle: title
  });

  return (
    <CentredOnPhone>
      <div>
        approx. <BoldSpan>{displayCost}</BoldSpan> to make
        {displayUnitCost !== NO_UNIT_COST_FOR_RECIPE_EXISTS &&
          makes &&
          makes.measurement &&
          makes.quantity > 1 &&
          makes.measurement !== MEASUREMENTS.GRAM && (
            <CostPerPortionContainer>
              <BoldSpan>{displayUnitCost}</BoldSpan> per {makes.measurement}
            </CostPerPortionContainer>
          )}
      </div>
    </CentredOnPhone>
  );
};
