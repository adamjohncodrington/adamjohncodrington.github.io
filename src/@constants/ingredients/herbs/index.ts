import { HERBS_DRIED } from "./dried-herbs";
import { HERBS_FRESH } from "./fresh-herbs";

export const HERBS: IInventoryIngredientsObject = {
  ...HERBS_DRIED,
  ...HERBS_FRESH
};
