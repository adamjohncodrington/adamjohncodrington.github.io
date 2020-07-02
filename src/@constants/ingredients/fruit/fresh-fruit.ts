import { MEASUREMENTS } from "../../measurements";

export const FRUIT_FRESH: IFruitFresh = {
  APPLE_BRAMLEY: {
    displayText: "Bramley apple",
    knownCost: { quantity: 1, measurement: MEASUREMENTS.KILOGRAM, price: 2 }
  },
  BANANA: {
    displayText: "banana",
    knownCost: { quantity: 1, price: 0.2 }
  },
  BLACKBERRIES_FRESH: {
    displayText: "fresh blackberries",
    knownCost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 1.5 }
  },
  BLUEBERRIES_FRESH: {
    displayText: "fresh blueberries",
    knownCost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 2 }
  },
  LEMON: {
    displayText: "lemon",
    knownCost: { quantity: 1, price: 0.3 }
  },
  LEMON_LARGE: {
    displayText: "large lemon",
    knownCost: { quantity: 1, price: 0.4 }
  },
  LIME: {
    displayText: "lime",
    knownCost: { quantity: 1, price: 0.3 }
  },
  PINEAPPLE: {
    displayText: "pineapple",
    knownCost: { quantity: 1, price: 1.1 }
  },
  RASPBERRIES_FRESH: {
    displayText: "fresh raspberries",
    knownCost: { quantity: 150, measurement: MEASUREMENTS.GRAM, price: 2 }
  }
};
