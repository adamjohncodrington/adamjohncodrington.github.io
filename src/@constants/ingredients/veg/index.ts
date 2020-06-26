import { VEG_CANNED } from "./canned-veg";
import { VEG_FRESH } from "./fresh-veg";
import { VEG_FROZEN } from "./frozen-veg";

export const VEG: IInventoryIngredientsObject = {
  ...VEG_CANNED,
  ...VEG_FRESH,
  ...VEG_FROZEN
};
