import { MEASUREMENTS, SAINSBURYS_SEASONING_COST } from "../../measurements";

export const DRIED_SEASONING: IInventoryIngredients = {
  PAPRIKA: {
    displayText: "paprika",
    cost: SAINSBURYS_SEASONING_COST
  },
  ONION_POWDER: {
    displayText: "onion powder",
    cost: SAINSBURYS_SEASONING_COST
  },
  GARLIC_GRANULES: {
    displayText: "garlic granules",
    cost: SAINSBURYS_SEASONING_COST
  },
  PAPRIKA_SMOKED: {
    displayText: "smoked paprika",
    cost: SAINSBURYS_SEASONING_COST
  },
  TURMERIC_GROUND: {
    displayText: "ground turmeric",
    cost: SAINSBURYS_SEASONING_COST
  },
  ALLSPICE_GROUND: {
    displayText: "ground allspice",
    cost: SAINSBURYS_SEASONING_COST
  },
  CHILLI_POWDER: {
    displayText: "chilli powder",
    cost: SAINSBURYS_SEASONING_COST
  },
  CINNAMON_GROUND: {
    displayText: "ground cinnamon",
    cost: SAINSBURYS_SEASONING_COST
  },
  CHILLI_CRUSHED_DRIED: {
    displayText: "dried crushed chillis",
    cost: SAINSBURYS_SEASONING_COST
  },
  NUTMEG_GROUND: {
    displayText: "ground nutmeg",
    cost: SAINSBURYS_SEASONING_COST
  },
  YEAST_NUTRITIONAL: {
    displayText: "nutritional yeast flakes",
    cost: { quantity: 125, measurement: MEASUREMENTS.GRAM, price: 3.4 }
  },
  STOCK_POWDER_VEGAN: {
    displayText: "vegan stock powder",
    cost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 2 }
  }
};
