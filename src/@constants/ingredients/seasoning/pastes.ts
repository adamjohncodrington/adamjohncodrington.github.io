import { MEASUREMENTS } from "../../measurements";
import { UNICODE } from "../../unicode";

export const PASTES: IPastes = {
  CURRY_PASTE_MADRAS: {
    displayText: "Madras curry paste",
    knownCost: { quantity: 283, measurement: MEASUREMENTS.GRAM, price: 2.25 }
  },
  CURRY_PASTE_ROGAN_JOSH: {
    displayText: "Rogan Josh curry paste",
    knownCost: { quantity: 283, measurement: MEASUREMENTS.GRAM, price: 2.3 }
  },
  TOMATO_PUREE: {
    displayText: UNICODE.TOMATO_PUREE,
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 0.5 }
  }
};
