import { MEASUREMENTS } from "../../measurements";

export const HERBS_FRESH: IInventoryIngredients = {
  BASIL_FRESH: {
    displayText: "fresh basil",
    cost: {
      quantity: 30,
      measurement: MEASUREMENTS.GRAM,
      price: 0.75,
      payFullAmountAlways: true
    }
  },
  CORIANDER_FRESH: {
    displayText: "fresh coriander",
    cost: {
      quantity: 30,
      measurement: MEASUREMENTS.GRAM,
      price: 0.75,
      payFullAmountAlways: true
    }
  },
  PARSLEY_FRESH: {
    displayText: "fresh parsley",
    cost: {
      quantity: 30,
      measurement: MEASUREMENTS.GRAM,
      price: 0.75,
      payFullAmountAlways: true
    }
  },
  SAGE_FRESH: {
    displayText: "fresh sage"
  }
};
