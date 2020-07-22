import * as MEASUREMENTS from "../measurements";

export const WINE_RED: IInventoryIngredient = {
  displayText: "red wine",
  knownCost: {
    quantity: 750,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 6.5
  }
};

export const WATER: IInventoryIngredient = {
  displayText: "water",
  knownCost: { price: 0 }
};

export const WATER_BOILING: IInventoryIngredient = {
  displayText: "boiling water",
  knownCost: { price: 0 }
};

export const VINEGAR_BALSAMIC: IInventoryIngredient = {
  displayText: "balsamic vinegar",
  knownCost: { quantity: 250, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
};

export const VINEGAR_CIDER: IInventoryIngredient = {
  displayText: "cider vinegar",
  knownCost: {
    quantity: 350,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 1.6
  }
};

export const VINEGAR_WHITE_WINE: IInventoryIngredient = {
  displayText: "white wine vinegar",
  knownCost: {
    quantity: 350,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 1.6
  }
};

export const OIL_OLIVE: IInventoryIngredient = {
  displayText: "olive oil",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.MILLILITRE, price: 3 }
};

export const OIL_SUNFLOWER: IInventoryIngredient = {
  displayText: "sunflower oil",
  knownCost: {
    quantity: 1000,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 1.2
  }
};

export const LIQUID_SMOKE: IInventoryIngredient = {
  displayText: "liquid smoke",
  knownCost: {
    quantity: 475,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 6.7
  }
};

export const SOY_SAUCE: IInventoryIngredient = {
  displayText: "soy sauce",
  knownCost: {
    quantity: 150,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 0.7
  }
};

export const KETCHUP_TOMATO: IInventoryIngredient = {
  displayText: "tomato ketchup",
  knownCost: { quantity: 570, measurement: MEASUREMENTS.GRAM, price: 2 }
};

export const MAYONNAISE: IInventoryIngredient = {
  displayText: "mayonnaise",
  knownCost: { quantity: 430, measurement: MEASUREMENTS.MILLILITRE, price: 2 }
};

export const SRIRACHA: IInventoryIngredient = {
  displayText: "sriracha",
  knownCost: {
    quantity: 455,
    measurement: MEASUREMENTS.MILLILITRE,
    price: 3.1
  }
};

export const SWEET_CHILLI_SAUCE: IInventoryIngredient = {
  displayText: "sweet chilli sauce",
  knownCost: { quantity: 230, measurement: MEASUREMENTS.GRAM, price: 1.5 }
};

export const CURRY_PASTE_MADRAS: IInventoryIngredient = {
  displayText: "Madras curry paste",
  knownCost: { quantity: 283, measurement: MEASUREMENTS.GRAM, price: 2.25 }
};

export const CURRY_PASTE_ROGAN_JOSH: IInventoryIngredient = {
  displayText: "Rogan Josh curry paste",
  knownCost: { quantity: 283, measurement: MEASUREMENTS.GRAM, price: 2.3 }
};
