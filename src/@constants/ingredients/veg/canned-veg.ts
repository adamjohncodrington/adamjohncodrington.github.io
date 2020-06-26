import { MEASUREMENTS } from "../../measurements";

export const VEG_CANNED: IInventoryIngredientsObject = {
  TOMATO_CHOPPED: {
    displayText: "chopped tomatoes",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.CAN, price: 0.5 }
  },
  TOMATO_PASSATA: {
    displayText: "passata",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 0.45 }
  },
  TOMATO_SUN_DRIED: {
    displayText: "sun dried tomatoes",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.JAR, price: 2 }
  }
};
