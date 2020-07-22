import * as MEASUREMENTS from "../measurements";
import { SAINSBURYS_SEASONING_COST } from "../sainsburys";

export const PAPRIKA: IInventoryIngredient = {
  displayText: "paprika",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const ONION_POWDER: IInventoryIngredient = {
  displayText: "onion powder",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const GARLIC_GRANULES: IInventoryIngredient = {
  displayText: "garlic granules",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const PAPRIKA_SMOKED: IInventoryIngredient = {
  displayText: "smoked paprika",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const TURMERIC_GROUND: IInventoryIngredient = {
  displayText: "ground turmeric",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const ALLSPICE_GROUND: IInventoryIngredient = {
  displayText: "ground allspice",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const CHILLI_POWDER: IInventoryIngredient = {
  displayText: "chilli powder",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const CINNAMON_GROUND: IInventoryIngredient = {
  displayText: "ground cinnamon",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const CHILLI_CRUSHED_DRIED: IInventoryIngredient = {
  displayText: "dried crushed chillis",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const NUTMEG_GROUND: IInventoryIngredient = {
  displayText: "ground nutmeg",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const YEAST_NUTRITIONAL: IInventoryIngredient = {
  displayText: "nutritional yeast flakes",
  knownCost: { quantity: 125, measurement: MEASUREMENTS.GRAM, price: 3.4 }
};

export const STOCK_POWDER_VEGAN: IInventoryIngredient = {
  displayText: "vegan stock powder",
  knownCost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 2 }
};

export const PEPPER_BLACK_FRESH: IInventoryIngredient = {
  displayText: "freshly ground black pepper",
  knownCost: { price: 0 }
};

export const PEPPER_BLACK_GROUND: IInventoryIngredient = {
  displayText: "ground black pepper",
  knownCost: SAINSBURYS_SEASONING_COST
};

export const SALT_BLACK: IInventoryIngredient = {
  displayText: "black salt (kala namak)",
  knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 2.9 }
};

export const SALT_TABLE: IInventoryIngredient = {
  displayText: "table salt",
  knownCost: { price: 0 }
};

export const SALT_ROCK_FRESH: IInventoryIngredient = {
  displayText: "freshly ground rock salt",
  knownCost: { price: 0 }
};

export const CHILLI_RED_FRESH: IInventoryIngredient = {
  displayText: "fresh red chilli",
  knownCost: { quantity: 2, price: 0.6 }
};

export const CHILLI_BIRD_EYE_FRESH: IInventoryIngredient = {
  displayText: "bird eye chillies",
  knownCost: { quantity: 20, measurement: MEASUREMENTS.GRAM, price: 0.7 }
};

export const GINGER_FRESH: IInventoryIngredient = {
  displayText: "fresh ginger",
  knownCost: { payFullAmountAlways: true, price: 0.3 }
};

export const NUTMEG_FRESH: IInventoryIngredient = {
  displayText: "freshly grated whole nutmeg",
  knownCost: SAINSBURYS_SEASONING_COST
};
