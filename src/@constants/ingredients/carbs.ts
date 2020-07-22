import * as MEASUREMENTS from "../measurements";

export const BREAD_GARLIC: IInventoryIngredient = {
  displayText: "garlic bread"
};

export const BREAD_SOURDOUGH: IInventoryIngredient = {
  displayText: "sourdough"
};

export const BREAD_SOURDOUGH_DARK: IInventoryIngredient = {
  displayText: "dark sourdough"
};

export const SPAGHETTI: IInventoryIngredient = {
  displayText: "spaghetti",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 0.6 }
};

export const PASTA: IInventoryIngredient = { displayText: "pasta" };

export const PASTA_LASAGNE_SHEET_DRIED: IInventoryIngredient = {
  displayText: "dried lasagne sheet",
  knownCost: { quantity: 20, price: 0.7 }
};

export const RICE: IInventoryIngredient = { displayText: "rice" };

export const RICE_BASMATI: IInventoryIngredient = {
  displayText: "basmati rice",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.1 }
};

export const RICE_BROWN: IInventoryIngredient = {
  displayText: "brown rice",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 0.85 }
};

export const RICE_RISOTTO_ARBORIO: IInventoryIngredient = {
  displayText: "arborio risotto rice",
  knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.25 }
};

export const POPPADOMS: IInventoryIngredient = { displayText: "poppadoms" };
