const TABLESPOON: string = "tbsp";

export const SAINSBURYS_SEASONING_COST: IIngredientCost = {
  quantity: 6,
  measurement: TABLESPOON,
  price: 1
};

export const MEASUREMENTS: { [measurement: string]: string } = {
  // WEIGHT
  GRAM: "g",
  KILOGRAM: "kg",

  // SPOONS
  TEASPOON: "tsp",
  TABLESPOON,

  // CAPACITY
  MILLILITRE: "ml",
  LITRE: "L",

  // LENGTH
  CENTIMETRE: "cm",

  // COLLOQUIAL
  CAN: "can",
  SPRIG: "sprig",
  SLICE: "slice",
  JAR: "jar",
  PORTION: "portion",
  SERVING: "serving",
  CHUNK: "chunk",
  SEGMENT: "segment",
  PANCAKE: "pancake"
};
