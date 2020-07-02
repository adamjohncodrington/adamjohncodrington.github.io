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

  let totalRecipeCost: number = 0;
  ingredients.forEach((ingredientSection: Array<IRecipeIngredient>): void => {
    ingredientSection.forEach((recipeIngredient: IRecipeIngredient): void => {
      const ingredientCost: number = calculateIngredientCost(recipeIngredient);
      totalRecipeCost += ingredientCost;

      consoleLogCostedIngredient({ ...recipeIngredient, cost: ingredientCost });
    });
  });

  return totalRecipeCost;
};
