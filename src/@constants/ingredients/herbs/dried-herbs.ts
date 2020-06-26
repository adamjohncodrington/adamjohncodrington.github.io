import { MEASUREMENTS } from "../../measurements";

export const HERBS_DRIED: IInventoryIngredientsObject = {
  BASIL_DRIED: {
    displayText: "dried basil",
    knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
  },
  HERBS_MIXED_DRIED: {
    displayText: "dried mixed herbs",
    knownCost: {
      quantity: 6,
      measurement: MEASUREMENTS.TABLESPOON,
      price: 0.75
    }
  },
  OREGANO_DRIED: {
    displayText: "dried oregano",
    knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
  },
  ROSEMARY_DRIED: {
    displayText: "dried rosemary",
    knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
  },
  THYME_DRIED: {
    displayText: "dried thyme",
    knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
  }
};
