import { INGREDIENTS, MEASUREMENTS, UNICODE, DIETS } from "constant-objects";
import { PHOTOS_RECIPES } from "resources";

import { recipeMethodEntries } from "utils";

const { preheatOven, bakeForAbout } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    { ingredient: INGREDIENTS.POTATO_BAKING, quantity: 3 },
    { ingredient: INGREDIENTS.POTATO_SWEET, quantity: 2 },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 100,
      measurement: MEASUREMENTS.MILLILITRE
    }
  ],
  [
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    { ingredient: INGREDIENTS.ONION_WHITE_MEDIUM, quantity: 2 },
    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 5 },
    { ingredient: INGREDIENTS.CARROT, quantity: 3 },
    {
      ingredient: INGREDIENTS.MUSHROOMS_CHESTNUT,
      quantity: 300,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.THYME_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.ROSEMARY_DRIED,
      quantity: 2,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.TOMATO_PUREE,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.STOCK_POWDER_VEGAN,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.WINE_RED,
      quantity: 250,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.CORNFLOUR,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.PETITS_POIS_FROZEN,
      quantity: 250,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON,
      optional: true
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [{ ingredient: INGREDIENTS.ASPARAGUS, notes: "pan-fried" }]
];

const method: Array<string> = [
  "peel and chop potato into smallish chunks (it cooks quicker and makes it easier to mash)",
  "boil potatoes for about 25 minutes until soft and easily mashable",
  "mash potato, then stir in butter, salt, pepper and some water to loosen it",
  "elsewhere, fry diced onion with crushed garlic, sliced mushrooms and diced carrot all together in the oil and some water",
  "shower vegetables in salt, pepper and dried herbs",
  "keep replenishing the vegetables with splashes of water so they never or stick to the saucepan",
  `add ${UNICODE.TOMATO_PUREE} and stock powder`,
  // "once softened, add red wine (and lentils)",
  "once softened, stir in red wine",
  // "stir continuously whilst simmering for at least 30 minutes, adding water where necessary",
  "simmer for at least 30 minutes, adding water where necessary",
  preheatOven({ degreesCelcius: 180 }),
  "remove from heat, stir in cornflour, yeast flakes and peas",
  "transfer filling to oven-proof dish, cover with mashed potato and fork lines onto the topping",
  bakeForAbout({ minutes: 40 })
];

const title: string = "Shepherd's pie";
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS_RECIPES.SHEPHERDS_PIE;
const makes: IRecipeMakes = { quantity: 7, measurement: MEASUREMENTS.PORTION };

export const SHEPHERDS_PIE: IRecipeCard = {
  title,
  ingredients,
  makes,
  serveWith,
  diet,
  hide: true,
  method,
  image
};
