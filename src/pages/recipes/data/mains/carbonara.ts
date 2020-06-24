import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { PHOTOS_RECIPES } from "resources";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.TOMATO_SUN_DRIED,
      quantity: 1,
      measurement: MEASUREMENTS.JAR
    },
    {
      ingredient: INGREDIENTS.SOY_SAUCE,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.LIQUID_SMOKE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    }
  ],
  [
    {
      ingredient: INGREDIENTS.MILK_ALMOND_UNSWEETENED,
      quantity: 750,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.SPINACH,
      quantity: 250,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.NUTS_CASHEWS,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },

    {
      ingredient: INGREDIENTS.CORNFLOUR,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.SALT_BLACK,
      quantity: 1.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    }
  ],
  [
    {
      ingredient: INGREDIENTS.SPAGHETTI,
      quantity: 400,
      measurement: MEASUREMENTS.GRAM
    }
  ],
  [
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 40,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.ONION_WHITE_MEDIUM,
      quantity: 2
    },
    {
      ingredient: INGREDIENTS.GARLIC_CLOVE,
      quantity: 7
    },
    {
      ingredient: INGREDIENTS.MUSHROOMS_CHESTNUT,
      quantity: 300,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.THYME_DRIED,
      quantity: 2,
      measurement: MEASUREMENTS.TEASPOON
    }
  ]
];

const serveWith: Array<Array<IServeWithItem>> = [
  [
    { ingredient: INGREDIENTS.SALT_ROCK_FRESH },
    { ingredient: INGREDIENTS.PEPPER_BLACK_FRESH }
  ]
];

const method: IRecipeMethod = [
  "thoroughly drain sun dried tomatoes from oil",
  "chop tomatoes into many smaller pieces",
  "marinade tomatoes in soy sauce and liquid smoke",
  "chop the onion, mushroom and garlic",
  `blend almond milk with spinach, cashews, yeast, cornflour, salt and pepper`,
  "fry diced onion, crushed garlic, sliced mushrooms and thyme in butter (and some water) until softened",
  "cook spaghetti as per packet instructions, drain and set aside",
  "pour green sauce over frying vegetables, stirring until it thickens",
  "remove from heat and stir in spaghetti and tomatoes until evenly covered"
];

const title: IRecipeTitle = "carbonara";
const makes: IRecipeMakes = { quantity: 5, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;
const image: IImageSrc = PHOTOS_RECIPES.CARBONARA;

export const CARBONARA: IRecipeCard = {
  title,
  ingredients,
  makes,
  serveWith,
  diet,
  method,
  hide: true,
  image
};
