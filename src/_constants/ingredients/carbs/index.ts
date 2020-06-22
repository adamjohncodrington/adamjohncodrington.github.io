import { BREAD } from "./bread";
import { PASTA } from "./pasta";
import { RICE } from "./rice";
import { GRAINS } from "./grains";

export const CARBS: IInventoryIngredients = {
  ...BREAD,
  ...PASTA,
  ...RICE,
  ...GRAINS,

  POPPADOMS: { displayText: "poppadoms" }
};
