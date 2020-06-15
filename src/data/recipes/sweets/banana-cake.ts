import { INGREDIENTS, MEASUREMENTS, DIETS } from "../../../constants";
import { PHOTOS } from "../../../resources";
import { recipeMethodEntries } from "../../../utils/global";

const {
  preheatOven,
  LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN,
  FOLD_IN_FLOUR_MIX,
  bakeForAbout,
  transferToLoafTin
} = recipeMethodEntries();

const ingredients: IRecipeIngredients = [
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

const method: IRecipeMethod = [
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

const title: IRecipeTitle = "banana cake";
const makes: IRecipeMakes = { quantity: 10, measurement: MEASUREMENTS.SLICE };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IRecipeImage = PHOTOS.BANANA_CAKE;

export const BANANA_CAKE: IRecipeCard = {
  title,
  favourite: true,
  ingredients,
  makes,
  method,
  diet,
  image
};
