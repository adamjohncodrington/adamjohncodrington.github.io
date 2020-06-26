import { INGREDIENTS, MEASUREMENTS, UNICODE, DIETS } from "@constants";
import { PHOTOS_RECIPES } from "resources";

import { recipeMethodEntries, calculateRecipeCost } from "@utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    { ingredient: INGREDIENTS.ONION_WHITE_MEDIUM, quantity: 2 },
    { ingredient: INGREDIENTS.PEPPER_MIXED, quantity: 3 },
    {
      ingredient: INGREDIENTS.MUSHROOMS_CHESTNUT,
      quantity: 300,
      measurement: MEASUREMENTS.GRAM
    },
    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 5 },
    {
      ingredient: INGREDIENTS.BASIL_FRESH,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.STOCK_POWDER_VEGAN,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.HERBS_MIXED_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SOY_SAUCE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.VINEGAR_BALSAMIC,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.TOMATO_PUREE,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SUGAR_GRANULATED,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.SPINACH,
      quantity: 250,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.TOMATO_CHOPPED,
      quantity: 2,
      measurement: MEASUREMENTS.CAN
    },
    {
      ingredient: INGREDIENTS.LENTIL_RED_DRY,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    }
  ],
  [
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 5,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.MILK_ALMOND_UNSWEETENED,
      quantity: 1,
      measurement: MEASUREMENTS.LITRE
    },
    { ingredient: INGREDIENTS.SALT_ROCK_FRESH },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH }
  ],
  [
    { ingredient: INGREDIENTS.PASTA_LASAGNE_SHEET_DRIED, quantity: 10 },
    { ingredient: INGREDIENTS.COURGETTE, quantity: 2 },
    {
      ingredient: INGREDIENTS.CHEESE_VEGAN_SLICE,
      quantity: 200,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [{ ingredient: INGREDIENTS.BREAD_GARLIC }]
];

const method: Array<string> = [
  "fry diced onion in oil and water for at least 5 minutes",
  "add diced peppers, mushrooms, crushed garlic and fry for at least 10 minutes (replenishing the water to prevent burning)",
  `blend basil with stock powder, dried herbs, soy sauce, black pepper, balsamic vinegar, ${UNICODE.TOMATO_PUREE}, sugar and some water`,
  "pour basil blend into fried vegetables and stir throughly",
  "add spinach and allow it to reduce",
  "stir in chopped tomatoes and lentils",
  "reduce heat, cover and simmer for at least 30 minutes",
  "soak lasagne sheets in cold water",
  "stir flour into medium hot olive oil",
  "pour in the milk and whisk until it thickens (never give up, great arm workout)",
  "remove from heat, season with salt and pepper",
  preheatOven({ degreesCelcius: 190 }),
  `spoon ${UNICODE.THIRD} of each into an oven-proof dish (in the following order): ragu, lasagne sheets, white sauce, sliced raw courgettes`,
  "repeat previous step twice",
  "seal the dish with vegan cheese slices",
  "bake for 35 minutes"
];
const title: string = "Lasagne";
const makes: IRecipeMakes = { quantity: 6, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS_RECIPES.LASAGNE;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const LASAGNE: IRecipeCard = {
  title,
  ingredients,
  makes,
  diet,
  serveWith,
  totalCost,
  portionCost,
  method,
  image
};
