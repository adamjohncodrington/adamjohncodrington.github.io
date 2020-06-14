import { MEASUREMENTS } from "../../measurements";

import { BEANS } from "./beans";
import { SEITAN } from "./seitan";

export const PROTEIN = {
  ...BEANS,
  ...SEITAN,

  CHICKPEAS: {
    displayText: "chickpeas",
    cost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
  },
  EGGS: { displayText: "egg", cost: { quantity: 6, price: 2.1 } },
  LENTIL_RED_DRY: {
    displayText: "dry red lentils",
    cost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.15 }
  },
  TOFU: {
    displayText: "tofu",
    cost: { quantity: 280, measurement: MEASUREMENTS.GRAM, price: 2 }
  }
};
