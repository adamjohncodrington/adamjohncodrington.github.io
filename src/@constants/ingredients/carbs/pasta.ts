import * as MEASUREMENTS from "../../measurements";

export const PASTA: IPasta = {
  SPAGHETTI: {
    displayText: "spaghetti",
    knownCost: { quantity: 500, measurement: MEASUREMENTS.GRAM, price: 0.6 }
  },
  PASTA: { displayText: "pasta" },
  PASTA_LASAGNE_SHEET_DRIED: {
    displayText: "dried lasagne sheet",
    knownCost: { quantity: 20, price: 0.7 }
  }
};
