import { MEASUREMENTS } from "../../constants";

export const convertIngredientQuantity = (
  ingredientQuantity: IIngredientQuantity,
  ingredientMeasurement: IIngredientMeasurement,
  inventoryMeasurement: IIngredientMeasurement
): number => {
  switch (true) {
    // 1 tsp = 5.9ml
    case ingredientMeasurement === MEASUREMENTS.TEASPOON &&
      inventoryMeasurement === MEASUREMENTS.MILLILITRE:
      return ingredientQuantity * 5.9;

    // 1 tbsp = 17.8ml
    case ingredientMeasurement === MEASUREMENTS.TABLESPOON &&
      inventoryMeasurement === MEASUREMENTS.MILLILITRE:
      return ingredientQuantity * 17.8;

    // 1000g = 1kg, 1000 ml = 1L
    case (ingredientMeasurement === MEASUREMENTS.GRAM &&
      inventoryMeasurement === MEASUREMENTS.KILOGRAM) ||
      (ingredientMeasurement === MEASUREMENTS.MILLILITRE &&
        inventoryMeasurement === MEASUREMENTS.LITRE):
      return ingredientQuantity / 1000;

    // 1kg = 1000g, 1L = 1000ml
    case (ingredientMeasurement === MEASUREMENTS.KILOGRAM &&
      inventoryMeasurement === MEASUREMENTS.GRAM) ||
      (ingredientMeasurement === MEASUREMENTS.LITRE &&
        inventoryMeasurement === MEASUREMENTS.MILLILITRE):
      return ingredientQuantity * 1000;

    // 1 tbsp = 3tsp
    case ingredientMeasurement === MEASUREMENTS.TABLESPOON &&
      inventoryMeasurement === MEASUREMENTS.TEASPOON:
      return ingredientQuantity * 3;

    // 3 tsp = 1 tsp
    case ingredientMeasurement === MEASUREMENTS.TEASPOON &&
      inventoryMeasurement === MEASUREMENTS.TABLESPOON:
      return ingredientQuantity / 3;

    // ROUGH ESTIMATE: 1 tbsp = 12g
    case ingredientMeasurement === MEASUREMENTS.TABLESPOON &&
      inventoryMeasurement === MEASUREMENTS.GRAM:
      return ingredientQuantity * 12;

    // ROUGH ESTIMATE: 1 tsp = 4g
    case ingredientMeasurement === MEASUREMENTS.TEASPOON &&
      inventoryMeasurement === MEASUREMENTS.GRAM:
      return ingredientQuantity * 4;

    default:
      alert("ERROR!");
      return 0;
  }
};
