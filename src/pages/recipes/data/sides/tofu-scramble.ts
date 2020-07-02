import { INGREDIENTS, MEASUREMENTS, DIETS } from "constant-objects";
import { calculateRecipeCost } from "utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.TOFU,
      quantity: 280,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.TURMERIC_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PAPRIKA_SMOKED,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SALT_BLACK,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.THYME_DRIED,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 3,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.OIL_SUNFLOWER,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 1,
      measurement: MEASUREMENTS.TABLESPOON
    }
  ]
];

const method: Array<string> = [
  "drain tofu, crumble into small pieces (using both fingers) into a large mixing bowl",
  "in a small jug, make paste from yeast, turmeric, paprika, salt, pepper, thyme, water and oil",
  "pour the paste over the crumbled tofu and stir until evenly covered",
  "heat the butter over a medium heat in a small saucepan",
  "fry tofu until heated through"
];

const title: string = "Tofu Scramble";
const makes: IRecipeMakes = { quantity: 4, measurement: MEASUREMENTS.PORTION };
const diet: IRecipeDiet = DIETS.VEGAN;

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const TOFU_SCRAMBLE: IRecipeCard = {
  ingredients,
  makes,
  totalCost,
  portionCost,
  method,
  title,
  diet
};
