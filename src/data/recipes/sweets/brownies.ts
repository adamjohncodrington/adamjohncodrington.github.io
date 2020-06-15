import { INGREDIENTS, MEASUREMENTS, DIETS } from "../../../constants";
import { PHOTOS } from "../../../resources";
import { recipeMethodEntries } from "../../../utils/global";

const { preheatOven, FOLD_IN_FLOUR_MIX, bakeForAbout } = recipeMethodEntries();

const ingredients: IRecipeIngredients = [
  [
    {
      ingredient: INGREDIENTS.CHOCOLATE_DARK,
      quantity: 200,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.OIL_SUNFLOWER,
      quantity: 75,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    },

    {
      ingredient: INGREDIENTS.SUGAR_CASTER_GOLDEN,
      quantity: 200,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.COCOA_POWDER,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.MILK_ALMOND_UNSWEETENED,
      quantity: 200,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.VANILLA_EXTRACT,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },

    {
      ingredient: INGREDIENTS.RASPBERRIES_FRESH,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const method: IRecipeMethod = [
  preheatOven({ degreesCelcius: 150 }),
  "in a large mixing bowl, add chocolate (broken into chunks), oil and butter",
  "rest the large mixing bowl over a small saucepan of hot (not boiling) water and stir until melted, then remove from heat",
  "in a small mixing bowl, weigh flour and combine with sugar and cocoa powder",
  "stir in almond milk and vanilla to the melted chocolate",
  FOLD_IN_FLOUR_MIX,
  "gently introduce the raspberries to the mixture",
  "transfer to a non-stick baking tin",
  bakeForAbout({ minutes: 40, skewer: true }),
  "transfer to fridge for 1 hour to speed up cooling and increase fudginess",
  "store in airtight container"
];

const title: IRecipeTitle = "brownies";
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IRecipeImage = PHOTOS.BROWNIES;

export const BROWNIES: IRecipeCard = {
  ingredients,
  method,
  diet,
  image,
  title,
  hide: true
};
