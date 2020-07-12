import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { RECIPE_PHOTOS } from "resources";
import { calculateRecipeCost } from "utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.POTATO_JERSEY_ROYAL,
      quantity: 500,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.MAYONNAISE,
      quantity: 4,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.ONION_RED_MEDIUM,
      quantity: 0.5
    },
    {
      ingredient: INGREDIENTS.PARSLEY_FRESH,
      quantity: 15,
      measurement: MEASUREMENTS.GRAM
    },

    { ingredient: INGREDIENTS.SALT_ROCK_FRESH },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH }
  ]
];

const method: Array<string> = [
  "boil potatoes in salted water for 20 minutes",
  "meanwhile, finely dice red onion and parsley",
  "drain potatoes and roughly chop each into quarters",
  "transfer potatoes to a large mixing bowl",
  "add mayo, then toss in onion and parsley",
  "season heavily with salt and pepper"
];

const title: string = "Potato Salad";
const makes: IRecipeMakes = { quantity: 4, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGETARIAN;
const image: IJpgSrc = RECIPE_PHOTOS.POTATO_SALAD;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const POTATO_SALAD: IRecipe = {
  ingredients,
  title,
  makes,
  totalCost,
  portionCost,
  method,
  diet,
  image
};
