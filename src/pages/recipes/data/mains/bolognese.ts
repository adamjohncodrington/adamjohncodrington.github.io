import { INGREDIENTS, MEASUREMENTS, UNICODE, DIETS } from "@constants";
import { PHOTOS_RECIPES } from "resources";

import { recipeMethodEntries, calculateRecipeCost } from "@utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SOY_SAUCE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 2 },
    {
      ingredient: INGREDIENTS.CHILLI_POWDER,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.LIQUID_SMOKE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.TOFU,
      quantity: 280,
      measurement: MEASUREMENTS.GRAM
    },
    { ingredient: INGREDIENTS.ONION_WHITE_MEDIUM, quantity: 2 },
    { ingredient: INGREDIENTS.CARROT, quantity: 4 },
    { ingredient: INGREDIENTS.CELERY_STICK, quantity: 4 },
    {
      ingredient: INGREDIENTS.MUSHROOMS,
      quantity: 250,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BASIL_FRESH,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.OREGANO_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.TOMATO_PUREE,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.STOCK_POWDER_VEGAN,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.TOMATO_CHOPPED,
      quantity: 2,
      measurement: MEASUREMENTS.CAN
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [
    { ingredient: INGREDIENTS.SPAGHETTI },
    { ingredient: INGREDIENTS.RICE_BROWN }
  ],
  [{ ingredient: INGREDIENTS.BREAD_GARLIC }]
];

const method: Array<string> = [
  preheatOven({ degreesCelcius: 180 }),
  "make paste from yeast, soy, oil, crushed garlic, chilli powder, liquid smoke",
  "drain tofu, use both fingers to crumble into small pieces",
  "mix tofu with smokey paste until evenly covered",
  "bake for 40 minutes in a non-stick loaf tin (stir tofu twice throughout, do not let it burn)",
  "set tofu aside",
  "fry onion in water so it never sticks or burns",
  "when the onion has softened and the water has reduced, pour over some olive oil",
  "add grated carrot, grated celery and finely diced mushrooms to frying pan",
  `meanwhile, blend basil with stock, ${UNICODE.TOMATO_PUREE}, black pepper, oregano and some water`,
  "pour blend over the frying vegetables, fry for about 10 minutes until water reduces",
  "pour over chopped tomatoes",
  "cover, simmer for around 30 minutes (stirring regularly)",
  "stir in tofu, remove from heat"
];

const title: string = "Bolognese";
const makes: IRecipeMakes = { quantity: 5, measurement: MEASUREMENTS.PORTION };
const image: IImageSrc = PHOTOS_RECIPES.BOLOGNESE;
const diet: IRecipeDiet = DIETS.VEGAN;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const BOLOGNESE: IRecipeCard = {
  title,
  ingredients,
  favourite: true,
  makes,
  serveWith,
  diet,
  method,
  image,
  totalCost,
  portionCost
};
