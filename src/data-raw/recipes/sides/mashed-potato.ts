import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "resources";
import { Photo } from "types";
import { calculateRecipeCost } from "utils";

const ingredients: IRecipeIngredient[][] = [
  [
    { ingredient: INGREDIENTS.POTATO_BAKING, quantity: 3 },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 75,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH }
  ]
];

const method: string[] = [
  "peel potatoes and chop into small-ish chunks (to speed up the boiling process)",
  "submerge potato chunks in boiling water for at least 25 minutes (until soft enough to easily mash)",
  "drain the boiling water, then use a masher to break down the potato",
  "dissolve salt in the water, then stir into the potato",
  "stir in the butter, then season with black pepper"
];

const title: string = "Mashed Potato";
const makes: IRecipeMakes = { quantity: 2, measurement: MEASUREMENTS.PORTION };
const diet: RecipeDiet = DIETS.VEGAN;
const photo: Photo = PHOTOS.RECIPES.MASHED_POTATO;

const totalCost: number = calculateRecipeCost(ingredients, title);

export const MASHED_POTATO: IRecipe = {
  ingredients,
  title,
  makes,
  totalCost,
  method,
  diet,
  photo
};
