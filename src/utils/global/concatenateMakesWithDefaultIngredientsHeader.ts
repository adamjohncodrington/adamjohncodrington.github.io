import { MEASUREMENTS } from "../../constants";

import { concatenateQuantityAndMeasurement } from "../local";

export const concatenateMakesWithDefaultIngredientsHeader = (
  makes: IRecipeMakes,
  defaultIngredientsHeader: string
): string => {
  const { quantity, measurement } = makes;

  const quantitySpaceMeasurement: string =
    quantity.toString() + " " + measurement;

  const quantityAndMeasurement: string =
    measurement === MEASUREMENTS.GRAM || measurement === MEASUREMENTS.MILLILITRE
      ? concatenateQuantityAndMeasurement(quantity.toString(), measurement)
      : quantity === 1
      ? quantitySpaceMeasurement
      : quantitySpaceMeasurement + "s";

  return `${defaultIngredientsHeader} (makes ${quantityAndMeasurement})`;
};
