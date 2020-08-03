import { calculateIngredientCost } from "./calculateIngredientCost";
import {
  consoleLogCostedIngredient,
  consoleLogRecipeTitle
} from "./console-logs";

export const calculateRecipeCost = (
  ingredients: Array<Array<IRecipeIngredient>>,
  title: string
): number => {
  if (title) consoleLogRecipeTitle(title);

  const flatIngredients: Array<IRecipeIngredient> = ingredients.flat();

  return flatIngredients.reduce(
    (runningCost: number, ingredient: IRecipeIngredient): number => {
      const ingredientCost: number = calculateIngredientCost(ingredient);
      consoleLogCostedIngredient({ ...ingredient, cost: ingredientCost });
      return runningCost + ingredientCost;
    },
    0
  );
};
