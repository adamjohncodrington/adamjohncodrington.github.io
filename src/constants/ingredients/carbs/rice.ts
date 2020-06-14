import { MEASUREMENTS } from "../../measurements";

export const RICE = {
  RICE: { displayText: "rice" },
  RICE_BASMATI: {
    displayText: "basmati rice",
    cost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.1 }
  },
  RICE_BROWN: {
    displayText: "brown rice",
    cost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 0.85 }
  },
  RICE_RISOTTO_ARBORIO: {
    displayText: "arborio risotto rice",
    cost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.25 }
  }
};
