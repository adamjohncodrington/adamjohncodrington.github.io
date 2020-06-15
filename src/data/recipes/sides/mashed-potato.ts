import { INGREDIENTS, MEASUREMENTS, DIETS } from "../../../constants";
import { PHOTOS } from "../../../resources";

const ingredients: IRecipeIngredients = [
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

const method: IRecipeMethod = [
  "peel potatoes and chop into small-ish chunks (to speed up the boiling process)",
  "submerge potato chunks in boiling water for at least 25 minutes (until soft enough to easily mash)",
  "drain the boiling water, then use a masher to break down the potato",
  "dissolve salt in the water, then stir into the potato",
  "stir in the butter, then season with black pepper"
];

const title: IRecipeTitle = "mashed potato";
const makes: IRecipeMakes = { quantity: 2, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS.MASHED_POTATO;

export const MASHED_POTATO: IRecipeCard = {
  ingredients,
  title,
  makes,
  method,
  diet,
  image
};
