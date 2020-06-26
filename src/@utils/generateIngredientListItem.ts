import { decimalToFractionString } from "./basic/decimalToFractionString";
import { concatenateQuantityAndMeasurement } from "./concatenateQuantityAndMeasurement";

const POTATO = "potato";

export const generateIngredientListItem = ({
  quantity,
  measurement,
  ingredient: { displayText },
  optional,
  notes
}: IRecipeIngredient): string => {
  if (quantity) {
    const quantityString: string = decimalToFractionString(quantity);

    const ingredientString: string =
      quantity > 1 && !measurement
        ? displayText.slice(-POTATO.length) === POTATO
          ? displayText + "es"
          : displayText + "s"
        : displayText;

    const quantityMeasurementString = measurement
      ? concatenateQuantityAndMeasurement(quantityString, measurement)
      : quantityString;

    const quantityMeasurementIngredientString =
      quantityMeasurementString + " " + ingredientString;

    return optional
      ? quantityMeasurementIngredientString + " (optional)"
      : notes
      ? `${quantityMeasurementIngredientString} (${notes})`
      : quantityMeasurementIngredientString;
  }

  return displayText;
};
