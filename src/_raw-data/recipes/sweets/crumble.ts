import { INGREDIENTS, MEASUREMENTS, DIETS } from "_constants";
import { PHOTOS } from "_resources";

import { recipeMethodEntries } from "_utils";

const { preheatOven } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 350,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_CASTER_GOLDEN,
      quantity: 175,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 175,
      measurement: MEASUREMENTS.GRAM
    }
  ],
  [
    {
      ingredient: INGREDIENTS.APPLE_BRAMLEY,
      quantity: 1,
      measurement: MEASUREMENTS.KILOGRAM,
      notes: "weighs nearer 700g after peeling and coring"
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 350,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.RASPBERRIES_FROZEN,
      quantity: 350,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.BLACKBERRIES_FROZEN,
      quantity: 500,
      measurement: MEASUREMENTS.GRAM
    },

    {
      ingredient: INGREDIENTS.CINNAMON_GROUND,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON,
      optional: true
    },
    {
      ingredient: INGREDIENTS.SUGAR_DEMERARA,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [{ ingredient: INGREDIENTS.CREAM_OAT }]
];

const method: IRecipeMethod = [
  preheatOven({ degreesCelcius: 160 }),
  "mix sieved flour and sieved caster sugar",
  "introduce chunks of butter, use fingertips to form light crumble but don't overwork",
  "blind bake the crumble topping for 40 minutes (shaking half way through)",
  "peel, core and chop the apples into medium chunks",
  "stew apple in the water until softened, remove from heat",
  "stir in demerara sugar, raspberries, blackberries and cinnamon",
  "transfer fruit to oven dish and cover with the crumble topping",
  "bake for 20 minutes",
  "remove from oven, leave to cool for at least 5 minutes before serving"
];

const makes: IRecipeMakes = { quantity: 8, measurement: MEASUREMENTS.PORTION };
const title: IRecipeTitle = "crumble";
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS.CRUMBLE;

export const CRUMBLE: IRecipeCard = {
  title,
  ingredients,
  makes,
  serveWith,
  favourite: true,
  method,
  diet,
  image
};
