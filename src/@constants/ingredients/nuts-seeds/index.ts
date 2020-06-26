import { NUTS } from "./nuts";
import { SEEDS } from "./seeds";

export const NUTS_AND_SEEDS: IInventoryIngredientsObject = {
  ...NUTS,
  ...SEEDS
};
