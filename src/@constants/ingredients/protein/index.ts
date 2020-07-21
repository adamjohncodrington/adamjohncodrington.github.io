import * as MEASUREMENTS from "../../measurements";

import { BEANS } from "./beans";
import { SEITAN } from "./seitan";

export const PROTEIN: IProtein = {
  ...BEANS,
  ...SEITAN,

  CHICKPEAS: {
    displayText: "chickpeas",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
  },
  EGGS: { displayText: "egg", knownCost: { quantity: 6, price: 2.1 } },
  LENTIL_RED_DRY: {
    displayText: "dry red lentils",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.15 }
  },
  TOFU: {
    displayText: "tofu",
    knownCost: { quantity: 280, measurement: MEASUREMENTS.GRAM, price: 2 }
  }
};
