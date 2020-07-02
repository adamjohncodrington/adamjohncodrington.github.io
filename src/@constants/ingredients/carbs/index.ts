import { BREAD } from "./bread";
import { PASTA } from "./pasta";
import { RICE } from "./rice";

export const CARBS: ICarbs = {
  ...BREAD,
  ...PASTA,
  ...RICE,

  POPPADOMS: { displayText: "poppadoms" }
};
