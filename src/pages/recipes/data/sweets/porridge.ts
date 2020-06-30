import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS_RECIPES } from "resources";

import { calculateRecipeCost } from "@utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.OATS,
      quantity: 30,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 100,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.MILK_OATLY_BARISTA,
      quantity: 100,
      measurement: MEASUREMENTS.MILLILITRE
    }
  ]
];

const serveWith: Array<Array<IRecipeIngredient>> = [
  [{ ingredient: INGREDIENTS.RASPBERRIES_FROZEN }],
  [
    {
      ingredient: INGREDIENTS.CINNAMON_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    }
  ],
  [{ ingredient: INGREDIENTS.NECTAR_AGAVE }]
];

const method: Array<string> = [
  "transfer measured oats, water and Oatly to saucepan",
  "heat moderately and continuously stir so it never sticks to the pan",
  "if you're using any frozen berries, add these once it begins to thicken, stir a bit, then remove from heat"
];

const title: string = "Porridge";
const makes: IRecipeMakes = { quantity: 1, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS_RECIPES.PORRIDGE;

const totalCost: number = calculateRecipeCost(ingredients, title);

export const PORRIDGE: IRecipeCard = {
  title,
  favourite: true,
  ingredients,
  serveWith,
  totalCost,
  makes,
  method,
  diet,
  image
};
