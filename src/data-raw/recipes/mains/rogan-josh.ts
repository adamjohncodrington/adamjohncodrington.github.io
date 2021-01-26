import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "resources";
import { calculateRecipeCost } from "utils";

const ingredients: IRecipeIngredient[][] = [
  [
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    { ingredient: INGREDIENTS.ONION_RED_MEDIUM, quantity: 2 },
    {
      ingredient: INGREDIENTS.CURRY_PASTE_ROGAN_JOSH,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.GINGER_FRESH,
      quantity: 3,
      measurement: MEASUREMENTS.CENTIMETRE
    },
    {
      ingredient: INGREDIENTS.CORIANDER_FRESH,
      quantity: 30,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.POTATO_SWEET,
      quantity: 1,
      notes: "large"
    },
    {
      ingredient: INGREDIENTS.CHICKPEAS,
      quantity: 1,
      measurement: MEASUREMENTS.CAN
    },
    {
      ingredient: INGREDIENTS.TOMATO_CHOPPED,
      quantity: 1,
      measurement: MEASUREMENTS.CAN
    },
    {
      ingredient: INGREDIENTS.PETITS_POIS_FROZEN,
      quantity: 200,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.MILK_COCONUT_CANNED,
      quantity: 1,
      measurement: MEASUREMENTS.CAN
    },
    {
      ingredient: INGREDIENTS.SPINACH,
      quantity: 260,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const serveWith: IServeWithItem[][] = [
  [{ ingredient: INGREDIENTS.RICE }],
  [{ ingredient: INGREDIENTS.KALE }, { ingredient: INGREDIENTS.POPPADOMS }]
];

const method: string[] = [
  "fry diced onion in oil, curry paste and some water on a medium heat for at least 10 minutes",
  "meanwhile, blend coriander with some water",
  "add grated ginger, diced sweet potato, drained chickpeas and blended coriander to frying pan",
  "fry for about 20 minutes, regularly replenishing the water",
  "add chopped tomatoes, bring to the boil",
  "reduce heat and simmer for at least 30 minutes",
  "stir in petit pois, coconut milk and spinach"
];
const title: string = "Rogan josh";
const makes: IRecipeMakes = { quantity: 5, measurement: MEASUREMENTS.PORTION };
const diet: RecipeDiet = DIETS.VEGAN;
const photo: IPhoto = PHOTOS.RECIPES.ROGAN_JOSH;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const ROGAN_JOSH: IRecipe = {
  title,
  ingredients,
  makes,
  totalCost,
  portionCost,
  serveWith,
  diet,
  method,
  photo
};
