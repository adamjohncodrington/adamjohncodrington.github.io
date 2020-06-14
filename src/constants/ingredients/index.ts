import { BAKING } from "./baking";
import { CARBS } from "./carbs";
import { DAIRY } from "./dairy";
import { FRUIT } from "./fruit";
import { HERBS } from "./herbs";
import { PROTEIN } from "./protein";
import { SEASONING } from "./seasoning";
import { NUTS_AND_SEEDS } from "./nuts-seeds";
import { VEG } from "./veg";

export const INGREDIENTS = {
  ...BAKING,
  ...CARBS,
  ...DAIRY,
  ...FRUIT,
  ...HERBS,
  ...NUTS_AND_SEEDS,
  ...PROTEIN,
  ...SEASONING,
  ...VEG,

  WATER: { displayText: "water", cost: { price: 0 } },
  WATER_BOILING: { displayText: "boiling water", cost: { price: 0 } }
};
