import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "../../../resources";

import { recipeMethodEntries } from "utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.APRICOTS_DRIED,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BLUEBERRIES_DRIED,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.CRANBERRIES_DRIED,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.OATS,
      quantity: 200,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 140,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SYRUP_GOLDEN,
      quantity: 90,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_BROWN,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const method: IRecipeMethod = [
  preheatOven({ degreesCelcius: 150 }),
  "in a large mixing bowl, stir finely chopped fruit and salt into the oats",
  "melt butter in a saucepan with golden syrup and sugar",
  "add melted butter mix to oat mix and stir thoroughly",
  "transfer mixture to non-stick loaf tin, flatten to cover the whole base",
  "bake for 15-20 minutes (depending how gooey you like it, remembering it will solidify more overnight)",
  "leave to cool before cutting into suitably-sized chunks"
];

const title: IRecipeTitle = "flapjacks";
const makes: IRecipeMakes = { quantity: 12, measurement: MEASUREMENTS.CHUNK };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS.FLAPJACKS;

export const FLAPJACKS: IRecipeCard = {
  title,
  ingredients,
  makes,
  method,
  diet,
  image
};
