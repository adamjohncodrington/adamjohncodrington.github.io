import { MEASUREMENTS } from "../../measurements";

export const SEEDS: IInventoryIngredientsObject = {
  SEEDS_CHIA: {
    displayText: "chia seeds",
    knownCost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 1.5 }
  },
  SEEDS_POPPY: {
    displayText: "poppy seeds",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 0.9 }
  },
  SEEDS_FLAX_GROUND: {
    displayText: "ground flax seeds",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 4 }
  },
  SEEDS_PUMPKIN: {
    displayText: "pumpkin seeds",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  SEEDS_SESAME: {
    displayText: "sesame seeds",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  SEEDS_SUNFLOWER: {
    displayText: "sunflower seeds",
    knownCost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 1 }
  }
};
