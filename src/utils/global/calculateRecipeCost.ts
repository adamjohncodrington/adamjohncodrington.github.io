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
  yieldQuantity: IIngredientQuantity;
  recipeTitle: string;
}

export const calculateRecipeCost = ({
  ingredients,
  yieldQuantity,
  recipeTitle
}: ICalculateRecipeCost): { displayCost: string; displayUnitCost: string } => {
  if (CONSOLE_LOG_RECIPE_COST_CALCULATIONS) consoleLogRecipeTitle(recipeTitle);

  let runningRecipeCost: number = 0;

  // Loop through the array of array of ingredients
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < ingredients[i].length; j++) {
      const currentIngredient: IRecipeIngredient = ingredients[i][j];
      const { quantity, measurement, ingredient } = currentIngredient;

      //@ts-ignore
      const cost: number = calculateIngredientCost(currentIngredient);
      runningRecipeCost += cost;

      if (CONSOLE_LOG_RECIPE_COST_CALCULATIONS)
        //@ts-ignore
        consoleLogCostedIngredient({ cost, quantity, measurement, ingredient });
    }
  }

  const unitCost: number = yieldQuantity && runningRecipeCost / yieldQuantity;
  const displayCost: string = numberToCurrencyString(runningRecipeCost, 1);
  const displayUnitCost: string = unitCost
    ? numberToCurrencyString(unitCost, 1)
    : NO_UNIT_COST_FOR_RECIPE_EXISTS;

  return { displayCost, displayUnitCost };
};
