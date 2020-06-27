import { INGREDIENTS, MEASUREMENTS, DIETS } from "@constants";
import { calculateRecipeCost, recipeMethodEntries } from "@utils";

const { preheatOven, bakeForAbout } = recipeMethodEntries();

const ingredients: Array<Array<IRecipeIngredient>> = [
  [
    {
      ingredient: INGREDIENTS.FLOUR_PLAIN,
      quantity: 125,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.CINNAMON_GROUND,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BICARBONATE_OF_SODA,
      quantity: 0.5,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.SALT_TABLE,
      quantity: 0.25,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.BUTTER_VEGAN,
      quantity: 115,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_BROWN_LIGHT,
      quantity: 100,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.SUGAR_GRANULATED,
      quantity: 50,
      measurement: MEASUREMENTS.GRAM
    },
    { ingredient: INGREDIENTS.EGGS, quantity: 1 },
    {
      ingredient: INGREDIENTS.VANILLA_EXTRACT,
      quantity: 1,
      measurement: MEASUREMENTS.TEASPOON
    },
    {
      ingredient: INGREDIENTS.OATS,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    },
    {
      ingredient: INGREDIENTS.RAISINS,
      quantity: 150,
      measurement: MEASUREMENTS.GRAM
    }
  ]
];

const title: string = "Cookies";
const makes: IRecipeMakes = { quantity: 20 };
const diet: IRecipeDiet = DIETS.VEGETARIAN;
const method: Array<string> = [
  "in a small mixing bowl, combine flour with cinnamon, baking soda and salt",
  "in a large mixing bowl, cream butter with both types of sugar for 1-2 minutes",
  "whisk in egg and vanilla extract to wet ingredients",
  "slowly introduce the flour mix to the wet ingredients and combine",
  "fold in the oats and raisins",
  "cover and refrigerate the cookie dough for 30 minutes",
  preheatOven({ degreesCelcius: 170, bakingTray: true }),
  "scoop balls of cookie dough onto baking tray, leaving space for them to expand",
  bakeForAbout({ minutes: 10, continueToCookOutsideOven: true })
];

const totalCost: number = calculateRecipeCost(ingredients, title);
const portionCost: number = totalCost / makes.quantity;

export const COOKIES: IRecipeCard = {
  ingredients,
  title,
  totalCost,
  method,
  portionCost,
  makes,
  favourite: true,
  diet
};
