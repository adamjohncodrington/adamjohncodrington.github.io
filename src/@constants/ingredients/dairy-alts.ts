import * as MEASUREMENTS from "../measurements";

export const BUTTER_VEGAN: IInventoryIngredient = {
  displayText: "Flora Buttery",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 2 }
};

export const CREAM_OAT: IInventoryIngredient = {
  displayText: "oat cream",
  knownCost: {
    quantity: 250,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 0.95
  }
};

export const CHEESE_VEGAN_SLICE: IInventoryIngredient = {
  displayText: "vegan cheese slices",
  knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 2.6 }
};

export const MILK_COCONUT_CANNED: IInventoryIngredient = {
  displayText: "coconut milk",
  knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 1 }
};

export const MILK_ALMOND_UNSWEETENED: IInventoryIngredient = {
  displayText: "unsweetened almond milk",
  knownCost: { quantity: 750, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
};

export const MILK_OATLY_BARISTA: IInventoryIngredient = {
  displayText: "Oatly Barista",
  knownCost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1.85 }
};

export const MILK: IInventoryIngredient = {
  displayText: "milk",
  knownCost: { quantity: 1, measurement: MEASUREMENTS.LITRE, price: 1 }
};
