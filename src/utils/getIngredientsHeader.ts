import { MEASUREMENTS } from "../constants";

import { concatenateQuantityAndMeasurement } from "./concatenateQuantityAndMeasurement";

interface IGetIngredientsHeader {
  defaultIngredientsHeader: string;
  makes: IRecipeMakes;
}

export const getIngredientsHeader = ({
  makes,
  defaultIngredientsHeader
}: IGetIngredientsHeader): string => {
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
