import * as MEASUREMENTS from "../measurements";

export const GLUTEN_WHEAT_VITAL: IInventoryIngredient = {
  displayText: "vital wheat gluten",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.99 }
};

export const SEITAN: IInventoryIngredient = { displayText: "seitan" };

export const CHICKPEAS: IInventoryIngredient = {
  displayText: "chickpeas",
  knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
};

export const EGGS: IInventoryIngredient = {
  displayText: "egg",
  knownCost: { quantity: 6, price: 2.1 }
};

export const LENTIL_RED_DRY: IInventoryIngredient = {
  displayText: "dry red lentils",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.15 }
};

export const TOFU: IInventoryIngredient = {
  displayText: "tofu",
  knownCost: { quantity: 280, measurement: MEASUREMENTS.GRAM, price: 2 }
};

export const NUTS_CASHEWS: IInventoryIngredient = {
  displayText: "cashew nuts",
  knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 3 }
};

export const NUTS_PINE: IInventoryIngredient = {
  displayText: "pine nuts",
  knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 3.6 }
};
