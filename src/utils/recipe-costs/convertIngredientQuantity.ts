import { MEASUREMENTS } from "@constants";

interface IGetKnownCostQuantity {
  quantity: number;
  measurement: string;
  knownCost: IngredientCost;
}

export const convertIngredientQuantity = ({
  quantity,
  measurement,
  knownCost
}: IGetKnownCostQuantity): number => {
  switch (true) {
    // 1 tsp = 5.9ml
    case measurement === MEASUREMENTS.TEASPOON &&
      knownCost.measurement === MEASUREMENTS.MILLILITRE:
      return quantity * 5.9;

    // 1 tbsp = 17.8ml
    case measurement === MEASUREMENTS.TABLESPOON &&
      knownCost.measurement === MEASUREMENTS.MILLILITRE:
      return quantity * 17.8;

    // 1000g = 1kg, 1000 ml = 1L
    case (measurement === MEASUREMENTS.GRAM &&
      knownCost.measurement === MEASUREMENTS.KILOGRAM) ||
      (measurement === MEASUREMENTS.MILLILITRE &&
        knownCost.measurement === MEASUREMENTS.LITRE):
      return quantity / 1000;

    // 1kg = 1000g, 1L = 1000ml
    case (measurement === MEASUREMENTS.KILOGRAM &&
      knownCost.measurement === MEASUREMENTS.GRAM) ||
      (measurement === MEASUREMENTS.LITRE &&
        knownCost.measurement === MEASUREMENTS.MILLILITRE):
      return quantity * 1000;

    // 1 tbsp = 3tsp
    case measurement === MEASUREMENTS.TABLESPOON &&
      knownCost.measurement === MEASUREMENTS.TEASPOON:
      return quantity * 3;

    // 3 tsp = 1 tsp
    case measurement === MEASUREMENTS.TEASPOON &&
      knownCost.measurement === MEASUREMENTS.TABLESPOON:
      return quantity / 3;

    // ROUGH ESTIMATE: 1 tbsp = 12g
    case measurement === MEASUREMENTS.TABLESPOON &&
      knownCost.measurement === MEASUREMENTS.GRAM:
      return quantity * 12;

    // ROUGH ESTIMATE: 1 tsp = 4g
    case measurement === MEASUREMENTS.TEASPOON &&
      knownCost.measurement === MEASUREMENTS.GRAM:
      return quantity * 4;

    default:
      alert(
        "There may have been an error converting an ingredient quantity to a known cost quantity"
      );
      return quantity;
  }
};
