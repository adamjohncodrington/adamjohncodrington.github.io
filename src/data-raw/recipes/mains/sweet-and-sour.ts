import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { calculateRecipeCost } from "utils";

const ingredients: IRecipeIngredient[][] = [
  [
    {
      ingredient: INGREDIENTS.CORNFLOUR,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },

    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 5 },
    {
      ingredient: INGREDIENTS.GINGER_FRESH,
      quantity: 3,
      measurement: MEASUREMENTS.CENTIMETRE
    },
    {
      ingredient: INGREDIENTS.SOY_SAUCE,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.VINEGAR_WHITE_WINE,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SUGAR_BROWN_LIGHT,
      quantity: 4,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.KETCHUP_TOMATO,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.CHILLI_CRUSHED_DRIED,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 300,
      measurement: MEASUREMENTS.MILLILITRE
    }
  ],
  [
    {
      ingredient: INGREDIENTS.CORNFLOUR,
      quantity: 1.5,
      measurement: MEASUREMENTS.TABLESPOON
    },
    { ingredient: INGREDIENTS.SALT_ROCK_FRESH },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH },
    {
      ingredient: INGREDIENTS.OIL_SUNFLOWER,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.TOFU,
      quantity: 280,
      measurement: MEASUREMENTS.GRAM
    }
  ],
  [
    { ingredient: INGREDIENTS.ONION_WHITE_MEDIUM, quantity: 2 },
    { ingredient: INGREDIENTS.CARROT, quantity: 1 },
    { ingredient: INGREDIENTS.PEPPER_RED, quantity: 1 },
    { ingredient: INGREDIENTS.PEPPER_GREEN, quantity: 1 },
    { ingredient: INGREDIENTS.PINEAPPLE, quantity: 1 }
  ]
];

const serveWith: IServeWithItem[][] = [
  [{ ingredient: INGREDIENTS.RICE_BASMATI }]
];

const method: string[] = [
  "mix cornflour with water, set solution aside",
  "fry crushed garlic and grated ginger in a small saucepan for 1 minute",
  "pour over soy, vinegar, ketchup, crushed chillis and water",
  "add cornflour solution, stir for about 10 minutes until the sauce thickens, remove from heat",
  "drain the tofu, chop into bite-sized chunks",
  "mix cornflour with salt, pepper and oil",
  "coat sides of tofu chunks in cornflour paste",
  "fry tofu on medium-high heat for 5 minutes, set aside",
  "chop pineapple, pepper and onion chunkily but slice carrot very thinly",
  "fry vegetables in oil and some water until charred",
  "toss in the pineapple, tofu and pour over the sauce",
  "simmer for at least 5 minutes to let the flavours infuse, serve"
];
const title: string = "Sweet and Sour";
const makes: IRecipeMakes = { quantity: 4, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const SWEET_AND_SOUR: IRecipe = {
  title,
  ingredients,
  makes,
  totalCost,
  portionCost,
  serveWith,
  diet,
  method
};
