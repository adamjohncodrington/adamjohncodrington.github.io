import * as MEASUREMENTS from "../measurements";

export const BASIL_DRIED: IInventoryIngredient = {
  displayText: "dried basil",
  knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
};

export const HERBS_MIXED_DRIED: IInventoryIngredient = {
  displayText: "dried mixed herbs",
  knownCost: {
    quantity: 6,
    measurement: MEASUREMENTS.TABLESPOON,
    price: 0.75
  }
};

export const OREGANO_DRIED: IInventoryIngredient = {
  displayText: "dried oregano",
  knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
};

export const ROSEMARY_DRIED: IInventoryIngredient = {
  displayText: "dried rosemary",
  knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
};

export const THYME_DRIED: IInventoryIngredient = {
  displayText: "dried thyme",
  knownCost: { quantity: 6, measurement: MEASUREMENTS.TABLESPOON, price: 1 }
};

export const BASIL_FRESH: IInventoryIngredient = {
  displayText: "fresh basil",
  knownCost: {
    quantity: 30,
    measurement: MEASUREMENTS.GRAM,
    price: 0.75,
    payFullAmountAlways: true
  }
};

export const CORIANDER_FRESH: IInventoryIngredient = {
  displayText: "fresh coriander",
  knownCost: {
    quantity: 30,
    measurement: MEASUREMENTS.GRAM,
    price: 0.75,
    payFullAmountAlways: true
  }
};

export const PARSLEY_FRESH: IInventoryIngredient = {
  displayText: "fresh parsley",
  knownCost: {
    quantity: 30,
    measurement: MEASUREMENTS.GRAM,
    price: 0.75,
    payFullAmountAlways: true
  }
};

export const SAGE_FRESH: IInventoryIngredient = { displayText: "fresh sage" };
