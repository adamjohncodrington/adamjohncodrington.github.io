import { MEASUREMENTS } from "../../measurements";

export const SEEDS: IInventoryIngredients = {
  SEEDS_CHIA: {
    displayText: "chia seeds",
    cost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 1.5 }
  },
  SEEDS_POPPY: {
    displayText: "poppy seeds",
    cost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 0.9 }
  },
  SEEDS_FLAX_GROUND: {
    displayText: "ground flax seeds",
    cost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 4 }
  },
  SEEDS_PUMPKIN: {
    displayText: "pumpkin seeds",
    cost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  SEEDS_SESAME: {
    displayText: "sesame seeds",
    cost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 1 }
  },
  SEEDS_SUNFLOWER: {
    displayText: "sunflower seeds",
    cost: { quantity: 100, measurement: MEASUREMENTS.GRAM, price: 1 }
  }
};
