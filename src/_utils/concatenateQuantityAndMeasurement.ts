import { MEASUREMENTS } from "_constants";

export const concatenateQuantityAndMeasurement = (
  displayQuantity: string,
  measurement: IIngredientMeasurement
) => {
  if (
    measurement === MEASUREMENTS.GRAM ||
    measurement === MEASUREMENTS.KILOGRAM ||
    measurement === MEASUREMENTS.MILLILITRE ||
    measurement === MEASUREMENTS.CENTIMETRE ||
    measurement === MEASUREMENTS.LITRE
  ) {
    // 2 + g = 2g
    return displayQuantity + measurement;
  }

  if (
    measurement === MEASUREMENTS.TEASPOON ||
    measurement === MEASUREMENTS.TABLESPOON
  ) {
    // 2 + tsp = 2 tsp
    return displayQuantity + " " + measurement;
  }

  if (measurement === MEASUREMENTS.JAR || measurement === MEASUREMENTS.CAN) {
    if (parseInt(displayQuantity) > 1)
      return displayQuantity + " " + measurement + "s";
    return displayQuantity + " " + measurement;
  }

  return displayQuantity;
};
