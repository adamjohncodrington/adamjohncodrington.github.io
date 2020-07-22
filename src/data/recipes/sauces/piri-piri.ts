import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "resources";
import { calculateRecipeCost } from "utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    { ingredient: INGREDIENTS.PEPPER_RED, quantity: 1 },
    { ingredient: INGREDIENTS.ONION_WHITE_MEDIUM, quantity: 1 },

    {
      ingredient: INGREDIENTS.CHILLI_BIRD_EYE_FRESH,
      quantity: 20,
      measurement: MEASUREMENTS.GRAM,
      notes: "stalk removed"
    },
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 75,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.VINEGAR_WHITE_WINE,
      quantity: 75,
      measurement: MEASUREMENTS.MILLILITRE
    },

    { ingredient: INGREDIENTS.GARLIC_CLOVE, quantity: 10 },
    { ingredient: INGREDIENTS.LEMON, quantity: 1, notes: "zest and juice" },
    {
      ingredient: INGREDIENTS.PAPRIKA,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.OREGANO_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
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
    }
  ]
];

const method: Array<string> = [
  "transfer all ingredients to blender and blitz until smooth",
  "transfer to a saucepan and heat on low for about 20 minutes",
  "remove from heat, leave to cool",
  "keep refrigerated in a jar for up to 2 weeks"
];

const title: string = "Piri Piri";
const makes: IRecipeMakes = { quantity: 475, measurement: MEASUREMENTS.GRAM };
const diet: IRecipeDiet = DIETS.VEGAN;
const photo: IPhoto = PHOTOS.RECIPES.PIRI_PIRI;

const totalCost: number = calculateRecipeCost(ingredients, title);

export const PIRI_PIRI: IRecipe = {
  title,
  ingredients,
  makes,
  method,
  totalCost,
  diet,
  photo
};
