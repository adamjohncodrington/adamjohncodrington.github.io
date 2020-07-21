import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS } from "resources";

import { recipeMethodEntries, calculateRecipeCost } from "utils";

const {
  LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN,
  FOLD_IN_FLOUR_MIX,
  preheatOven,
  bakeForAbout,
  transferToLoafTin
} = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    { ingredient: INGREDIENTS.BANANA, quantity: 4, notes: "very ripe" },
    {
      ingredient: INGREDIENTS.OIL_SUNFLOWER,
      quantity: 75,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 75,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_CASTER_GOLDEN,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_BROWN_LIGHT,
      quantity: 40,
      measurement: MEASUREMENTS.GRAM
    },

    {
      ingredient: INGREDIENTS.VANILLA_EXTRACT,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.FLOUR_SELF_RAISING,
      quantity: 225,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BAKING_POWDER,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BICARBONATE_OF_SODA,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.CINNAMON_GROUND,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.NUTMEG_GROUND,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    }
  ],
  [
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_ICING,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    }
  ]
];

const method: Array<string> = [
  preheatOven({ degreesCelcius: 150 }),
  "blend (peeled) bananas with butter, sugar, oil and vanilla",
  "in a small mixing bowl, weigh flour and stir in the baking powder, bicarbonate of soda, cinnamon and nutmeg",
  FOLD_IN_FLOUR_MIX,
  transferToLoafTin({ sunkenCentre: true }),
  bakeForAbout({ minutes: 40, skewer: true }),
  LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN,
  "make butter icing by whisking butter with icing sugar and water",
  "evenly spread icing over the cake"
];

const title: string = "Banana Cake";
const makes: IRecipeMakes = { quantity: 10, measurement: MEASUREMENTS.SLICE };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IPhoto = PHOTOS.RECIPES.BANANA_CAKE;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const BANANA_CAKE: IRecipe = {
  title,
  ingredients,
  totalCost,
  portionCost,
  makes,
  method,
  diet,
  image
};
