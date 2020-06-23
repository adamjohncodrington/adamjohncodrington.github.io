import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "resources";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.ONION_WHITE_MEDIUM,
      quantity: 1
    },
    {
      ingredient: INGREDIENTS.GARLIC_CLOVE,
      quantity: 3
    },
    {
      ingredient: INGREDIENTS.PEPPER_RED,
      quantity: 1
    },
    {
      ingredient: INGREDIENTS.BEANS_HARICOT,
      quantity: 2,
      measurement: MEASUREMENTS.CAN
    },
    {
      ingredient: INGREDIENTS.TOMATO_PASSATA,
      quantity: 500,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SOY_SAUCE,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 1,
      optional: true,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.STOCK_POWDER_VEGAN,
      quantity: 2,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SUGAR_BROWN_LIGHT,
      quantity: 2,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PAPRIKA_SMOKED,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.ALLSPICE_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    }
  ]
];

const method: IRecipeMethod = [
  "fry diced onion, garlic and pepper in oil (and some water if need be) for 5-10 minutes",
  "transfer to slow cooker along with drained beans, passata and seasoning",
  "cook on low for 8 hours or medium for 5 hours"
];

const title: IRecipeTitle = "baked beans";
const makes: IRecipeMakes = { quantity: 4, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS.BAKED_BEANS;

export const BAKED_BEANS: IRecipeCard = {
  title,
  ingredients,
  makes,
  method,
  diet,
  image
};
