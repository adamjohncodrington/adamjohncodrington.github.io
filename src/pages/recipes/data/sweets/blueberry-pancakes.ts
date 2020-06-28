import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { calculateRecipeCost } from "@utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.FLOUR_SELF_RAISING,
      quantity: 175,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BAKING_POWDER,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SUGAR_CASTER_GOLDEN,
      quantity: 40,
      measurement: MEASUREMENTS.GRAM
    },
    { ingredient: INGREDIENTS.EGGS, quantity: 1 },
    {
      ingredient: INGREDIENTS.MILK,
      quantity: 200,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.BLUEBERRIES_FRESH,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [{ ingredient: INGREDIENTS.BANANA }],
  [{ ingredient: INGREDIENTS.RASPBERRIES_FRESH }],
  [
    { ingredient: INGREDIENTS.NECTAR_AGAVE },
    { ingredient: INGREDIENTS.SYRUP_GOLDEN }
  ],
  [{ ingredient: INGREDIENTS.SUGAR_ICING }],
  [{ ingredient: INGREDIENTS.CINNAMON_GROUND }]
];

const method: Array<string> = [
  "whisk all ingredients except blueberries",
  "fold blueberries into pancake batter",
  "brush frying pan with sunflower oil and heat",
  "fry dessertspoonfuls of batter on a medium-low heat",
  "flip pancakes once bases are golden brown",
  "remove from heat once both sides are golden"
];

const title: string = "Blueberry Pancakes";
const diet: IRecipeDiet = DIETS.VEGETARIAN;
const makes: IRecipeMakes = { quantity: 13 };

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const BLUEBERRY_PANCAKES: IRecipeCard = {
  title,
  ingredients,
  totalCost,
  makes,
  portionCost,
  serveWith,
  method,
  diet
};
