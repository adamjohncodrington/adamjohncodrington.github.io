import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";

import { recipeMethodEntries } from "utils";

const {
  preheatOven,
  FOLD_IN_FLOUR_MIX,
  transferToLoafTin,
  bakeForAbout
} = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.MILK_COCONUT_CANNED,
      quantity: 1,
      measurement: MEASUREMENTS.CAN
    },

    {
      ingredient: INGREDIENTS.SUGAR_CASTER_GOLDEN,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.OIL_SUNFLOWER,
      quantity: 100,
      measurement: MEASUREMENTS.MILLILITRE
    },
    { ingredient: INGREDIENTS.LEMON_LARGE, quantity: 2 },
    {
      ingredient: INGREDIENTS.LEMON_EXTRACT,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON,
      optional: true
    },
    {
      ingredient: INGREDIENTS.VANILLA_EXTRACT,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.FLOUR_SELF_RAISING,
      quantity: 250,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BAKING_POWDER,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BICARBONATE_OF_SODA,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    }
  ],
  [
    { ingredient: INGREDIENTS.LEMON_LARGE, quantity: 1 },
    {
      ingredient: INGREDIENTS.SUGAR_GRANULATED,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const method: Array<string> = [
  preheatOven({ degreesCelcius: 150 }),
  "in a large mixing bowl, whisk the coconut milk with the sugar, oil and lemon juice for at least 3 minutes",
  "stir in the lemon zest, vanilla extract and lemon extract",
  "in a small mixing bowl, weigh flour and combine with baking powder, bicarbonate of soda and salt",
  FOLD_IN_FLOUR_MIX,
  transferToLoafTin({}),
  bakeForAbout({ minutes: 40, skewer: true }),
  "make drizzle topping from zest and juice of lemon plus sugar",
  "leave cake to cool for at least 30 minutes, prod a few holes in the cake",
  "evenly coat drizzle topping"
];

const title: string = "Lemon Drizzle";
const makes: IRecipeMakes = { quantity: 10, measurement: MEASUREMENTS.SLICE };
const diet: IRecipeDiet = DIETS.VEGAN;

export const LEMON_DRIZZLE: IRecipeCard = {
  title,
  ingredients,
  diet,
  makes,
  method,
  hide: true
};
