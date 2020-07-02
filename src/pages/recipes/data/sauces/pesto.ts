import { INGREDIENTS, MEASUREMENTS, DIETS } from "constant-objects";
import { calculateRecipeCost } from "utils";

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.BASIL_FRESH,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.NUTS_PINE,
      quantity: 25,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.YEAST_NUTRITIONAL,
      quantity: 4,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.GARLIC_CLOVE,
      quantity: 3
    },
    {
      ingredient: INGREDIENTS.LEMON_JUICE_FRESH,
      quantity: 2,
      measurement: MEASUREMENTS.TABLESPOON
    },
    {
      ingredient: INGREDIENTS.VINEGAR_CIDER,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON,
      optional: true
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.PEPPER_BLACK_GROUND,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.OIL_OLIVE,
      quantity: 50,
      measurement: MEASUREMENTS.MILLILITRE
    },
    {
      ingredient: INGREDIENTS.WATER,
      quantity: 25,
      measurement: MEASUREMENTS.MILLILITRE
    }
  ]
];

const method: Array<string> = [
  "transfer all ingredients to blender",
  "blend until smooth",
  "store in refrigerator for up to 1 week"
];

const title: string = "Pesto";
const diet: IRecipeDiet = DIETS.VEGAN;
const makes: IRecipeMakes = { quantity: 100, measurement: MEASUREMENTS.GRAM };

const totalCost: number = calculateRecipeCost(ingredients, title);

export const PESTO: IRecipeCard = {
  title,
  ingredients,
  totalCost,
  diet,
  makes,
  method
};
