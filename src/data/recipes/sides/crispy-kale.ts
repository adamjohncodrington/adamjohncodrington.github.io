import { INGREDIENTS, MEASUREMENTS, DIETS } from "../../../constants";
import { PHOTOS } from "../../../resources";
import { recipeMethodEntries } from "../../../utils/global";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.KALE,
      quantity: 200,
      measurement: MEASUREMENTS.GRAM
    },

    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON,
      optional: true
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PAPRIKA_SMOKED,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.CHILLI_POWDER,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    }
  ]
];

const method: IRecipeMethod = [
  preheatOven({ degreesCelcius: 100 }),
  "wash and dry kale thoroughly, discard large stems, transfer to large mixing bowl",
  "mix oil with seasoning in a small jug",
  "pour seasoning over kale, toss thoroughly until evenly distributed",
  "transfer seasoned kale to 2 baking trays",
  "bake for 20 minutes, one tray on top of the other",
  "switch tray positions, bake for further 15 minutes",
  "remove from oven, leave to cool"
];

const title: IRecipeTitle = "crispy kale";
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS.KALE_CRISPY;
const makes: IRecipeMakes = { quantity: 2, measurement: MEASUREMENTS.SERVING };

export const CRISPY_KALE: IRecipeCard = {
  title,
  ingredients,
  makes,
  method,
  image,
  diet
};
