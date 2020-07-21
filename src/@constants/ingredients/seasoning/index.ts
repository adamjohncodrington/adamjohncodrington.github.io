import * as MEASUREMENTS from "../../measurements";
import { SAINSBURYS_SEASONING_COST } from "../../sainsburys";

import { DRIED_SEASONING } from "./dried-seasoning";
import { OILS } from "./oils";
import { PASTES } from "./pastes";
import { SALT } from "./salt";
import { SAUCES } from "./sauces";
import { VINEGARS } from "./vinegars";

export const SEASONING: ISeasoning = {
  ...DRIED_SEASONING,
  ...OILS,
  ...PASTES,
  ...SALT,
  ...SAUCES,
  ...VINEGARS,

  PEPPER_BLACK_FRESH: {
    displayText: "freshly ground black pepper",
    knownCost: { price: 0 }
  },
  PEPPER_BLACK_GROUND: {
    displayText: "ground black pepper",
    knownCost: SAINSBURYS_SEASONING_COST
  },
  WINE_RED: {
    displayText: "red wine",
    knownCost: {
      quantity: 750,
      measurement: MEASUREMENTS.MILLILITRE,
      price: 6.5
    }
  },
  CHILLI_RED_FRESH: {
    displayText: "fresh red chilli",
    knownCost: { quantity: 2, price: 0.6 }
  },
  CHILLI_BIRD_EYE_FRESH: {
    displayText: "bird eye chillies",
    knownCost: { quantity: 20, measurement: MEASUREMENTS.GRAM, price: 0.7 }
  },
  GINGER_FRESH: {
    displayText: "fresh ginger",
    knownCost: { payFullAmountAlways: true, price: 0.3 }
  },
  NUTMEG_FRESH: {
    displayText: "freshly grated whole nutmeg",
    knownCost: SAINSBURYS_SEASONING_COST
  }
};
