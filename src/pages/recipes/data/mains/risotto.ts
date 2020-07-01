import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";

import { recipeMethodEntries, calculateRecipeCost } from "@utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.BUTTERNUT_SQUASH_MORETON,
      quantity: 1
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.ONION_WHITE_MEDIUM,
      quantity: 1
    },
    {
      ingredient: INGREDIENTS.LEEK,
      quantity: 2
    },
    {
      ingredient: INGREDIENTS.GARLIC_CLOVE,
      quantity: 5
    },
    {
      ingredient: INGREDIENTS.RICE_RISOTTO_ARBORIO,
      quantity: 250,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 1,
      measurement: MEASUREMENTS.LITRE
    },
    {
      ingredient: INGREDIENTS.STOCK_POWDER_VEGAN,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BEANS_GREEN,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [{ ingredient: INGREDIENTS.SALT_ROCK_FRESH }],
  [{ ingredient: INGREDIENTS.PEPPER_BLACK_FRESH }],
  [{ ingredient: INGREDIENTS.SAGE_FRESH, notes: "crispy" }]
];

const method: Array<string> = [
  preheatOven({ degreesCelcius: 200 }),
  "roast evenly-cubed squash for 40 minutes (in some olive oil, salt and pepper)",
  "fry diced onion and leek with crushed garlic in half the butter (and some water) for about 10 minutes until soft",
  "toss in uncooked rice and stir for 2 minutes",
  "boil water, then add 200ml at a time, replenishing as soon as the rice becomes almost dry",
  "stir constantly and be patient",
  "add finely sliced green beans shortly into the rice cooking",
  "remove from heat, stir in squash, yeast, salt, pepper, remaining butter"
];
const title: string = "Risotto";
const makes: IRecipeMakes = { quantity: 4, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const RISOTTO: IRecipeCard = {
  title,
  ingredients,
  makes,
  serveWith,
  portionCost,
  totalCost,
  diet,
  method
};
