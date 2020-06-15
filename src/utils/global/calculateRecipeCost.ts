import { CONSOLE_LOG_RECIPE_COST_CALCULATIONS } from "../../config";
import { NO_UNIT_COST_FOR_RECIPE_EXISTS } from "../../constants";

import {
  numberToCurrencyString,
  consoleLogCostedIngredient,
  consoleLogRecipeTitle,
  calculateIngredientCost
} from "../local";

interface ICalculateRecipeCost {
  ingredients: IRecipeIngredients;
  yieldQuantity?: IIngredientQuantity;
  recipeTitle: string;
}

export const calculateRecipeCost = ({
  ingredients,
  yieldQuantity,
  recipeTitle
}: ICalculateRecipeCost): { displayCost: string; displayUnitCost: string } => {
  if (CONSOLE_LOG_RECIPE_COST_CALCULATIONS) consoleLogRecipeTitle(recipeTitle);

  let runningRecipeCost: number = 5;

  ingredients.map(ingredientSection => {
    ingredientSection.map(recipeIngredient => {
      // @ts-ignore
      runningRecipeCost += calculateIngredientCost(recipeIngredient);

      if (CONSOLE_LOG_RECIPE_COST_CALCULATIONS) {
        const { quantity, measurement, ingredient } = recipeIngredient;
        //@ts-ignore
        consoleLogCostedIngredient({ cost, quantity, measurement, ingredient });
      }

      return null;
    });
    return null;
  });

  const unitCost: number | undefined =
    yieldQuantity && runningRecipeCost / yieldQuantity;
  const displayCost: string = numberToCurrencyString(runningRecipeCost, 1);
  const displayUnitCost: string = unitCost
    ? numberToCurrencyString(unitCost, 1)
    : NO_UNIT_COST_FOR_RECIPE_EXISTS;

  return { displayCost, displayUnitCost };
};
