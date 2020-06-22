import { FRUIT_DRIED } from "./dried-fruit";
import { FRUIT_FRESH } from "./fresh-fruit";
import { FRUIT_FROZEN } from "./frozen-fruit";
import { JUICE } from "./juice";

export const FRUIT = {
  ...FRUIT_DRIED,
  ...FRUIT_FRESH,
  ...FRUIT_FROZEN,
  ...JUICE
};
