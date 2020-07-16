import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { JPG_PORRIDGE } from "resources";

import { calculateRecipeCost } from "utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.OATS,
      quantity: 40,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.MILK_OATLY_BARISTA,
      quantity: 100,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 125,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.CINNAMON_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.RASPBERRIES_FROZEN,
      quantity: 75,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const serveWith: Array<Array<IRecipeIngredient>> = [
  [{ ingredient: INGREDIENTS.NECTAR_AGAVE }]
];

const method: Array<string> = [
  "transfer measured oats, water and Oatly to saucepan",
  "heat moderately and continuously stir so it never sticks to the pan",
  "add frozen raspberries and cinnamon shortly after",
  "once it is creamy and thick, remove from heat"
];

const title: string = "Porridge";
const makes: IRecipeMakes = { quantity: 1, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IJpgSrc = JPG_PORRIDGE;

const totalCost: number = calculateRecipeCost(ingredients, title);

export const PORRIDGE: IRecipe = {
  title,
  ingredients,
  serveWith,
  totalCost,
  makes,
  method,
  diet,
  image
};
