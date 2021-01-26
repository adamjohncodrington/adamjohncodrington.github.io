import {
  INGREDIENTS,
  MEASUREMENTS,
  DIETS,
  RECIPE_METHOD_ENTRIES
} from "@constants";
import { calculateRecipeCost } from "utils";

const { preheatOven, bakeForAbout } = RECIPE_METHOD_ENTRIES;

const ingredients: IRecipeIngredient[][] = [
  [
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 165,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BAKING_POWDER,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SUGAR_CASTER_GOLDEN,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 40,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.MILK_OATLY_BARISTA,
      quantity: 85,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.RAISINS,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const method: string[] = [
  preheatOven({ degreesCelcius: 200, bakingTray: true }),
  "sieve flour and baking powder, combine with sugar and salt",
  "add butter, use fingertips to form fine crumbs",
  "dust the kitchen worktop with flour",
  "slightly warm the milk and pour into the flour mix, use a knife to combine the ingredients",
  "fold in the the raisins",
  "roll out the dough on the worktop to a suitable thickness",
  "cut out scone shapes and place on a baking tray",
  bakeForAbout({ minutes: 10, wellRisen: true })
];

const title: string = "Scones";
const diet: RecipeDiet = DIETS.VEGAN;

const totalCost: number = calculateRecipeCost(ingredients, title);

export const SCONES: IRecipe = {
  ingredients,
  method,
  diet,
  totalCost,
  title
};
