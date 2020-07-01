import { MEASUREMENTS } from "../../measurements";

export const VEG_FRESH: IInventoryIngredientsObject = {
  ASPARAGUS: { displayText: "asparagus" },
  AUBERGINE: {
    displayText: "aubergine",
    knownCost: { quantity: 1, price: 0.7 }
  },
  BEANS_GREEN: {
    displayText: "green beans",
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  BROCCOLI: { displayText: "broccoli", knownCost: { quantity: 1, price: 0.7 } },
  BUTTERNUT_SQUASH_MORETON: {
    displayText: "butternut squash",
    knownCost: { quantity: 1, price: 1.5 }
  },
  CARROT: { displayText: "carrot", knownCost: { quantity: 1, price: 0.12 } },
  CAULIFLOWER_REGULAR: {
    displayText: "cauliflower",
    knownCost: { quantity: 1, price: 1 }
  },
  CELERY_STICK: {
    displayText: "celery stick",
    knownCost: { quantity: 1, price: 0.3 }
  },
  COURGETTE: {
    displayText: "courgette",
    knownCost: { quantity: 1, price: 0.35 }
  },
  GARLIC_CLOVE: {
    displayText: "garlic clove",
    knownCost: { quantity: 10, price: 0.3 }
  },
  KALE: {
    displayText: "kale",
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 1.05 }
  },
  LEEK: { displayText: "leek", knownCost: { quantity: 1, price: 0.7 } },
  MUSHROOMS: {
    displayText: "mushrooms",
    knownCost: { quantity: 250, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  MUSHROOMS_CHESTNUT: {
    displayText: "chestnut mushrooms",
    knownCost: { quantity: 300, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  ONION_WHITE_MEDIUM: {
    displayText: "white onion",
    knownCost: { quantity: 1, price: 0.2 }
  },
  ONION_RED_MEDIUM: {
    displayText: "red onion",
    knownCost: { quantity: 1, price: 0.25 }
  },
  ONION_SPRING: {
    displayText: "spring onion",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 0.55 }
  },
  PEPPER_RED: {
    displayText: "red pepper",
    knownCost: { quantity: 1, price: 0.5 }
  },
  PEPPER_GREEN: {
    displayText: "green pepper",
    knownCost: { quantity: 1, price: 0.5 }
  },
  PEPPER_ORANGE: {
    displayText: "orange pepper",
    knownCost: { quantity: 1, price: 0.5 }
  },
  PEPPER_MIXED: {
    displayText: "mixed pepper",
    knownCost: { quantity: 3, price: 1.3 }
  },
  POTATO_MARIS_PIPER: { displayText: "Maris Piper potatoes" },
  POTATO_BAKING: {
    displayText: "baking potato",
    knownCost: { quantity: 1, price: 0.4 }
  },
  POTATO_JERSEY_ROYAL: {
    displayText: "Jersey Royal baby potatoes",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 1.5 }
  },
  POTATO_SWEET: {
    displayText: "sweet potato",
    knownCost: { quantity: 1, price: 0.5 }
  },
  SPINACH: {
    displayText: "spinach",
    knownCost: { quantity: 200, measurement: MEASUREMENTS.GRAM, price: 1.5 }
  }
};
