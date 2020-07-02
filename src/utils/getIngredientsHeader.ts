import { MEASUREMENTS } from "constant-objects";

import { concatenateQuantityAndMeasurement } from "./concatenateQuantityAndMeasurement";

interface IGetIngredientsHeader {
  defaultIngredientsHeader: string;
  makes: IRecipeMakes;
}

export const getIngredientsHeader = ({
  defaultIngredientsHeader,
  makes
}: IGetIngredientsHeader): string => {
  if (!makes.measurement)
    return `${defaultIngredientsHeader} (makes ${makes.quantity})`;

  const quantitySpaceMeasurement: string =
    makes.quantity.toString() + " " + makes.measurement;

  const quantityAndMeasurement: string =
    makes.measurement === MEASUREMENTS.GRAM ||
    makes.measurement === MEASUREMENTS.MILLILITRE
      ? concatenateQuantityAndMeasurement(
          makes.quantity.toString(),
          makes.measurement
        )
      : makes.quantity === 1
      ? quantitySpaceMeasurement
      : quantitySpaceMeasurement + "s";

  return `${defaultIngredientsHeader} (makes ${quantityAndMeasurement})`;
};
