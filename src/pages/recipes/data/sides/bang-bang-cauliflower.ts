import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "resources";

import { recipeMethodEntries, calculateRecipeCost } from "utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    { ingredient: INGREDIENTS.CAULIFLOWER_REGULAR, quantity: 1 },
    {
      ingredient: INGREDIENTS.MILK_ALMOND_UNSWEETENED,
      quantity: 200,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.TURMERIC_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PAPRIKA,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.SWEET_CHILLI_SAUCE,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SOY_SAUCE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.LIME_JUICE_FRESH,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SRIRACHA,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 2 }
  ]
];

const method: Array<string> = [
  preheatOven({ degreesCelcius: 200 }),
  "mix flour, almond milk, salt, pepper, turmeric, paprika in large bowl to make batter",
  "remove all leaves from cauliflower, cut vertically around the stem to release florets",
  "cover all florets in the batter",
  "use tongs to transfer each floret to baking tray",
  "roast the cauliflower for 25 minutes",
  "make bang bang sauce by mixing sweet chilli, soy, lime juice, sriracha, crushed garlic",
  "toss sauce over cauliflower in a heated wok",
  "pour over fried spring onion and sesame seeds"
];

const serveWith: Array<Array<IServeWithItem>> = [
  [{ ingredient: INGREDIENTS.ONION_SPRING }],
  [{ ingredient: INGREDIENTS.SEEDS_SESAME }]
];

const title: string = "Bang Bang Cauliflower";
const makes: IRecipeMakes = { quantity: 2, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IPhoto = PHOTOS.RECIPES.BANG_BANG_CAULI;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const BANG_BANG_CAULIFLOWER: IRecipe = {
  title,
  ingredients,
  image,
  totalCost,
  serveWith,
  portionCost,
  makes,
  method,
  diet
};
