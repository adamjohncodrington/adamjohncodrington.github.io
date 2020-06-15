import { INGREDIENTS, MEASUREMENTS, DIETS } from "../../../constants";

const ingredients: IRecipeIngredients = [
  [
    {
      ingredient: INGREDIENTS.EGGS,
      quantity: 1
    },
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

const serveWith: IServeWith = [
  [{ ingredient: INGREDIENTS.BANANA }],
  [{ ingredient: INGREDIENTS.RASPBERRIES_FRESH }],
  [
    { ingredient: INGREDIENTS.NECTAR_AGAVE },
    { ingredient: INGREDIENTS.SYRUP_GOLDEN }
  ],
  [{ ingredient: INGREDIENTS.SUGAR_ICING }],
  [{ ingredient: INGREDIENTS.CINNAMON_GROUND }]
];

const method: IRecipeMethod = [
  "whisk all ingredients except blueberries",
  "fold blueberries into pancake batter",
  "brush frying pan with sunflower oil and heat",
  "drop dessertspoonfuls of batter onto frying pan",
  "flip pancakes once bases are golden brown",
  "remove from heat and serve"
];

const title: IRecipeTitle = "blueberry pancakes";
const diet: IRecipeDiet = DIETS.VEGETARIAN;

export const BLUEBERRY_PANCAKES: IRecipeCard = {
  title,
  ingredients,
  serveWith,
  method,
  diet
};
