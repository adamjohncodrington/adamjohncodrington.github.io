import * as MAINS from "./mains";
import * as SAUCES from "./sauces";
import * as SIDES from "./sides";
import * as SWEETS from "./sweets";
import { RECIPES_COMING_SOON as COMING_SOON } from "./recipes-coming-soon";

const ALL: Array<IRecipe> = Object.values({
  ...MAINS,
  ...SAUCES,
  ...SIDES,
  ...SWEETS
});

const mains: IRecipeGroup = {
  title: "Mains",
  recipes: [
    MAINS.BOLOGNESE,
    MAINS.CARBONARA,
    MAINS.LASAGNE,
    MAINS.RISOTTO,
    MAINS.ROGAN_JOSH,
    MAINS.SHEPHERDS_PIE,
    MAINS.SWEET_AND_SOUR
  ]
};

const sauces: IRecipeGroup = {
  title: "Sauces",
  recipes: [SAUCES.PESTO, SAUCES.PIRI_PIRI]
};

const sides: IRecipeGroup = {
  title: "Sides",
  recipes: [
    SIDES.BAKED_BEANS,
    SIDES.BANG_BANG_CAULIFLOWER,
    SIDES.CRISPY_KALE,
    SIDES.MASHED_POTATO,
    SIDES.POTATO_SALAD,
    SIDES.RATATOUILLE,
    SIDES.TOFU_SCRAMBLE
  ]
};

const sweets: IRecipeGroup = {
  title: "Sweets",
  recipes: [
    SWEETS.BANANA_CAKE,
    SWEETS.BLUEBERRY_PANCAKES,
    SWEETS.BROWNIES,
    SWEETS.COOKIES,
    SWEETS.CRUMBLE,
    SWEETS.FLAPJACKS,
    SWEETS.LEMON_DRIZZLE,
    SWEETS.PORRIDGE,
    SWEETS.SCONES
  ]
};

const CATEGORISED: Array<IRecipeGroup> = [mains, sides, sauces, sweets];

export const DATA = { ALL, CATEGORISED, COMING_SOON };
