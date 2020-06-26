import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { calculateRecipeCost } from "@utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 125,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.CINNAMON_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BICARBONATE_OF_SODA,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 115,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_BROWN_LIGHT,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_GRANULATED,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    },
    { ingredient: INGREDIENTS.EGGS, quantity: 1 },
    {
      ingredient: INGREDIENTS.VANILLA_EXTRACT,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.OATS,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.RAISINS,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const title: string = "Cookies";
const makes: IRecipeMakes = { quantity: 20, measurement: "cookie" };
const diet: IRecipeDiet = DIETS.VEGETARIAN;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const COOKIES: IRecipeCard = {
  ingredients,
  title,
  totalCost,
  portionCost,
  makes,
  favourite: true,
  diet
};
