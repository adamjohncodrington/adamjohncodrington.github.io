import { INGREDIENTS, MEASUREMENTS, DIETS } from "../../../constants";
import { PHOTOS } from "../../../resources";

import { recipeMethodEntries } from "../utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    { ingredient: INGREDIENTS.AUBERGINE, quantity: 1 },
    { ingredient: INGREDIENTS.PEPPER_RED, quantity: 1 },
    { ingredient: INGREDIENTS.PEPPER_ORANGE, quantity: 1 },
    { ingredient: INGREDIENTS.COURGETTE, quantity: 2 },
    { ingredient: INGREDIENTS.ONION_WHITE_MEDIUM, quantity: 2 },
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    { ingredient: INGREDIENTS.SALT_ROCK_FRESH },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH }
  ],
  [
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 3 },
    {
      ingredient: INGREDIENTS.TOMATO_CHOPPED,
      quantity: 2,
      measurement: MEASUREMENTS.CAN
    },
    {
      ingredient: INGREDIENTS.OREGANO_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.THYME_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.LEMON_JUICE,
      quantity: 2,
      optional: true,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SUGAR_GRANULATED,
      quantity: 1,
      optional: true,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    }
  ]
];

const method: IRecipeMethod = [
  preheatOven({ degreesCelcius: 180 }),
  "chunkily chop the aubergine, courgette, peppers and onions and distribute evenly across 2 baking trays",
  "drizzle the vegetables in oil, ensuring they are evenly coated, plus season with salt and pepper",
  "roast the vegetables for 1 hour, shaking the veg half way through and switching the position of the trays in the oven",
  "heat oil, lightly fry garlic in a sauceapan for 1 minute",
  "add chopped tomatoes and dried herbs",
  "cover and simmer for 45 minutes",
  "remove sauce from heat, stir in lemon juice, sugar, salt and pepper",
  "transfer all roasted veg to the deeper of the 2 baking trays, pour tomato sauce all over and ensure it is evenly coated",
  "bake for a final 10 minutes"
];

const title: IRecipeTitle = "ratatouille";
const makes: IRecipeMakes = { quantity: 5, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS.RATATOUILLE;

export const RATATOUILLE: IRecipeCard = {
  title,
  ingredients,
  makes,
  method,
  diet,
  image,
  favourite: true
};
