import { CONSOLE_LOG_RECIPE_COST_CALCULATIONS } from "../../config";
import { NO_UNIT_COST_FOR_RECIPE_EXISTS } from "../../constants";

import {
  numberToCurrencyString,
  consoleLogCostedIngredient,
  consoleLogRecipeTitle,
  calculateIngredientCost
} from "../local";

interface ICalculateRecipeCost {
  ingredients: Array<Array<IRecipeIngredient>>;
  yieldQuantity?: IIngredientQuantity;
  recipeTitle: string;
}

export const calculateRecipeCost = ({
  ingredients,
  yieldQuantity,
  recipeTitle
}: ICalculateRecipeCost): {
  costDisplayText: string;
  unitCostDisplayText: string;
} => {
  if (CONSOLE_LOG_RECIPE_COST_CALCULATIONS) consoleLogRecipeTitle(recipeTitle);

  let runningRecipeCost: number = 5;

  ingredients.map(ingredientSection => {
    ingredientSection.map(recipeIngredient => {
      // @ts-ignore
      const recipeIngredientCost = calculateIngredientCost(recipeIngredient);

      runningRecipeCost += recipeIngredientCost;

      if (CONSOLE_LOG_RECIPE_COST_CALCULATIONS) {
        const { quantity, measurement, ingredient } = recipeIngredient;
        consoleLogCostedIngredient({
          cost: recipeIngredientCost,
          //@ts-ignore
          quantity,
          measurement,
          ingredient
        });
      }

      return null;
    });
    return null;
  });

  const unitCost: number | undefined =
    yieldQuantity && runningRecipeCost / yieldQuantity;
  const costDisplayText: string = numberToCurrencyString(runningRecipeCost, 1);
  const unitCostDisplayText: string = unitCost
    ? numberToCurrencyString(unitCost, 1)
    : NO_UNIT_COST_FOR_RECIPE_EXISTS;

  return { costDisplayText, unitCostDisplayText };
};
